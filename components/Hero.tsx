'use client'

import Image from 'next/image'
import { ChevronDown, ArrowRight, Sparkles, Zap, Target } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  const scrollToRoadmap = () => {
    document.getElementById('roadmap-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animate-gradient bg-gradient-to-br from-black via-primaryBlue/20 to-accentBlue/20" />
      
      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-20 text-primaryBlue/30"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <Sparkles className="w-8 h-8" />
      </motion.div>
      
      <motion.div
        className="absolute top-32 right-32 text-accentBlue/40"
        animate={{ 
          y: [0, 15, 0],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
      >
        <Zap className="w-12 h-12" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-32 left-16 text-primaryBlue/20"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        <Target className="w-10 h-10" />
      </motion.div>

      {/* Orbiting circles */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="relative w-full h-full">
          <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2">
            <div className="absolute top-0 left-1/2 w-3 h-3 bg-primaryBlue/40 rounded-full -translate-x-1/2"></div>
            <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-accentBlue/30 rounded-full -translate-x-1/2"></div>
          </div>
        </div>
      </motion.div>
      
      {/* Content */}
      <div className="container-custom text-center z-10 px-6">
        {/* Logos */}
        <motion.div 
          className="flex items-center justify-center gap-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/YOUTHLINK-LOGO-COMPACT-01.png"
              alt="YouthLink Logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </motion.div>
          <div className="text-white/60 text-2xl font-light">×</div>
          <motion.div
            whileHover={{ scale: 1.05, rotate: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/Randstad.png"
              alt="Randstad Logo"
              width={140}
              height={70}
              className="object-contain"
            />
          </motion.div>
        </motion.div>

        {/* Main headline with gradient text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-semibold mb-4">
            <motion.span 
              className="text-gradient inline-block"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              Startup Youth
            </motion.span>
            <br />
            <motion.span 
              className="text-gradient inline-block"
              animate={{ 
                backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 1.5
              }}
            >
              Challenge 2026
            </motion.span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-medium">
            Powered by YouthLink & Randstad
          </p>
        </motion.div>
        
        {/* Sub-headline con layout migliorato */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8 max-w-4xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-primaryBlue/20 rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
              <div className="space-y-2">
                <div className="text-2xl md:text-3xl font-heading font-semibold text-gradient">
                  Area Milano
                </div>
                <div className="text-sm text-white/70">
                  Studenti scientifici/tecnici<br />
                  (ultimi 3 anni)
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl md:text-3xl font-heading font-semibold text-gradient">
                  10 Scuole
                </div>
                <div className="text-sm text-white/70">
                  Partner del<br />
                  programma
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl md:text-3xl font-heading font-semibold text-gradient">
                  6-10 Team
                </div>
                <div className="text-sm text-white/70">
                  Selezionati per<br />
                  il challenge
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl md:text-3xl font-heading font-semibold text-gradient">
                  €500
                </div>
                <div className="text-sm text-white/70">
                  Grant per team<br />
                  Gen–Mag 2026
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTAs migliorati */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
        >
          <motion.button
            onClick={scrollToRoadmap}
            className="group relative overflow-hidden bg-gradient-to-r from-primaryBlue to-accentBlue text-white font-semibold text-lg px-10 py-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primaryBlue/30"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-3">
              Scopri il Programma
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accentBlue to-primaryBlue"
              initial={{ x: "100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          
          <motion.a
            href="/login"
            className="group relative overflow-hidden bg-transparent border-2 border-primaryBlue text-primaryBlue font-semibold text-lg px-10 py-4 rounded-full transition-all duration-300 hover:bg-primaryBlue hover:text-white"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">
              Login / Candidati
            </span>
          </motion.a>
        </motion.div>

        {/* Mini tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex items-center justify-center gap-4 text-primaryBlue font-medium text-sm md:text-base mb-16"
        >
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            AI
          </motion.span>
          <span className="text-white/40">•</span>
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
          >
            Sostenibilità
          </motion.span>
          <span className="text-white/40">•</span>
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
          >
            Impatto
          </motion.span>
        </motion.div>
      </div>
      
      {/* Animated scroll chevron */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToRoadmap}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.2, color: "#00A9FF" }}
      >
        <ChevronDown className="w-8 h-8 text-primaryBlue" />
      </motion.div>
    </section>
  )
} 