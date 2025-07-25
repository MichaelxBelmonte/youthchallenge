'use client'

interface FeatureCardProps {
  iconName: string
  title: string
  description: string
  highlights: string[]
}

import { Brain, Users, Briefcase } from 'lucide-react'

const iconMap = {
  brain: Brain,
  users: Users,
  briefcase: Briefcase,
}

export default function FeatureCard({ iconName, title, description, highlights }: FeatureCardProps) {
  const Icon = iconMap[iconName as keyof typeof iconMap] || Brain
  return (
    <div className="card-hover scale-hover group">
      <div className="text-center">
        {/* Icon */}
        <div className="w-16 h-16 bg-primary-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-500/20 transition-colors duration-300">
          <Icon className="w-8 h-8 text-primary-400 group-hover:text-primary-300 transition-colors duration-300" />
        </div>
        
        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-100 transition-colors duration-300">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-dark-300 mb-6 leading-relaxed">
          {description}
        </p>
        
        {/* Highlights */}
        <ul className="space-y-2">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-center text-sm text-dark-400">
              <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 flex-shrink-0" />
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
} 