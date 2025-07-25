import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  console.log('🔄 Middleware: Path:', req.nextUrl.pathname)

  try {
    // Refresh session if expired - required for Server Components
    const {
      data: { session },
    } = await supabase.auth.getSession()

    console.log('🔍 Middleware: Session exists:', !!session, session?.user?.email || 'no email')

    // Protected routes
    if (req.nextUrl.pathname.startsWith('/dashboard')) {
      console.log('🛡️ Middleware: Protezione dashboard attiva')
      
      if (!session) {
        console.log('❌ Middleware: Nessuna sessione, reindirizzamento al login')
        // Redirect to login if not authenticated
        const redirectUrl = req.nextUrl.clone()
        redirectUrl.pathname = '/login'
        redirectUrl.searchParams.set('redirectedFrom', req.nextUrl.pathname)
        return NextResponse.redirect(redirectUrl)
      }

      // Per ora controlliamo solo che l'utente sia autenticato
      // Il controllo admin viene fatto nella pagina dashboard stessa
      console.log('✅ Middleware: Utente autenticato, accesso al dashboard consentito')
    }

    // Auth routes - redirect if already logged in
    if (req.nextUrl.pathname.startsWith('/login') && session) {
      console.log('🔄 Middleware: Utente già loggato, reindirizzamento al dashboard')
      const redirectUrl = req.nextUrl.clone()
      redirectUrl.pathname = '/dashboard'
      return NextResponse.redirect(redirectUrl)
    }

    console.log('✅ Middleware: Passaggio completato per path:', req.nextUrl.pathname)
    return res
  } catch (error) {
    console.error('❌ Middleware: Errore durante il controllo auth:', error)
    return res
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public (public files)
     */
    '/((?!_next/static|_next/image|favicon.ico|public|api).*)',
  ],
} 