'use client'

import Image from 'next/image'
import { ArrowDown, LogIn } from 'lucide-react'

export default function Hero() {
  const scrollToRoadmap = () => {
    document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-900 to-dark-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,102,255,0.1),transparent_50%)]" />
      </div>
      
      <div className="container-custom text-center z-10 px-6">
        {/* Loghi */}
        <div className="flex items-center justify-center gap-8 mb-12 fade-in">
          <Image
            src="/YOUTHLINK-LOGO-COMPACT-01.png"
            alt="YouthLink Logo"
            width={120}
            height={120}
            className="object-contain"
          />
          <div className="text-gray-400 text-2xl font-light">×</div>
          <Image
            src="/Randstad.png"
            alt="Randstad Logo"
            width={160}
            height={80}
            className="object-contain"
          />
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 fade-in">
          <span className="text-primary-500">Startup Youth Challenge</span>
          <br />
          <span className="text-2xl md:text-4xl font-normal text-gray-300">2026</span>
        </h1>
        
        {/* Sub-headline */}
        <p className="text-lg md:text-xl text-gray-300 mb-4 fade-in max-w-4xl mx-auto">
          Il primo sprint di innovazione guidato dai giovani di YouthLink, powered by Randstad
        </p>
        
        <div className="text-sm md:text-base text-gray-400 mb-12 fade-in max-w-3xl mx-auto leading-relaxed">
          Aperto agli studenti di scuole scientifiche e tecniche dell'area milanese (ultimi 3 anni) · 
          Fino a 10 scuole · 6-10 team · €500 di grant ciascuno · Gennaio–Maggio 2026
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in">
          <button
            onClick={scrollToRoadmap}
            className="btn-primary flex items-center gap-2 group"
          >
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            Scopri il programma
          </button>
          
          <a
            href="/login"
            className="btn-secondary flex items-center gap-2 group"
          >
            <LogIn className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Login / Candidati
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  )
} 