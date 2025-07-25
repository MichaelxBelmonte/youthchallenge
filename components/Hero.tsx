'use client'

import { ArrowRight, Zap } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-primary-900/20" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-400/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <div className="mb-8 fade-in">
            <div className="flex flex-col items-center gap-6 mb-4">
              {/* YouthLink Logo */}
              <div className="flex items-center gap-4">
                <Image 
                  src="/YOUTHLINK-LOGO-COMPACT-01.png" 
                  alt="YouthLink Logo" 
                  width={80} 
                  height={80}
                  className="object-contain"
                />
                <div className="text-left">
                  <h1 className="text-3xl font-bold text-white">YouthLink</h1>
                  <p className="text-lg text-primary-400 font-medium">Startup Youth Challenge</p>
                </div>
              </div>
              
              {/* Partnership Badge */}
              <div className="flex items-center gap-3 text-dark-300">
                <span className="text-sm font-medium">powered by</span>
                <Image 
                  src="/Randstad.png" 
                  alt="Randstad Logo" 
                  width={120} 
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          
          {/* Main headline */}
          <div className="mb-8 fade-in">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Trasforma le tue</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
                idee in startup
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-dark-300 max-w-3xl mx-auto leading-relaxed">
              Unisciti al <strong className="text-primary-400">Startup Youth Challenge</strong> powered by Randstad. 
              Un ecosistema educativo che connette giovani talenti con mentor esperti per creare il futuro.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in">
            <Link href="#discover" className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4">
              Scopri il Programma
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/login" className="btn-secondary inline-flex items-center gap-2 text-lg px-8 py-4">
              Accedi alla Dashboard
            </Link>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 fade-in">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400 mb-2">10</div>
              <div className="text-dark-400 text-sm uppercase tracking-wide">Scuole Partner</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400 mb-2">6-10</div>
              <div className="text-dark-400 text-sm uppercase tracking-wide">Team Studenti</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400 mb-2">€500</div>
              <div className="text-dark-400 text-sm uppercase tracking-wide">Grant per Team</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400 mb-2">5</div>
              <div className="text-dark-400 text-sm uppercase tracking-wide">Track Verticali</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-500 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
} 