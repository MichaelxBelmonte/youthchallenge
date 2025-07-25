'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      question: "Chi può candidarsi?",
      answer: "Studenti degli **ultimi tre anni** di **licei scientifici o istituti tecnici** situati fino a 30 km da Milano (altre regioni si apriranno nelle edizioni future)."
    },
    {
      question: "Quali sono i requisiti per partecipare?",
      answer: "Essere studenti degli ultimi tre anni di scuole superiori scientifiche o tecniche nell'area milanese, avere passione per l'innovazione e la voglia di mettersi in gioco in un progetto imprenditoriale."
    },
    {
      question: "Come funziona il processo di selezione?",
      answer: "Il processo prevede una prima fase di candidatura online, seguita da colloqui di selezione e formazione dei team. Verranno selezionati 6-10 team dalle scuole partner per partecipare al programma completo."
    },
    {
      question: "Che tipo di supporto riceveremo?",
      answer: "Ogni team avrà accesso a mentor YouthLink, partner startup del settore e supporto Randstad per lo sviluppo professionale. Include anche workshop, risorse online e spazi di co-working."
    },
    {
      question: "Come viene utilizzato il grant di €500?",
      answer: "Il grant può essere utilizzato per sviluppo del prototipo, marketing, strumenti digitali, partecipazione a eventi o altre spese legate al progetto. Deve essere rendicontato secondo le linee guida del programma."
    },
    {
      question: "Dove posso trovare più informazioni?",
      answer: "Visita il nostro sito web, seguici sui social media o contattaci direttamente a info@youthlink.it. Pubblicheremo regolarmente aggiornamenti sul programma e sui prossimi step."
    }
  ]

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-dark-800">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Domande Frequenti
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tutto quello che devi sapere sul Startup Youth Challenge 2026
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4 fade-in">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="card border border-dark-600 hover:border-primary-500/50 transition-colors"
            >
              <button
                className="w-full px-6 py-6 text-left flex items-center justify-between group"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-primary-300 transition-colors">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 border-t border-dark-600">
                  <div className="pt-4 text-gray-300 leading-relaxed">
                    {faq.answer.split('**').map((part, i) => 
                      i % 2 === 0 ? part : <strong key={i} className="text-primary-300">{part}</strong>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 