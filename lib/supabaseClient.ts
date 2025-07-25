import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

// Client per componenti client-side
export const supabase = createClientComponentClient<Database>()

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          role: 'guest' | 'team' | 'admin'
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          role?: 'guest' | 'team' | 'admin'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          role?: 'guest' | 'team' | 'admin'
          created_at?: string
          updated_at?: string
        }
      }
      teams: {
        Row: {
          id: string
          name: string
          school_id: string | null
          tutor_id: string | null
          mentor_id: string | null
          status: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          school_id?: string | null
          tutor_id?: string | null
          mentor_id?: string | null
          status?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          school_id?: string | null
          tutor_id?: string | null
          mentor_id?: string | null
          status?: string
          created_at?: string
          updated_at?: string
        }
      }
      milestones: {
        Row: {
          id: string
          team_id: string
          label: string
          done: boolean
          date: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          team_id: string
          label: string
          done?: boolean
          date?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          team_id?: string
          label?: string
          done?: boolean
          date?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      settings: {
        Row: {
          key: string
          value: string
          created_at: string
          updated_at: string
        }
        Insert: {
          key: string
          value: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          key?: string
          value?: string
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
} 