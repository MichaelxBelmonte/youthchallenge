'use client'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { Calendar, Users, Lightbulb, Trophy, Rocket, Heart, Target, Award, Presentation } from 'lucide-react'
import { motion } from 'framer-motion'
import { getRoadmapData } from '@/lib/roadmap'

const iconMap = {
  calendar: Calendar,
  users: Users,
  lightbulb: Lightbulb,
  trophy: Trophy,
  rocket: Rocket,
  heart: Heart,
  target: Target,
  award: Award,
  presentation: Presentation,
}

export default function Timeline() {
  const roadmapData = getRoadmapData()

  return (
    <section id="roadmap-section" className="section-padding bg-black">
      <div className="container-custom">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-white mb-4">
            Roadmap del <span className="text-gradient">Programma</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Il percorso completo dallo scouting alla demo finale, con milestone chiare e supporto costante
          </p>
        </motion.div>

        <motion.div
          className="reveal-on-scroll"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-200px" }}
        >
          <VerticalTimeline lineColor="#0066FF">
            {roadmapData.map((item, index) => {
              const IconComponent = iconMap[item.icon as keyof typeof iconMap] || Calendar
              const isCurrentPhase = item.status === 'current'
              const isCompleted = item.status === 'completed'
              
              return (
                <VerticalTimelineElement
                  key={item.id}
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: isCurrentPhase 
                      ? 'linear-gradient(135deg, rgba(0, 102, 255, 0.15), rgba(0, 169, 255, 0.1))' 
                      : isCompleted 
                        ? 'rgba(255, 255, 255, 0.05)' 
                        : 'rgba(255, 255, 255, 0.02)',
                    color: '#fff',
                    border: isCurrentPhase 
                      ? '2px solid #0066FF' 
                      : isCompleted 
                        ? '1px solid rgba(0, 102, 255, 0.3)' 
                        : '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '16px',
                    boxShadow: isCurrentPhase 
                      ? '0 8px 32px rgba(0, 102, 255, 0.3)' 
                      : '0 4px 20px rgba(0, 0, 0, 0.3)',
                  }}
                  contentArrowStyle={{
                    borderRight: isCurrentPhase 
                      ? '7px solid rgba(0, 102, 255, 0.15)' 
                      : isCompleted
                        ? '7px solid rgba(255, 255, 255, 0.05)'
                        : '7px solid rgba(255, 255, 255, 0.02)'
                  }}
                  date={item.date}
                  dateClassName="text-white/60 font-medium"
                  iconStyle={{
                    background: isCurrentPhase 
                      ? 'linear-gradient(135deg, #0066FF, #00A9FF)' 
                      : isCompleted 
                        ? '#0066FF' 
                        : '#333',
                    color: '#fff',
                    boxShadow: isCurrentPhase 
                      ? '0 0 30px rgba(0, 102, 255, 0.6)' 
                      : isCompleted
                        ? '0 0 20px rgba(0, 102, 255, 0.3)'
                        : 'none',
                    border: isCurrentPhase ? '3px solid #00A9FF' : 'none',
                  }}
                  icon={<IconComponent className="w-6 h-6" />}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl font-heading font-semibold text-white">
                      {item.title}
                    </h3>
                    {isCurrentPhase && (
                      <motion.span 
                        className="bg-gradient-to-r from-primaryBlue to-accentBlue text-white text-xs px-3 py-1 rounded-full font-medium"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        SEI QUI
                      </motion.span>
                    )}
                    {isCompleted && (
                      <span className="bg-white/10 text-white/80 text-xs px-3 py-1 rounded-full font-medium">
                        COMPLETATO
                      </span>
                    )}
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    {item.description}
                  </p>
                </VerticalTimelineElement>
              )
            })}
          </VerticalTimeline>
        </motion.div>
      </div>
    </section>
  )
} 