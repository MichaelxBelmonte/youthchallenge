'use client'

import Image from 'next/image'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  const scrollToRoadmap = () => {
    document.getElementById('roadmap-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animate-gradient bg-gradient-to-br from-black via-primaryBlue/20 to-accentBlue/20" />
      
      {/* Content */}
      <div className="container-custom text-center z-10 px-6">
        {/* Logos */}
        <motion.div 
          className="flex items-center justify-center gap-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src="/YOUTHLINK-LOGO-COMPACT-01.png"
            alt="YouthLink Logo"
            width={100}
            height={100}
            className="object-contain"
          />
          <div className="text-white/60 text-2xl font-light">×</div>
          <Image
            src="/Randstad.png"
            alt="Randstad Logo"
            width={140}
            height={70}
            className="object-contain"
          />
        </motion.div>

        {/* Main headline with gradient text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-semibold mb-4">
            <span className="text-gradient">Startup Youth</span>
            <br />
            <span className="text-gradient">Challenge 2026</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-medium">
            Powered by YouthLink & Randstad
          </p>
        </motion.div>
        
        {/* Sub-headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base md:text-lg text-white/70 mb-8 max-w-4xl mx-auto leading-relaxed"
        >
          Open to Milan-area science & technical students (final 3 yrs) • up to 10 schools • 6-10 teams • €500 grant each • Jan–May 2026
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
        >
          <button
            onClick={scrollToRoadmap}
            className="btn-primary flex items-center gap-2 group text-lg px-8 py-4"
          >
            Discover programme
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <a
            href="/login"
            className="btn-secondary flex items-center gap-2 group text-lg px-8 py-4"
          >
            Login / Apply
          </a>
        </motion.div>

        {/* Mini tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-primaryBlue font-medium text-sm md:text-base mb-16"
        >
          AI • Sustainability • Impact
        </motion.div>
      </div>
      
      {/* Animated scroll chevron */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToRoadmap}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-8 h-8 text-primaryBlue" />
      </motion.div>
    </section>
  )
} 