"use client";

import dynamic from 'next/dynamic';

// Use dynamic import with loading fallback to improve initial load time
const LoginPage = dynamic(() => import('./LoginPage'), {
  loading: () => <div className="flex items-center justify-center min-h-screen">Loading...</div>,
  ssr: false // Disable server-side rendering for auth components
});

export default function SignInPage() {
  return <LoginPage />;
}