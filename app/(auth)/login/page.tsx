'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'
import { Eye, EyeOff, LogIn, AlertCircle } from 'lucide-react'
import Image from 'next/image'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (signInError) {
        setError('Credenziali non valide. Verifica email e password.')
        return
      }

      if (data.user) {
        // Check if user is admin
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('role, email, id')
          .eq('id', data.user.id)
          .single()

        if (profileError) {
          await supabase.auth.signOut()
          setError(`Errore database: ${profileError.message}`)
          return
        }

        if (!profile) {
          await supabase.auth.signOut()
          setError('Profilo utente non trovato.')
          return
        }

        if (profile.role !== 'admin') {
          await supabase.auth.signOut()
          setError('Accesso non autorizzato. Solo gli admin possono accedere.')
          return
        }
        
        console.log('✅ Admin verificato, reindirizzamento al dashboard...')
        
        // Aspetta un momento per assicurarsi che la sessione sia salvata
        await new Promise(resolve => setTimeout(resolve, 500))
        
        // Usa window.location.href invece di router.push per forzare un refresh completo
        window.location.href = '/dashboard'
      }
    } catch (err) {
      setError('Si è verificato un errore durante il login.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-dark-950 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-4 mb-6">
            <Image 
              src="/YOUTHLINK-LOGO-COMPACT-01.png" 
              alt="YouthLink Logo" 
              width={60} 
              height={60}
              className="object-contain"
            />
            <div className="text-left">
              <h1 className="text-2xl font-bold text-white">YouthLink</h1>
              <p className="text-sm text-primary-400 font-medium">Admin Dashboard</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-dark-400 text-sm">
            <span>powered by</span>
            <Image 
              src="/Randstad.png" 
              alt="Randstad Logo" 
              width={80} 
              height={26}
              className="object-contain"
            />
          </div>
        </div>

        {/* Login Form */}
        <div className="card">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">Accesso Admin</h2>
            <p className="text-dark-300">
              Inserisci le tue credenziali per accedere al dashboard amministrativo.
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                placeholder="admin@youthlink.it"
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors pr-12"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-dark-400 hover:text-white transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary flex items-center justify-center gap-2 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <LogIn className="w-5 h-5" />
              )}
              {loading ? 'Accesso in corso...' : 'Accedi'}
            </button>
          </form>

          {/* Admin Info */}
          <div className="mt-8 p-4 bg-primary-500/10 border border-primary-500/20 rounded-lg">
            <p className="text-primary-400 text-sm text-center">
              <strong>Solo per amministratori autorizzati</strong><br />
              Se non hai le credenziali, contatta il team YouthLink.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 