'use client'

import { useState } from 'react'
import { ChevronDown, FileText } from 'lucide-react'

interface FAQItem {
  id: string
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    id: 'eligibility',
    question: 'Chi può partecipare al Startup Youth Challenge?',
    answer: 'Possono partecipare studenti di età compresa tra 12 e 22 anni, provenienti da scuole superiori nel raggio di 30 km da Milano. Ogni team è composto da 4-6 studenti provenienti da scuole diverse per favorire la diversità e la collaborazione.'
  },
  {
    id: 'tracks',
    question: 'Quali sono i track verticali disponibili?',
    answer: 'Abbiamo 5 track specializzati: 1) AI & Automation, 2) Sustainability, 3) Food Innovation, 4) Finance Empowerment, 5) Healthcare & Wellbeing. Ogni team sceglierà il track più allineato con la propria idea di startup.'
  },
  {
    id: 'support',
    question: 'Che tipo di supporto riceveremo durante il programma?',
    answer: 'Ogni team avrà un tutor YouthLink dedicato (startup, team universitario o ambassador) e un mentor Randstad. Inoltre, avrete accesso a micro-corsi, AI chatbot per supporto 24/7, peer tutoring e sessioni di mentoring settimanali.'
  },
  {
    id: 'deliverables',
    question: 'Cosa dobbiamo consegnare alla fine del programma?',
    answer: 'Ogni team dovrà presentare: un MVP funzionante, un pitch deck professionale, un video demo di 2 minuti e un SDG impact sheet che documenti l\'impatto sociale del progetto sui Sustainable Development Goals.'
  },
  {
    id: 'funding',
    question: 'È previsto un finanziamento per i team?',
    answer: 'Sì! Ogni team selezionato riceverà un grant di €500 per coprire le spese di sviluppo, prototipazione e altre necessità del progetto. Il budget è riservato per massimo 10 team.'
  },
  {
    id: 'opportunities',
    question: 'Quali opportunità ci sono dopo il Demo Day?',
    answer: 'I migliori progetti avranno accesso a: offerte di stage personalizzate con Randstad e partner, opportunità di collaborazione con startup innovative, possibilità di assunzione post-demo e inserimento nel network YouthLink per future opportunità.'
  }
]

export default function Accordion() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <section className="py-24 bg-dark-950">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Domande
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600 block">
              Frequenti
            </span>
          </h2>
          <p className="text-xl text-dark-300 leading-relaxed mb-8">
            Trova le risposte alle domande più comuni sul Startup Youth Challenge. 
            Per informazioni dettagliate, consulta il regolamento completo.
          </p>
          
          {/* PDF Link */}
          <a 
            href="/docs/regulation.pdf" 
            className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText className="w-5 h-5" />
            Scarica il regolamento completo (PDF)
          </a>
        </div>

        {/* Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div 
                key={item.id} 
                className="card-hover fade-in" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full text-left flex items-center justify-between p-6 focus:outline-none focus:ring-2 focus:ring-primary-300 rounded-xl"
                >
                  <h3 className="text-xl font-semibold text-white pr-4">
                    {item.question}
                  </h3>
                  <ChevronDown 
                    className={`w-6 h-6 text-primary-400 transition-transform duration-300 flex-shrink-0 ${
                      openItems.includes(item.id) ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  openItems.includes(item.id) ? 'max-h-96 pb-6' : 'max-h-0'
                }`}>
                  <div className="px-6">
                    <div className="h-px bg-dark-800 mb-4" />
                    <p className="text-dark-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 