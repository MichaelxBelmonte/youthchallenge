'use client'

import { useEffect, useState } from 'react'
import { User } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabaseClient'

interface Profile {
  id: string
  email: string
  role: 'guest' | 'team' | 'admin'
}

interface AuthState {
  user: User | null
  profile: Profile | null
  loading: boolean
  isAdmin: boolean
}

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    profile: null,
    loading: true,
    isAdmin: false,
  })

  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      
      if (session?.user) {
        // Get user profile
        const { data: profile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single()

        setAuthState({
          user: session.user,
          profile,
          loading: false,
          isAdmin: profile?.role === 'admin',
        })
      } else {
        setAuthState({
          user: null,
          profile: null,
          loading: false,
          isAdmin: false,
        })
      }
    }

    getInitialSession()

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        // Get user profile
        const { data: profile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single()

        setAuthState({
          user: session.user,
          profile,
          loading: false,
          isAdmin: profile?.role === 'admin',
        })
      } else {
        setAuthState({
          user: null,
          profile: null,
          loading: false,
          isAdmin: false,
        })
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  const signOut = async () => {
    await supabase.auth.signOut()
  }

  return {
    ...authState,
    signOut,
  }
} 