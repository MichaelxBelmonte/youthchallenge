'use client'

import { Brain, Users, Megaphone } from 'lucide-react'
import { motion } from 'framer-motion'

interface WhyJoinCardProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}

function WhyJoinCard({ icon, title, description, index }: WhyJoinCardProps) {
  return (
    <motion.div 
      className="group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-primaryBlue/20 rounded-2xl p-8 transition-all duration-300 hover:border-primaryBlue/50 hover:bg-gradient-to-br hover:from-primaryBlue/10 hover:to-accentBlue/5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ 
        scale: 1.05, 
        y: -10,
        boxShadow: "0 20px 40px rgba(0, 102, 255, 0.2)"
      }}
    >
      <div className="flex flex-col items-center text-center relative z-10">
        <motion.div 
          className="w-20 h-20 bg-gradient-to-br from-primaryBlue/20 to-accentBlue/10 rounded-2xl flex items-center justify-center mb-6 group-hover:from-primaryBlue/30 group-hover:to-accentBlue/20 transition-all duration-300"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-primaryBlue group-hover:text-white transition-colors duration-300">
            {icon}
          </div>
        </motion.div>
        
        <h3 className="text-xl font-heading font-semibold mb-4 text-white group-hover:text-gradient transition-all duration-300">
          {title}
        </h3>
        
        <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
          {description}
        </p>
      </div>
      
      {/* Gradient overlay on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primaryBlue/5 to-accentBlue/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ scale: 0 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

export default function WhyJoin() {
  const reasons = [
    {
      icon: <Brain className="w-10 h-10" />,
      title: "Skills & Mindset",
      description: "Impara strumenti AI, fondamenti di business e lavoro di squadra"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Mentorship & Network", 
      description: "Tutor YouthLink + partner startup + supporto Randstad"
    },
    {
      icon: <Megaphone className="w-10 h-10" />,
      title: "Community & Visibilità",
      description: "Demo presso Randstad HQ e visibilità sui social"
    }
  ]

  return (
    <section className="section-padding bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primaryBlue/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accentBlue/10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-white mb-4">
            Perché <span className="text-gradient">Partecipare?</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Tre motivi per cui questo programma può cambiare il tuo futuro professionale
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <WhyJoinCard
              key={index}
              icon={reason.icon}
              title={reason.title}
              description={reason.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
} 