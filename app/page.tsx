// Versione semplificata per debug 404
export default function HomePage() {
  console.log('🏠 HomePage component loaded - SIMPLE VERSION')
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">
            YouthLink Startup Challenge
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ecosistema educativo che connette e ispira i giovani attraverso innovazione e tecnologia.
          </p>
          <div className="space-x-4">
            <a href="/login" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold">
              Accedi
            </a>
            <a href="#features" className="border border-blue-600 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold">
              Scopri di più
            </a>
          </div>
        </div>
        
        <div id="features" className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">🧠 Skills</h3>
            <p>Sviluppa competenze tecniche attraverso percorsi personalizzati.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">👥 Mentor</h3>
            <p>Connettiti con mentor esperti del settore.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">🚀 Stage</h3>
            <p>Opportunità di stage in aziende innovative.</p>
          </div>
        </div>
      </div>
    </div>
  )
} 