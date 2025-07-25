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
            Ready to <span className="text-gradient">Join?</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            School or startup tutor ready to get involved?
          </p>
        </motion.div>

        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="card-white p-8 text-center card-hover-blue">
            <div className="w-16 h-16 bg-primaryBlue/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-primaryBlue" />
            </div>
            
            <h3 className="text-xl font-heading font-semibold mb-4 text-black">
              Get in Touch
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Fill the form (coming soon) or email info@youthlink.it to get all the information 
              about the programme and next selection steps.
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
        </motion.div>
      </div>
    </section>
  )
} 