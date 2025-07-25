import Hero from '@/components/Hero'
import FeatureCard from '@/components/FeatureCard'
import Timeline from '@/components/Timeline'
import Accordion from '@/components/Accordion'
import Contact from '@/components/Contact'

export default function HomePage() {
  const features = [
    {
      iconName: 'brain',
      title: 'Skills',
      description: 'Sviluppa competenze tecniche e trasversali attraverso percorsi di apprendimento personalizzati e innovativi.',
      highlights: [
        'Micro-corsi specializzati per ogni track',
        'AI chatbot per supporto personalizzato',
        'Certificazioni riconosciute dal mercato',
        'Peer tutoring tra studenti'
      ]
    },
    {
      iconName: 'users',
      title: 'Mentor',
      description: 'Connettiti con professionisti esperti, founder di startup e team universitari per una guida diretta.',
      highlights: [
        'Mentor Randstad dedicati',
        'Tutor YouthLink specializzati',
        'Network di alumni e innovatori',
        'Sessioni di mentoring settimanali'
      ]
    },
    {
      iconName: 'users',
      title: 'Stage',
      description: 'Accedi a opportunità di stage e collaborazioni concrete con aziende partner e startup innovative.',
      highlights: [
        'Offerte di stage personalizzate',
        'Collaborazioni con startup partner',
        'Progetti reali con impatto SDG',
        'Opportunità di assunzione post-demo'
      ]
    }
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <section id="discover" className="py-24 bg-dark-950">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Tre pilastri per il tuo
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600 block">
                successo imprenditoriale
              </span>
            </h2>
            <p className="text-xl text-dark-300 leading-relaxed">
              Il nostro ecosistema ti offre tutto ciò di cui hai bisogno per trasformare 
              le tue idee innovative in startup di successo, con il supporto di partner d'eccellenza.
            </p>
          </div>
          
          {/* Feature Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8 fade-in">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                iconName={feature.iconName}
                title={feature.title}
                description={feature.description}
                highlights={feature.highlights}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <Timeline />
      
      {/* FAQ Section */}
      <Accordion />
      
      {/* Contact Section */}
      <Contact />
    </main>
  )
} 