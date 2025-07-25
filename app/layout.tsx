import type { Metadata } from 'next'
import './globals.css'
import SupabaseProvider from '@/components/SupabaseProvider'

export const metadata: Metadata = {
  title: 'Startup Youth Challenge | YouthLink',
  description: 'Ecosistema educativo decentralizzato che connette, ispira e guida i giovani di 12-22 anni attraverso media digitali, eventi dal vivo e strumenti AI.',
  keywords: ['YouthLink', 'Startup Youth Challenge', 'Randstad', 'educazione', 'giovani', 'startup'],
  authors: [{ name: 'YouthLink Team' }],
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#0066ff',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className="scroll-smooth">
      <body className="font-inter antialiased">
        <SupabaseProvider>
          <div id="root">
            {children}
          </div>
        </SupabaseProvider>
      </body>
    </html>
  )
} 