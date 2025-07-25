'use client'

import { Mail, ExternalLink } from 'lucide-react'

export default function Contact() {
  return (
    <section className="py-20 bg-dark-900">
      <div className="container-custom">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Vuoi partecipare?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            La tua scuola o startup vuole entrare nel programma?
          </p>
        </div>

        <div className="max-w-2xl mx-auto fade-in">
          <div className="card text-center p-8 border border-primary-500/20 bg-primary-500/5">
            <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-primary-400" />
            </div>
            
            <h3 className="text-xl font-semibold text-white mb-4">
              Contattaci subito
            </h3>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Compila il form (coming soon) o scrivici direttamente per ricevere tutte le informazioni 
              sul programma e sui prossimi step di selezione.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@youthlink.it"
                className="btn-primary flex items-center gap-2 justify-center group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                info@youthlink.it
              </a>
              
              <button
                disabled
                className="btn-secondary opacity-50 cursor-not-allowed flex items-center gap-2 justify-center"
              >
                <ExternalLink className="w-5 h-5" />
                Form (coming soon)
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 