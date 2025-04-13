import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Quick Template - Create Professional Templates in Minutes',
  description: 'Design beautiful resumes, business cards, takziah cards, and cover letters with our intuitive template generator.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        {/* Ensure no text nodes or comments are directly inside <head> */}
      </head>
      <body>{children}</body>
    </html>
  );
}
