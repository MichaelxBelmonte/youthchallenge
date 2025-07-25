import { Instagram, Linkedin, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-12 bg-dark-950 border-t border-dark-800">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            © 2025 YouthLink · powered by Randstad
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/youthlink.it"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors p-2 rounded-full hover:bg-primary-500/10"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            
            <a
              href="https://linkedin.com/company/youthlink-it"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors p-2 rounded-full hover:bg-primary-500/10"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            
            <a
              href="https://youtube.com/@youthlink-it"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors p-2 rounded-full hover:bg-primary-500/10"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 