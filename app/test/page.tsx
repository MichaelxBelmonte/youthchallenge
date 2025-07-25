export default function TestPage() {
  return (
    <div className="min-h-screen bg-dark-950 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          🚀 Test Page - Deployment Funziona!
        </h1>
        <p className="text-dark-300">
          Se vedi questa pagina, il deployment è riuscito.
        </p>
        <a 
          href="/" 
          className="inline-block mt-4 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600"
        >
          ← Torna alla Home
        </a>
      </div>
    </div>
  )
} 