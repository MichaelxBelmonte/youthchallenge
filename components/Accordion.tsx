'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

interface FAQItem {
  question: string
  answer: string
}

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      question: "Chi può candidarsi?",
      answer: "Studenti degli **ultimi 3 anni** di **licei scientifici o istituti tecnici** situati fino a 30 km da Milano (altre regioni si apriranno nelle edizioni future)."
    },
    {
      question: "Quali sono i requisiti?",
      answer: "Essere studenti degli ultimi 3 anni di liceo scientifico/istituto tecnico nell'area milanese, avere passione per l'innovazione e essere pronti a tuffarsi in un progetto imprenditoriale."
    },
    {
      question: "Come funziona la selezione?",
      answer: "Candidatura online → colloqui di selezione → formazione team. Selezioneremo 6-10 team dalle scuole partner per il programma completo."
    },
    {
      question: "Che supporto riceveremo?",
      answer: "Ogni team avrà mentor YouthLink, partner startup e supporto Randstad per lo sviluppo professionale. Inoltre workshop, risorse online e spazi di co-working."
    },
    {
      question: "Come possiamo usare il grant di €500?",
      answer: "Per sviluppo del prototipo, marketing, strumenti digitali, partecipazione a eventi o altre spese legate al progetto. Deve essere documentato secondo le linee guida del programma."
    },
    {
      question: "Dove trovo più informazioni?",
      answer: "Visita il nostro sito web, seguici sui social media o contattaci direttamente a info@youthlink.it. Pubblicheremo regolarmente aggiornamenti sul programma e sui prossimi step."
    }
  ]

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section-padding bg-black">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-white mb-4">
            <span className="text-gradient">Domande Frequenti</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Tutto quello che devi sapere sul Startup Youth Challenge 2026
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="card border border-white/10 hover:border-primaryBlue/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <button
                className="w-full px-6 py-6 text-left flex items-center justify-between group"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg font-heading font-semibold text-white group-hover:text-primaryBlue transition-colors">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-white/60 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <motion.div 
                  className="px-6 pb-6 border-t border-white/10"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="pt-4 text-white/80 leading-relaxed">
                    {faq.answer.split('**').map((part, i) => 
                      i % 2 === 0 ? part : <strong key={i} className="text-primaryBlue">{part}</strong>
                    )}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 