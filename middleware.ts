import { NextResponse } from 'next/server';

export function middleware() {
  const response = NextResponse.next();
  response.headers.set('Cache-Control', 'public, max-age=3600, stale-while-revalidate=600');
  return response;
}