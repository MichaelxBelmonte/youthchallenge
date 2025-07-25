import { Brain, Users, Megaphone } from 'lucide-react'

interface WhyJoinCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function WhyJoinCard({ icon, title, description }: WhyJoinCardProps) {
  return (
    <div className="card card-hover group">
      <div className="flex flex-col items-center text-center p-8">
        <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-500/20 transition-colors">
          <div className="text-primary-400 group-hover:text-primary-300">
            {icon}
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-primary-300 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
          {description}
        </p>
      </div>
    </div>
  )
}

export default function WhyJoin() {
  const reasons = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Skills & Mindset",
      description: "Impara strumenti AI, basi di business e teamwork"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Mentorship & Network", 
      description: "Tutor YouthLink + partner startup + Randstad"
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Community & Visibility",
      description: "Condividi progressi, demo presso Randstad HQ"
    }
  ]

  return (
    <section className="py-20 bg-dark-900">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Perché partecipare?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tre motivi per cui questo programma può cambiare il tuo futuro professionale
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 fade-in">
          {reasons.map((reason, index) => (
            <WhyJoinCard
              key={index}
              icon={reason.icon}
              title={reason.title}
              description={reason.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
} 