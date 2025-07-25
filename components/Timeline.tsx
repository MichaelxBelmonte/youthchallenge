'use client'

import { 
  Rocket, 
  Heart, 
  Presentation, 
  Users, 
  Flag, 
  Code, 
  TestTube, 
  Trophy, 
  BarChart3 
} from 'lucide-react'
import { getRoadmapData, RoadmapItem } from '@/lib/roadmap'

const iconMap = {
  rocket: Rocket,
  handshake: Heart,
  presentation: Presentation,
  users: Users,
  flag: Flag,
  code: Code,
  'test-tube': TestTube,
  trophy: Trophy,
  chart: BarChart3,
}

export default function Timeline() {
  const roadmapData = getRoadmapData()

  const getStatusColor = (status: RoadmapItem['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500 border-green-400'
      case 'in-progress':
        return 'bg-primary-500 border-primary-400 animate-pulse'
      case 'pending':
        return 'bg-dark-700 border-dark-600'
      default:
        return 'bg-dark-700 border-dark-600'
    }
  }

  const getTextColor = (status: RoadmapItem['status']) => {
    switch (status) {
      case 'completed':
        return 'text-green-400'
      case 'in-progress':
        return 'text-primary-400'
      case 'pending':
        return 'text-dark-400'
      default:
        return 'text-dark-400'
    }
  }

  return (
    <section className="py-24 bg-dark-900">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Roadmap del
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600 block">
              Startup Youth Challenge
            </span>
          </h2>
          <p className="text-xl text-dark-300 leading-relaxed">
            Un percorso strutturato di 10 mesi per trasformare le tue idee in realtà, 
            dal concept al Demo Day finale.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-400 to-dark-600" />
            
            {/* Timeline items */}
            <div className="space-y-12">
              {roadmapData.map((item, index) => {
                const IconComponent = iconMap[item.icon as keyof typeof iconMap] || Rocket
                
                return (
                  <div key={item.id} className="relative fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-start gap-6">
                      {/* Icon */}
                      <div className={`relative z-10 w-16 h-16 rounded-2xl border-2 flex items-center justify-center ${getStatusColor(item.status)}`}>
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="card-hover">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                            <h3 className="text-2xl font-bold text-white mb-2 sm:mb-0">
                              {item.title}
                            </h3>
                            <span className={`text-lg font-semibold ${getTextColor(item.status)}`}>
                              {item.date}
                            </span>
                          </div>
                          
                          <p className="text-dark-300 leading-relaxed mb-4">
                            {item.description}
                          </p>
                          
                          {/* Status badge */}
                          <div className="inline-flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${
                              item.status === 'completed' ? 'bg-green-500' :
                              item.status === 'in-progress' ? 'bg-primary-500 animate-pulse' :
                              'bg-dark-600'
                            }`} />
                            <span className={`text-sm font-medium uppercase tracking-wide ${getTextColor(item.status)}`}>
                              {item.status === 'completed' ? 'Completato' :
                               item.status === 'in-progress' ? 'In Corso' :
                               'In Programma'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 