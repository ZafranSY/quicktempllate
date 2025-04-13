// src/app/landingPage.tsx
"use client";
import { useEffect, useState, lazy, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic"; // Add dynamic import
// Import all components from the main package
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Import only the icons needed for initial render
import {
  FileText,
  Menu,
  X,
  ChevronRight,
  Zap
} from "lucide-react";

// Lazy load components that aren't needed immediately
const FeatureSection = lazy(() => import('@/components/landing/FeatureSection'));
const HowItWorksSection = lazy(() => import('@/components/landing/HowItWorksSection'));
const TestimonialsSection = lazy(() => import('@/components/landing/TestimonialsSection'));
const Footer = lazy(() => import('@/components/landing/Footer'));

// Replace with dynamic imports for non-critical animations
// Move this before it's used
const AnimatedMenu = dynamic(() => import('@/components/AnimatedMenu'), {
  ssr: false,
  loading: () => <Menu size={24} />
});

// Enhanced loading placeholder for lazy-loaded sections
const SectionLoading = () => (
  <div className="w-full py-12 flex flex-col items-center justify-center space-y-4">
    <div className="animate-pulse h-8 w-32 bg-gray-200 rounded"></div>
    <div className="animate-pulse h-4 w-64 bg-gray-100 rounded"></div>
    <div className="animate-pulse h-4 w-48 bg-gray-100 rounded"></div>
  </div>
);

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Intersection observer hooks - only track what's needed for initial view
  // Intersection observer hooks - add hooks for lazy-loaded sections
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [howItWorksRef, howItWorksInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.1, triggerOnce: true });

  // Handle scroll effect for header with passive listener for better performance
  // Optimize scroll handler with proper debouncing
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const handleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      timeoutId = setTimeout(() => {
        setIsScrolled(window.scrollY > 10);
      }, 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  // Add cleanup for intersection observers - Fix the ref error
  useEffect(() => {
    return () => {
      // Proper cleanup without accessing ref property
      // The useInView hook returns a tuple with a function and a boolean
      // We can't access .ref and .current properties on it
    };
  }, []);

// Remove the incorrect cleanup code
// useEffect(() => {
//   return () => {
//     [heroRef, featuresRef, howItWorksRef, testimonialsRef, ctaRef].forEach(
//       ({ ref }) => ref.current = null
//     );
//   };
// }, []);

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      {/* HEADER - Keep in main bundle as it's visible immediately */}
      <header 
        className={`sticky top-0 z-50 w-full transition-all ${
          isScrolled ? "bg-white shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <div className="flex items-center gap-2 text-xl font-bold">
            <FileText className="h-6 w-6 text-teal-600" />
            <span>Quick template</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#features"
              className="text-sm font-medium text-gray-700 hover:text-teal-600"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-gray-700 hover:text-teal-600"
            >
              How It Works
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-gray-700 hover:text-teal-600"
            >
              Testimonials
            </Link>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link 
              href="/signup" 
              className="rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-800 ring-1 ring-gray-200 hover:bg-gray-50"
            >
              Sign Up
            </Link>
            <Link 
              href="/signin" 
              className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-indigo-900"
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
        <AnimatePresence>
          {mobileMenuOpen && (
            // Simplify motion props for mobile menu
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="md:hidden border-t border-gray-200 bg-white"
            >
              <div className="container mx-auto px-4 py-4 space-y-4">
                <Link
                  href="#features"
                  className="block py-2 text-base font-medium text-gray-700 hover:text-teal-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="#how-it-works"
                  className="block py-2 text-base font-medium text-gray-700 hover:text-teal-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  How It Works
                </Link>
                <Link
                  href="#testimonials"
                  className="block py-2 text-base font-medium text-gray-700 hover:text-teal-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Testimonials
                </Link>
                <div className="pt-4 flex flex-col space-y-3">
                  <Link 
                    href="/signup" 
                    className="rounded-md bg-white px-4 py-2 text-center text-base font-medium text-gray-800 ring-1 ring-gray-200 hover:bg-gray-50"
                  >
                    Sign Up
                  </Link>
                  <Link 
                    href="/signin" 
                    className="rounded-md bg-teal-600 px-4 py-2 text-center text-base font-medium text-white hover:bg-black-700"
                  >
                    Sign In
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1">
        {/* HERO SECTION - Keep in main bundle for fast LCP */}
        <section 
          ref={heroRef}
          className="relative py-16 md:py-24"
        >
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Hero Content */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="flex flex-col justify-center space-y-6"
              >
                {/* Badge */}
                <div className="inline-flex w-fit items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700">
                  <Zap size={14} className="mr-1" />
                  Template Creation Made Simple
                </div>

                {/* Headline */}
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block">Create Professional</span>
                  <span className="mt-1 block text-indigo-700">
                    Templates in Minutes
                  </span>
                </h1>

                {/* Subheadline */}
                <p className="text-lg text-gray-600 sm:text-xl">
                  Design beautiful resumes, business cards, takziah cards, and cover letters 
                  with our intuitive template generator.
                </p>

                {/* CTA buttons */}
                <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                  <Link 
                    href="/signup"
                    className="group flex items-center justify-center rounded-lg bg-black px-6 py-3 text-base font-medium text-white hover:bg-indigo-900"
                  >
                    Start Creating Now
                    <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link 
                    href="/template-gallery"
                    className="flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Browse Templates
                  </Link>
                </div>
              </motion.div>

              {/* Hero Image */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative flex items-center justify-center lg:justify-end"
              >
                // Add CSS containment to hero image container
                <div className="relative z-10 w-full max-w-[600px] overflow-hidden rounded-xl border bg-white shadow-2xl aspect-[3/2]">
                  <Image
                    src="/images/Mockup_imagea.png"
                    width={600}
                    height={400}
                    alt="Template Generator App Interface"
                    className="w-full h-full object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Lazy-loaded sections */}
        <div ref={featuresRef}>
          {featuresInView && (
            <Suspense fallback={<SectionLoading />}>
              <FeatureSection />
            </Suspense>
          )}
        </div>

        <div ref={howItWorksRef}>
          {howItWorksInView && (
            <Suspense fallback={<SectionLoading />}>
              <HowItWorksSection />
            </Suspense>
          )}
        </div>

        <div ref={testimonialsRef}>
          {testimonialsInView && (
            <Suspense fallback={<SectionLoading />}>
              <TestimonialsSection />
            </Suspense>
          )}
        </div>

        {/* CALL TO ACTION SECTION */}
        <section 
          ref={ctaRef}
          className="relative bg-black py-16 md:py-24"
        >
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-8 text-center text-white"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to Create Amazing Templates?
              </h2>
              <p className="max-w-[800px] text-xl text-gray-300">
                Join thousands of satisfied users and start crafting professional templates that stand out. 
                Sign up now and unleash your creativity!
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link 
                  href="/signup"
                  className="rounded-lg bg-white px-8 py-3 text-lg font-medium text-black hover:bg-gray-100"
                >
                  Get Started for Free
                </Link>
                <Link 
                  href="/template-gallery"
                  className="rounded-lg border-2 border-white bg-transparent px-8 py-3 text-lg font-medium text-white hover:bg-white/10"
                >
                  View Template Gallery
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* FOOTER - Lazy loaded */}
      <Suspense fallback={<div className="h-12 bg-gray-50"></div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default LandingPage;