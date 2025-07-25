import { ArrowRight } from 'lucide-react'

export default function ProgrammeSnapshot() {
  return (
    <section className="py-16 bg-dark-800">
      <div className="container-custom">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Il programma in sintesi
          </h2>
          <p className="text-gray-400">
            Dal reclutamento al demo day: il percorso completo
          </p>
        </div>
        
        <div className="fade-in">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="bg-primary-500/10 rounded-lg p-6 mb-4 border border-primary-500/20">
                <div className="text-2xl font-bold text-primary-400 mb-2">20</div>
                <div className="text-sm text-gray-300 font-medium">scuole target</div>
              </div>
            </div>
            
            <ArrowRight className="w-6 h-6 text-primary-400 hidden md:block" />
            <div className="w-6 h-6 border-l-2 border-primary-400 md:hidden" />
            
            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="bg-primary-500/10 rounded-lg p-6 mb-4 border border-primary-500/20">
                <div className="text-2xl font-bold text-primary-400 mb-2">5–10</div>
                <div className="text-sm text-gray-300 font-medium">team selezionati</div>
              </div>
            </div>
            
            <ArrowRight className="w-6 h-6 text-primary-400 hidden md:block" />
            <div className="w-6 h-6 border-l-2 border-primary-400 md:hidden" />
            
            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="bg-primary-500/10 rounded-lg p-6 mb-4 border border-primary-500/20">
                <div className="text-2xl font-bold text-primary-400 mb-2">€500</div>
                <div className="text-sm text-gray-300 font-medium">grant</div>
              </div>
            </div>
            
            <ArrowRight className="w-6 h-6 text-primary-400 hidden md:block" />
            <div className="w-6 h-6 border-l-2 border-primary-400 md:hidden" />
            
            {/* Step 4 */}
            <div className="flex flex-col items-center">
              <div className="bg-primary-500/10 rounded-lg p-6 mb-4 border border-primary-500/20">
                <div className="text-2xl font-bold text-primary-400 mb-2">4</div>
                <div className="text-sm text-gray-300 font-medium">mesi sprint</div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm">
              Gennaio–Maggio 2026 · Demo finale presso Randstad HQ Milano
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 