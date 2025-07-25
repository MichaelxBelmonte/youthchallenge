'use client'

import { useRouter } from 'next/navigation'
import { Shield, ArrowLeft, AlertTriangle } from 'lucide-react'
import Image from 'next/image'

export default function UnauthorizedPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-dark-950 flex items-center justify-center p-6">
      <div className="w-full max-w-md text-center">
        {/* Logo */}
        <div className="flex justify-center items-center gap-4 mb-8">
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

        {/* Error Card */}
        <div className="card">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-red-400" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Accesso Non Autorizzato</h2>
          
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0" />
              <p className="text-red-400 font-medium">Permessi Insufficienti</p>
            </div>
            <p className="text-dark-300 text-sm">
              Solo gli amministratori autorizzati possono accedere a questa sezione.
            </p>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => router.push('/login')}
              className="w-full btn-primary flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Torna al Login
            </button>

            <div className="text-center">
              <p className="text-dark-400 text-sm">
                Se ritieni che questo sia un errore, contatta il team YouthLink.
              </p>
            </div>
          </div>
        </div>

        {/* Debug Info */}
        <div className="mt-6 p-4 bg-dark-800/50 border border-dark-700 rounded-lg">
          <p className="text-dark-400 text-xs">
            <strong>Debug Info:</strong><br />
            Controlla la console del browser per dettagli tecnici.
          </p>
        </div>
      </div>
    </div>
  )
} 