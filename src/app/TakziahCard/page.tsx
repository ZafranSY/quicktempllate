"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  ImageIcon,
  Smartphone,
  Shuffle,
  ChevronRight,
  FileSpreadsheet,
} from "lucide-react";

export const dynamic = "force-static";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center text-xl font-bold">
            <FileText className="h-6 w-6" />
            <span>TemplateGen</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Link
                href="#features"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                How It Works
              </Link>
              <Link
                href="#testimonials"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Testimonials
              </Link>
              <button className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90">
                Sign In
              </button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 border-b">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_700px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    From Takziah Cards to Resumes: Your All-in-One Template Generator
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Effortlessly design personalized templates for personal and professional needs with our intuitive,
                    mobile-friendly tool.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <button className="px-8 py-4 text-lg font-medium text-white bg-primary rounded-lg hover:bg-primary/90 flex items-center">
                    Start Creating Now
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </button>
                  <button className="px-8 py-4 text-lg font-medium text-primary border border-primary rounded-lg hover:bg-primary/10">
                    View Templates
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[600px] overflow-hidden rounded-xl border shadow-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    width={800}
                    height={600}
                    alt="Template Generator App Interface"
                    className="w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20 p-6 flex items-end">
                    <div className="bg-background/90 backdrop-blur-sm p-4 rounded-lg max-w-[80%]">
                      <p className="text-sm font-medium">
                        See how easy it is to create professional templates in minutes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Add more sections as needed */}
      </main>
    </div>
  );
}
