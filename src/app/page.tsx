
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import LandingPage from "./landingPage";

// Dynamically import the LandingPage component with loading fallback
const DynamicLandingPage = dynamic(() => import("./landingPage"), {
  loading: () => <div className="flex min-h-screen items-center justify-center">Loading...</div>,
  ssr: true
});

// Add export const to enable Static Site Generation
export const generateStaticParams = async () => { return []; };
export const revalidate = 3600; // Revalidate every hour

// Add metadata for SEO optimization
export const metadata: Metadata = {
  title: 'TemplateGen - Create Professional Templates in Minutes',
  description: 'Design beautiful resumes, business cards, takziah cards, and cover letters with our intuitive template generator.',
  keywords: 'templates, resume builder, business cards, takziah cards, cover letters',
};

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <Suspense fallback={<div className="flex min-h-screen items-center justify-center">Loading...</div>}>
        <DynamicLandingPage />
      </Suspense>
    </div>
  );
}
