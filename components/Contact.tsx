'use client'

import { GraduationCap, Rocket, Mail, Phone, ArrowRight } from 'lucide-react'

export default function Contact() {
  return (
    <section className="py-24 bg-dark-900">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Entra a far parte
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600 block">
              del nostro ecosistema
            </span>
          </h2>
          <p className="text-xl text-dark-300 leading-relaxed">
            Che tu sia una scuola interessata a partecipare o una startup che vuole 
            diventare tutor, abbiamo il percorso giusto per te.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* School Contact */}
          <div className="card-hover scale-hover group">
            <div className="text-center">
              {/* Icon */}
              <div className="w-20 h-20 bg-primary-500/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-500/20 transition-colors duration-300">
                <GraduationCap className="w-10 h-10 text-primary-400 group-hover:text-primary-300 transition-colors duration-300" />
              </div>
              
              {/* Title */}
              <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-primary-100 transition-colors duration-300">
                Sei una Scuola?
              </h3>
              
              {/* Description */}
              <p className="text-dark-300 mb-8 leading-relaxed">
                Porta i tuoi studenti nel futuro dell'innovazione. Partecipa al programma 
                e offri ai tuoi ragazzi un'esperienza formativa unica con mentor professionali 
                e opportunità di stage concrete.
              </p>
              
              {/* Benefits */}
              <div className="space-y-3 mb-8 text-left">
                <div className="flex items-center text-dark-400">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0" />
                  <span className="text-sm">Formazione gratuita per i tuoi studenti</span>
                </div>
                <div className="flex items-center text-dark-400">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0" />
                  <span className="text-sm">Partnership con aziende leader</span>
                </div>
                <div className="flex items-center text-dark-400">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0" />
                  <span className="text-sm">Certificazioni riconosciute</span>
                </div>
                <div className="flex items-center text-dark-400">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0" />
                  <span className="text-sm">Opportunità di stage per i migliori</span>
                </div>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <a 
                  href="mailto:schools@youthlink.it" 
                  className="flex items-center justify-center gap-3 text-primary-400 hover:text-primary-300 transition-colors duration-200"
                >
                  <Mail className="w-5 h-5" />
                  <span>schools@youthlink.it</span>
                </a>
                <a 
                  href="tel:+390123456789" 
                  className="flex items-center justify-center gap-3 text-primary-400 hover:text-primary-300 transition-colors duration-200"
                >
                  <Phone className="w-5 h-5" />
                  <span>+39 012 345 6789</span>
                </a>
              </div>
              
              {/* CTA Button */}
              <div className="mt-8">
                <a 
                  href="mailto:schools@youthlink.it?subject=Interesse Partnership Scuola"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Richiedi Partnership
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Startup Tutor Contact */}
          <div className="card-hover scale-hover group">
            <div className="text-center">
              {/* Icon */}
              <div className="w-20 h-20 bg-primary-500/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-500/20 transition-colors duration-300">
                <Rocket className="w-10 h-10 text-primary-400 group-hover:text-primary-300 transition-colors duration-300" />
              </div>
              
              {/* Title */}
              <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-primary-100 transition-colors duration-300">
                Startup Tutor?
              </h3>
              
              {/* Description */}
              <p className="text-dark-300 mb-8 leading-relaxed">
                Condividi la tua esperienza imprenditoriale con la prossima generazione. 
                Diventa tutor YouthLink e aiuta i giovani talenti a trasformare le loro 
                idee in startup di successo.
              </p>
              
              {/* Benefits */}
              <div className="space-y-3 mb-8 text-left">
                <div className="flex items-center text-dark-400">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0" />
                  <span className="text-sm">Accesso a giovani talenti pre-selezionati</span>
                </div>
                <div className="flex items-center text-dark-400">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0" />
                  <span className="text-sm">Networking con Randstad e partner</span>
                </div>
                <div className="flex items-center text-dark-400">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0" />
                  <span className="text-sm">Visibilità nel Demo Day finale</span>
                </div>
                <div className="flex items-center text-dark-400">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0" />
                  <span className="text-sm">Possibilità di recruiting diretto</span>
                </div>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <a 
                  href="mailto:tutors@youthlink.it" 
                  className="flex items-center justify-center gap-3 text-primary-400 hover:text-primary-300 transition-colors duration-200"
                >
                  <Mail className="w-5 h-5" />
                  <span>tutors@youthlink.it</span>
                </a>
                <a 
                  href="tel:+390123456789" 
                  className="flex items-center justify-center gap-3 text-primary-400 hover:text-primary-300 transition-colors duration-200"
                >
                  <Phone className="w-5 h-5" />
                  <span>+39 012 345 6789</span>
                </a>
              </div>
              
              {/* CTA Button */}
              <div className="mt-8">
                <a 
                  href="mailto:tutors@youthlink.it?subject=Candidatura Startup Tutor"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Diventa Tutor
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 