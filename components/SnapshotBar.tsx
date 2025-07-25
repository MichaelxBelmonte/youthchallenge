'use client'

import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function SnapshotBar() {
  const steps = [
    { number: "20", label: "target schools" },
    { number: "5–10", label: "teams" },
    { number: "€500", label: "grant" },
    { number: "4", label: "month sprint" }
  ]

  return (
    <section className="bg-black border-t-4 border-primaryBlue py-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center gap-8 lg:gap-16">
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="text-4xl lg:text-5xl font-heading font-semibold text-gradient mb-2">
                    {step.number}
                  </div>
                  <div className="text-white/70 text-sm lg:text-base font-medium">
                    {step.label}
                  </div>
                </motion.div>
                
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <ArrowRight className="w-6 h-6 text-primaryBlue hidden lg:block" />
                    <div className="w-8 h-0.5 bg-primaryBlue lg:hidden" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 