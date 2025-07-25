'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

interface FAQItem {
  question: string
  answer: string
}

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      question: "Who can apply?",
      answer: "Students in the **final 3 years** of **scientific high schools or technical institutes** within 30 km of Milan (other regions will open in future editions)."
    },
    {
      question: "What are the requirements?",
      answer: "Be a student in your final 3 years of scientific/technical high school in the Milan area, have passion for innovation and be ready to dive into an entrepreneurial project."
    },
    {
      question: "How does selection work?",
      answer: "Online application → selection interviews → team formation. We'll select 6-10 teams from partner schools for the full programme."
    },
    {
      question: "What support will we get?",
      answer: "Each team gets YouthLink mentors, startup partners and Randstad support for professional development. Plus workshops, online resources and co-working spaces."
    },
    {
      question: "How can we use the €500 grant?",
      answer: "For prototype development, marketing, digital tools, event participation or other project-related expenses. Must be documented according to programme guidelines."
    },
    {
      question: "Where can I find more info?",
      answer: "Visit our website, follow us on social media or contact us directly at info@youthlink.it. We'll regularly publish updates on the programme and next steps."
    }
  ]

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
            <span className="text-gradient">FAQ</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Everything you need to know about Startup Youth Challenge 2026
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="card border border-white/10 hover:border-primaryBlue/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <button
                className="w-full px-6 py-6 text-left flex items-center justify-between group"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg font-heading font-semibold text-white group-hover:text-primaryBlue transition-colors">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-white/60 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <motion.div 
                  className="px-6 pb-6 border-t border-white/10"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="pt-4 text-white/80 leading-relaxed">
                    {faq.answer.split('**').map((part, i) => 
                      i % 2 === 0 ? part : <strong key={i} className="text-primaryBlue">{part}</strong>
                    )}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 