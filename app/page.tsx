import Hero from '@/components/Hero'
import WhyJoin from '@/components/WhyJoin'
import ProgrammeSnapshot from '@/components/ProgrammeSnapshot'
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
      
      {/* Programme Snapshot */}
      <ProgrammeSnapshot />
      
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