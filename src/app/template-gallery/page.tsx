"use client"
// Add dynamic imports for components that aren't needed immediately
import React, { useState, useEffect, lazy, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FileText, 
  Menu, 
  X, 
  Filter
} from 'lucide-react';

// Lazy load less frequently used icons
const FileSignature = lazy(() => import('lucide-react').then(mod => ({ default: mod.FileSignature })));
const Heart = lazy(() => import('lucide-react').then(mod => ({ default: mod.Heart })));
const Briefcase = lazy(() => import('lucide-react').then(mod => ({ default: mod.Briefcase })));
const Mail = lazy(() => import('lucide-react').then(mod => ({ default: mod.Mail })));
const Award = lazy(() => import('lucide-react').then(mod => ({ default: mod.Award })));

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
export const dynamic = 'force-static';
export const revalidate = 3600; 
export default function TemplateGallery() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-gray-50 to-white text-gray-900">
      {/* HEADER */}
      <header 
        className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all ${
          isScrolled ? "bg-white/90 shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center gap-2 text-xl font-bold text-black">
            <FileText className="h-6 w-6 text-indigo-600" />
            <span className=" g-clip-text text-black">
              Quick Template
            </span>
          </div>

          

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link 
              href="/signup" 
              className="rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm ring-1 ring-gray-200 transition-all hover:bg-gray-50 hover:shadow"
            >
              Sign Up
            </Link>
            <Link 
              href="/signin" 
              className="rounded-md  bg-black px-4 py-2 text-sm font-medium text-white shadow-md  hover:bg-indigo-900  hover:shadow-lg"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden rounded-md p-2 text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="container mx-auto px-4 py-3 space-y-3">
              <Link
                href="#features"
                className="block text-sm font-medium text-gray-700 hover:text-indigo-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="block text-sm font-medium text-gray-700 hover:text-indigo-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="#testimonials"
                className="block text-sm font-medium text-gray-700 hover:text-indigo-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </Link>
              <div className="flex flex-col space-y-2 pt-2 border-t">
                <Link 
                  href="/signup" 
                  className="rounded-md bg-black px-4 py-2 text-sm font-medium text-gray-800 shadow-sm ring-1 ring-gray-200 text-center"
                >
                  Sign Up
                </Link>
                <Link 
                  href="/signin" 
                  className="rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 text-sm font-medium text-white shadow-md text-center"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">Template Gallery</h1>
            <p className="text-lg text-gray-600">
              Browse our collection of professionally designed templates
            </p>
          </div>

          {/* Template Categories */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight">All Templates</h2>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="gap-1">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
              </div>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="professional">Professional</TabsTrigger>
                <TabsTrigger value="personal">Personal</TabsTrigger>
                <TabsTrigger value="business">Business</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-0">
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {/* Resume Templates */}
                  <Card className="overflow-hidden">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        fill
                        alt="Resume template preview"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <p className="font-medium text-sm">Resume Templates</p>
                        <p className="text-xs text-muted-foreground">12 templates</p>
                      </div>
                    </div>
                    <CardFooter className="p-2">
                      <Button variant="ghost" size="sm" className="w-full gap-1">
                        <FileSignature className="h-4 w-4" />
                        Browse Resumes
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Takziah Card Templates */}
                  <Card className="overflow-hidden">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        fill
                        alt="Takziah card template preview"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <p className="font-medium text-sm">Takziah Cards</p>
                        <p className="text-xs text-muted-foreground">8 templates</p>
                      </div>
                    </div>
                    <CardFooter className="p-2">
                      <Button variant="ghost" size="sm" className="w-full gap-1">
                        <Heart className="h-4 w-4" />
                        Browse Takziah Cards
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Business Card Templates */}
                  <Card className="overflow-hidden">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        fill
                        alt="Business card template preview"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <p className="font-medium text-sm">Business Cards</p>
                        <p className="text-xs text-muted-foreground">15 templates</p>
                      </div>
                    </div>
                    <CardFooter className="p-2">
                      <Button variant="ghost" size="sm" className="w-full gap-1">
                        <Briefcase className="h-4 w-4" />
                        Browse Business Cards
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Cover Letter Templates */}
                  <Card className="overflow-hidden">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        fill
                        alt="Cover letter template preview"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <p className="font-medium text-sm">Cover Letters</p>
                        <p className="text-xs text-muted-foreground">10 templates</p>
                      </div>
                    </div>
                    <CardFooter className="p-2">
                      <Button variant="ghost" size="sm" className="w-full gap-1">
                        <Mail className="h-4 w-4" />
                        Browse Cover Letters
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Business Proposal Templates */}
                  <Card className="overflow-hidden">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        fill
                        alt="Business proposal template preview"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <p className="font-medium text-sm">Business Proposals</p>
                        <p className="text-xs text-muted-foreground">7 templates</p>
                      </div>
                    </div>
                    <CardFooter className="p-2">
                      <Button variant="ghost" size="sm" className="w-full gap-1">
                        <FileText className="h-4 w-4" />
                        Browse Proposals
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Resignation Letter Templates */}
                  <Card className="overflow-hidden">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        fill
                        alt="Resignation letter template preview"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <p className="font-medium text-sm">Resignation Letters</p>
                        <p className="text-xs text-muted-foreground">5 templates</p>
                      </div>
                    </div>
                    <CardFooter className="p-2">
                      <Button variant="ghost" size="sm" className="w-full gap-1">
                        <FileText className="h-4 w-4" />
                        Browse Resignation Letters
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Certificate Templates */}
                  <Card className="overflow-hidden">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        fill
                        alt="Certificate template preview"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <p className="font-medium text-sm">Certificates</p>
                        <p className="text-xs text-muted-foreground">9 templates</p>
                      </div>
                    </div>
                    <CardFooter className="p-2">
                      <Button variant="ghost" size="sm" className="w-full gap-1">
                        <Award className="h-4 w-4" />
                        Browse Certificates
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Invitation Templates */}
                  <Card className="overflow-hidden">
                    // In the Image components, add priority to LCP images and implement proper sizing
                    // Example for the first card:
                    <div className="aspect-[4/3] relative">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        loading="lazy"
                        alt="Resume template preview"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <p className="font-medium text-sm">Resume Templates</p>
                        <p className="text-xs text-muted-foreground">12 templates</p>
                      </div>
                    </div>
                    <CardFooter className="p-2">
                      <Button variant="ghost" size="sm" className="w-full gap-1">
                        <Mail className="h-4 w-4" />
                        Browse Invitations
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="professional" className="mt-0">
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {/* Resume Templates */}
                  <Card className="overflow-hidden">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        fill
                        alt="Resume template preview"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <p className="font-medium text-sm">Resume Templates</p>
                        <p className="text-xs text-muted-foreground">12 templates</p>
                      </div>
                    </div>
                    <CardFooter className="p-2">
                      <Button variant="ghost" size="sm" className="w-full gap-1">
                        <FileSignature className="h-4 w-4" />
                        Browse Resumes
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  {/* Cover Letter Templates */}
                  <Card className="overflow-hidden">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        fill
                        alt="Cover letter template preview"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <p className="font-medium text-sm">Cover Letters</p>
                        <p className="text-xs text-muted-foreground">10 templates</p>
                      </div>
                    </div>
                    <CardFooter className="p-2">
                      <Button variant="ghost" size="sm" className="w-full gap-1">
                        <Mail className="h-4 w-4" />
                        Browse Cover Letters
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="personal" className="mt-0">
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {/* Personal category templates */}
                  <Card className="overflow-hidden">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        fill
                        alt="Invitation template preview"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <p className="font-medium text-sm">Invitations</p>
                        <p className="text-xs text-muted-foreground">14 templates</p>
                      </div>
                    </div>
                    <CardFooter className="p-2">
                      <Button variant="ghost" size="sm" className="w-full gap-1">
                        <Mail className="h-4 w-4" />
                        Browse Invitations
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="business" className="mt-0">
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {/* Business category templates */}
                  <Card className="overflow-hidden">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        fill
                        alt="Business card template preview"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <p className="font-medium text-sm">Business Cards</p>
                        <p className="text-xs text-muted-foreground">15 templates</p>
                      </div>
                    </div>
                    <CardFooter className="p-2">
                      <Button variant="ghost" size="sm" className="w-full gap-1">
                        <Briefcase className="h-4 w-4" />
                        Browse Business Cards
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="education" className="mt-0">
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {/* Education category templates */}
                  <Card className="overflow-hidden">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        fill
                        alt="Certificate template preview"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <p className="font-medium text-sm">Certificates</p>
                        <p className="text-xs text-muted-foreground">9 templates</p>
                      </div>
                    </div>
                    <CardFooter className="p-2">
                      <Button variant="ghost" size="sm" className="w-full gap-1">
                        <Award className="h-4 w-4" />
                        Browse Certificates
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </section>
        </div>
      </main>
      
      <footer className="w-full border-t py-4">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} TemplateGen. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Help Center
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}