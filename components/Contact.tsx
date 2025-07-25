'use client'

import { Mail, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section className="section-padding bg-black">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-white mb-4">
            Pronto a <span className="text-gradient">Partecipare?</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            La tua scuola o startup vuole entrare nel programma?
          </p>
        </motion.div>

        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-primaryBlue/20 rounded-2xl p-8 text-center hover:border-primaryBlue/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primaryBlue/10">
            <div className="w-16 h-16 bg-gradient-to-br from-primaryBlue/20 to-accentBlue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-primaryBlue" />
            </div>
            
            <h3 className="text-xl font-heading font-semibold mb-4 text-white">
              Contattaci Subito
            </h3>
            
            <p className="text-white/70 mb-6 leading-relaxed">
              Compila il form (coming soon) o scrivici a info@youthlink.it per ricevere tutte le informazioni 
              sul programma e sui prossimi step di selezione.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:info@youthlink.it"
                className="group relative overflow-hidden bg-gradient-to-r from-primaryBlue to-accentBlue text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primaryBlue/30 flex items-center gap-2 justify-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                info@youthlink.it
              </motion.a>
              
              <button
                disabled
                className="bg-transparent border-2 border-white/20 text-white/40 font-semibold px-8 py-3 rounded-full cursor-not-allowed flex items-center gap-2 justify-center"
              >
                <ExternalLink className="w-5 h-5" />
                Form (coming soon)
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 