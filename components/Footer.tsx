import { Instagram, Linkedin, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-16 bg-black border-t border-white/10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-white/60 text-sm">
            © 2025 YouthLink • powered by Randstad
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/youthlink.it"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-primaryBlue transition-colors p-2 rounded-full hover:bg-primaryBlue/10"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            
            <a
              href="https://linkedin.com/company/youthlink-it"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-primaryBlue transition-colors p-2 rounded-full hover:bg-primaryBlue/10"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            
            <a
              href="https://youtube.com/@youthlink-it"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-primaryBlue transition-colors p-2 rounded-full hover:bg-primaryBlue/10"
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