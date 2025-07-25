import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  // Per ora disabilitiamo il controllo di autenticazione nel middleware
  // Il controllo viene fatto direttamente nelle pagine
  
  // Se l'utente va direttamente al dashboard senza essere loggato,
  // la pagina stessa si occuperà del redirect
  
  return NextResponse.next()
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