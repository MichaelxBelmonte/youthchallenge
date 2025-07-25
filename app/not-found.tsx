import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark-950 flex items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary-500 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-white mb-4">Pagina Non Trovata</h2>
        <p className="text-dark-300 mb-8 max-w-md">
          La pagina che stai cercando non esiste o è stata spostata.
        </p>
        <Link 
          href="/"
          className="btn-primary inline-flex items-center gap-2"
        >
          ← Torna alla Home
        </Link>
      </div>
    </div>
  )
} 