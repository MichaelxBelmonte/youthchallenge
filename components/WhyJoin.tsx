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
      className="card-white p-8 card-hover-blue"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-primaryBlue/10 rounded-full flex items-center justify-center mb-6">
          <div className="text-primaryBlue">
            {icon}
          </div>
        </div>
        
        <h3 className="text-xl font-heading font-semibold mb-4 text-black">
          {title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  )
}

export default function WhyJoin() {
  const reasons = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Skills & Mindset",
      description: "Learn AI, business & teamwork"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Mentorship Network", 
      description: "Tutor YouthLink + startup + Randstad"
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Community Visibility",
      description: "Demo at Randstad HQ & social reach"
    }
  ]

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
            Why <span className="text-gradient">Join?</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Three reasons why this programme can change your professional future
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