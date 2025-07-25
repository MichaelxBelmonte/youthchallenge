'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'
import { 
  Users, 
  Plus, 
  Search, 
  Edit3, 
  Trash2, 
  LogOut, 
  Settings,
  FileText,
  Tag,
  AtSign,
  Calendar,
  BarChart3
} from 'lucide-react'
import Image from 'next/image'

interface Team {
  id: string
  name: string
  description: string
  members_count: number
  created_at: string
  status: 'active' | 'completed' | 'paused'
}

interface Note {
  id: string
  title: string
  content: string
  tags: string[]
  mentioned_users: string[]
  created_at: string
  author_email: string
}

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const [teams, setTeams] = useState<Team[]>([])
  const [notes, setNotes] = useState<Note[]>([])
  const [loading, setLoading] = useState(true)
  const [showAddTeam, setShowAddTeam] = useState(false)
  const [showAddNote, setShowAddNote] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()

  // Form states
  const [newTeam, setNewTeam] = useState({
    name: '',
    description: '',
    status: 'active' as const
  })

  const [newNote, setNewNote] = useState({
    title: '',
    content: '',
    tags: '',
    mentioned_users: ''
  })

  useEffect(() => {
    checkUser()
    loadTeams()
    loadNotes()
  }, [])

  const checkUser = async () => {
    console.log('🔍 Dashboard: Controllo utente iniziato')
    
    const { data: { session } } = await supabase.auth.getSession()
    console.log('📊 Dashboard: Sessione trovata:', !!session, session?.user?.email || 'no email')
    
    if (!session) {
      console.log('❌ Dashboard: Nessuna sessione, reindirizzamento al login')
      router.push('/login')
      return
    }

    // Verifica che l'utente sia admin
    console.log('🔍 Dashboard: Controllo ruolo admin per user ID:', session.user.id)
    
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('role, email, id')
      .eq('id', session.user.id)
      .single()

    console.log('📊 Dashboard: Risultato query profilo:', { profile, profileError })

    if (profileError || !profile || profile.role !== 'admin') {
      console.error('❌ Dashboard: Utente non admin, reindirizzamento...', { profile, profileError })
      await supabase.auth.signOut()
      router.push('/unauthorized')
      return
    }

    console.log('✅ Dashboard: Utente admin confermato:', profile)
    setUser(session.user)
    setLoading(false)
  }

  const loadTeams = async () => {
    const { data, error } = await supabase
      .from('teams')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (data) setTeams(data)
  }

  const loadNotes = async () => {
    // Per ora usiamo dati mock, poi integreremo con il database
    const mockNotes: Note[] = [
      {
        id: '1',
        title: 'Riunione Team Alpha',
        content: 'Discussione sui prossimi milestone del progetto. @admin2@youthlink.it ha proposto nuove funzionalità.',
        tags: ['riunione', 'milestone'],
        mentioned_users: ['admin2@youthlink.it'],
        created_at: new Date().toISOString(),
        author_email: user?.email || ''
      }
    ]
    setNotes(mockNotes)
  }

  const handleAddTeam = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const { data, error } = await supabase
      .from('teams')
      .insert([{
        name: newTeam.name,
        description: newTeam.description,
        status: newTeam.status,
        members_count: 0
      }])
      .select()

    if (data) {
      setTeams([data[0], ...teams])
      setNewTeam({ name: '', description: '', status: 'active' })
      setShowAddTeam(false)
    }
  }

  const handleDeleteTeam = async (id: string) => {
    if (!confirm('Sei sicuro di voler eliminare questo team?')) return

    const { error } = await supabase
      .from('teams')
      .delete()
      .eq('id', id)

    if (!error) {
      setTeams(teams.filter(team => team.id !== id))
    }
  }

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault()
    
    const note: Note = {
      id: Date.now().toString(),
      title: newNote.title,
      content: newNote.content,
      tags: newNote.tags.split(',').map(tag => tag.trim()).filter(Boolean),
      mentioned_users: newNote.mentioned_users.split(',').map(user => user.trim()).filter(Boolean),
      created_at: new Date().toISOString(),
      author_email: user?.email || ''
    }

    setNotes([note, ...notes])
    setNewNote({ title: '', content: '', tags: '', mentioned_users: '' })
    setShowAddNote(false)
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  const filteredTeams = teams.filter(team => 
    team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    team.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-950 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark-950">
      {/* Header */}
      <header className="bg-dark-900 border-b border-dark-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image 
                src="/YOUTHLINK-LOGO-COMPACT-01.png" 
                alt="YouthLink Logo" 
                width={40} 
                height={40}
                className="object-contain"
              />
              <div>
                <h1 className="text-xl font-bold text-white">Dashboard Admin</h1>
                <p className="text-sm text-dark-400">Benvenuto, {user?.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="p-2 text-dark-400 hover:text-white transition-colors">
                <Settings className="w-5 h-5" />
              </button>
              <button 
                onClick={handleLogout}
                className="p-2 text-dark-400 hover:text-red-400 transition-colors"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-primary-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{teams.length}</p>
                <p className="text-dark-400">Team Attivi</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{notes.length}</p>
                <p className="text-dark-400">Note Totali</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">
                  {teams.reduce((acc, team) => acc + team.members_count, 0)}
                </p>
                <p className="text-dark-400">Membri Totali</p>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-400" />
            <input
              type="text"
              placeholder="Cerca team, progetti o note..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={() => setShowAddTeam(true)}
              className="btn-primary flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Nuovo Team
            </button>
            
            <button
              onClick={() => setShowAddNote(true)}
              className="btn-secondary flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Nuova Nota
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Teams Section */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Users className="w-5 h-5" />
                Team
              </h2>
              <span className="text-sm text-dark-400">{filteredTeams.length} team</span>
            </div>

            <div className="space-y-4 max-h-96 overflow-y-auto">
              {filteredTeams.map((team) => (
                <div key={team.id} className="p-4 bg-dark-800 rounded-lg border border-dark-700">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="font-semibold text-white">{team.name}</h3>
                      <p className="text-sm text-dark-300 mt-1">{team.description}</p>
                    </div>
                    
                    <div className="flex items-center gap-2 ml-4">
                      <button className="p-1 text-dark-400 hover:text-primary-400 transition-colors">
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleDeleteTeam(team.id)}
                        className="p-1 text-dark-400 hover:text-red-400 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-dark-400">
                      {team.members_count} membri
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      team.status === 'active' ? 'bg-green-500/10 text-green-400' :
                      team.status === 'completed' ? 'bg-blue-500/10 text-blue-400' :
                      'bg-yellow-500/10 text-yellow-400'
                    }`}>
                      {team.status === 'active' ? 'Attivo' : 
                       team.status === 'completed' ? 'Completato' : 'In Pausa'}
                    </span>
                  </div>
                </div>
              ))}

              {filteredTeams.length === 0 && (
                <div className="text-center py-8 text-dark-400">
                  <Users className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Nessun team trovato</p>
                </div>
              )}
            </div>
          </div>

          {/* Notes Section */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Note e Aggiornamenti
              </h2>
              <span className="text-sm text-dark-400">{filteredNotes.length} note</span>
            </div>

            <div className="space-y-4 max-h-96 overflow-y-auto">
              {filteredNotes.map((note) => (
                <div key={note.id} className="p-4 bg-dark-800 rounded-lg border border-dark-700">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-white">{note.title}</h3>
                    <span className="text-xs text-dark-400">
                      {new Date(note.created_at).toLocaleDateString('it-IT')}
                    </span>
                  </div>
                  
                  <p className="text-sm text-dark-300 mb-3 leading-relaxed">
                    {note.content}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {note.tags.map((tag, index) => (
                      <span key={index} className="inline-flex items-center gap-1 px-2 py-1 bg-primary-500/10 text-primary-400 rounded text-xs">
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {note.mentioned_users.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {note.mentioned_users.map((user, index) => (
                        <span key={index} className="inline-flex items-center gap-1 px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs">
                          <AtSign className="w-3 h-3" />
                          {user}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {filteredNotes.length === 0 && (
                <div className="text-center py-8 text-dark-400">
                  <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Nessuna nota trovata</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Add Team Modal */}
      {showAddTeam && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50">
          <div className="card max-w-md w-full">
            <h3 className="text-xl font-bold text-white mb-6">Nuovo Team</h3>
            
            <form onSubmit={handleAddTeam} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Nome Team
                </label>
                <input
                  type="text"
                  required
                  value={newTeam.name}
                  onChange={(e) => setNewTeam({...newTeam, name: e.target.value})}
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Es. Team Alpha"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Descrizione
                </label>
                <textarea
                  required
                  value={newTeam.description}
                  onChange={(e) => setNewTeam({...newTeam, description: e.target.value})}
                  rows={3}
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  placeholder="Descrivi il progetto del team..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Status
                </label>
                <select
                  value={newTeam.status}
                  onChange={(e) => setNewTeam({...newTeam, status: e.target.value as any})}
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="active">Attivo</option>
                  <option value="paused">In Pausa</option>
                  <option value="completed">Completato</option>
                </select>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddTeam(false)}
                  className="flex-1 btn-secondary"
                >
                  Annulla
                </button>
                <button type="submit" className="flex-1 btn-primary">
                  Crea Team
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Note Modal */}
      {showAddNote && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50">
          <div className="card max-w-lg w-full">
            <h3 className="text-xl font-bold text-white mb-6">Nuova Nota</h3>
            
            <form onSubmit={handleAddNote} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Titolo
                </label>
                <input
                  type="text"
                  required
                  value={newNote.title}
                  onChange={(e) => setNewNote({...newNote, title: e.target.value})}
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Titolo della nota..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Contenuto
                </label>
                <textarea
                  required
                  value={newNote.content}
                  onChange={(e) => setNewNote({...newNote, content: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  placeholder="Scrivi il contenuto della nota... Usa @email per taggare utenti."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Tag (separati da virgola)
                </label>
                <input
                  type="text"
                  value={newNote.tags}
                  onChange={(e) => setNewNote({...newNote, tags: e.target.value})}
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="riunione, milestone, importante"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Utenti Menzionati (email separate da virgola)
                </label>
                <input
                  type="text"
                  value={newNote.mentioned_users}
                  onChange={(e) => setNewNote({...newNote, mentioned_users: e.target.value})}
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="admin1@youthlink.it, admin2@youthlink.it"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddNote(false)}
                  className="flex-1 btn-secondary"
                >
                  Annulla
                </button>
                <button type="submit" className="flex-1 btn-primary">
                  Salva Nota
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
} 