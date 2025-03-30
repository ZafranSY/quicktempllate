import { NextResponse } from 'next/server'

export function middleware() {
  const response = NextResponse.next()
  
  // Add security headers but remove compression-related headers
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains')
  
  return response
}