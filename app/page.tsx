import Hero from '@/components/Hero'
import WhyJoin from '@/components/WhyJoin'
import SnapshotBar from '@/components/SnapshotBar'
import Timeline from '@/components/Timeline'
import Accordion from '@/components/Accordion'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />
      
      {/* Why Join Section */}
      <WhyJoin />
      
      {/* Snapshot Bar */}
      <SnapshotBar />
      
      {/* Timeline/Roadmap Section */}
      <Timeline />
      
      {/* FAQ Section */}
      <Accordion />
      
      {/* Contact Section */}
      <Contact />
      
      {/* Footer */}
      <Footer />
    </main>
  )
} 