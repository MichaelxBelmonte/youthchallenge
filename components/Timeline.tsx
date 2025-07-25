'use client'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { Calendar, Users, Lightbulb, Trophy, Rocket, Heart, Target, Award, Presentation } from 'lucide-react'
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
    <section id="roadmap" className="py-20 bg-dark-900">
      <div className="container-custom">
        {/* Header con badge Pre-launch */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 bg-primary-500/10 text-primary-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary-500/20">
            <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
            Pre-launch · Ottobre–Dicembre 2025
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Roadmap del Programma
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Il percorso completo dallo scouting alla demo finale, con milestone chiare e supporto costante
          </p>
        </div>

        <div className="fade-in">
          <VerticalTimeline lineColor="#0066FF">
            {roadmapData.map((item, index) => {
              const IconComponent = iconMap[item.icon as keyof typeof iconMap] || Calendar
              const isCurrentPhase = item.status === 'in-progress'
              
              return (
                <VerticalTimelineElement
                  key={item.id}
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: isCurrentPhase ? 'rgba(0, 102, 255, 0.1)' : '#1E1E1E',
                    color: '#fff',
                    border: isCurrentPhase ? '1px solid rgba(0, 102, 255, 0.3)' : '1px solid #333',
                    borderRadius: '12px',
                    boxShadow: isCurrentPhase 
                      ? '0 4px 20px rgba(0, 102, 255, 0.2)' 
                      : '0 4px 20px rgba(0, 0, 0, 0.3)',
                  }}
                  contentArrowStyle={{
                    borderRight: isCurrentPhase 
                      ? '7px solid rgba(0, 102, 255, 0.1)' 
                      : '7px solid #1E1E1E'
                  }}
                  date={item.date}
                  dateClassName="text-gray-400"
                  iconStyle={{
                    background: isCurrentPhase ? '#0066FF' : '#333',
                    color: '#fff',
                    boxShadow: isCurrentPhase 
                      ? '0 0 20px rgba(0, 102, 255, 0.4)' 
                      : 'none',
                  }}
                  icon={<IconComponent className="w-6 h-6" />}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    {isCurrentPhase && (
                      <span className="bg-primary-500 text-white text-xs px-2 py-1 rounded-full font-medium animate-pulse">
                        IN CORSO
                      </span>
                    )}
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </VerticalTimelineElement>
              )
            })}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  )
} 