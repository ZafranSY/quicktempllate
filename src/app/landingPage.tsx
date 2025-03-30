"use client"
import { useEffect, useState, lazy, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Icon imports
import {
  FileText,
  ImageIcon,
  Smartphone,
  Shuffle,
  ChevronRight,
  FileSpreadsheet,
  FileCheck,
  Star,
  Menu,
  X,
  Heart,
  Zap
  
} from "lucide-react";

// Feature data
const features = [
  {
    icon: <FileSpreadsheet className="h-6 w-6" />,
    title: "Wide Range of Templates",
    description: "Takziah cards, cover letters, business proposals, resumes, and more.",
    delay: 0.1
  },
  {
    icon: <ImageIcon className="h-6 w-6" />,
    title: "Easy Customization",
    description: "Select styles, upload images, and input text with real-time previews.",
    delay: 0.2
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Mobile-Optimized",
    description: "Create and edit on the go with a seamless mobile experience.",
    delay: 0.3
  },
  {
    icon: <Shuffle className="h-6 w-6" />,
    title: "Instant Comparisons",
    description: "Switch between templates without losing your work.",
    delay: 0.4
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Favorites Collection",
    description: "Save your preferred templates for quick access later.",
    delay: 0.5
  },
  {
    icon: <FileCheck className="h-6 w-6" />,
    title: "One-Click Export",
    description: "Download your templates in multiple formats or share directly.",
    delay: 0.6
  }
];

// Steps data
const steps = [
  {
    number: "1",
    title: "Choose a template",
    description: "Select from our template gallery for any occasion.",
    image: "/images/Mockup_images.png",
    delay: 0.1
  },
  {
    number: "2",
    title: "Customize",
    description: "Add your text, images, and personal touches.",
    image: "/images/Mockup_images.png",
    delay: 0.2
  },
  {
    number: "3",
    title: "Preview",
    description: "See your changes in real-time and compare different styles.",
    image: "/images/Mockup_images.png",
    delay: 0.3
  },
  {
    number: "4",
    title: "Download & Share",
    description: "Get your finished template in multiple formats.",
    image: "/images/Mockup_images.png",
    delay: 0.4
  }
];

// Testimonial data
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Manager",
    content: "TemplateGen has simplified our content creation process. The templates are professional and easy to customize.",
    avatar: "/images/Mockup_images.png"
  },
  {
    name: "Michael Chen",
    role: "Small Business Owner",
    content: "I use TemplateGen for all my business documents. The interface is intuitive and the results are always professional.",
    avatar: "/images/Mockup_images.png"
  },
  {
    name: "Aisha Patel",
    role: "Freelance Designer",
    content: "As a designer, I appreciate the clean layouts and attention to detail. TemplateGen saves me hours of work.",
    avatar: "/images/Mockup_images.png"
  }
];

// Feature Card Component
const FeatureCard = ({ icon, title, description, delay, inView }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  inView: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
    >
      <div className="mb-4 rounded-full bg-gray-100 p-3 w-12 h-12 flex items-center justify-center text-black">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Intersection observer hooks
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [howItWorksRef, howItWorksInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.1, triggerOnce: true });

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      {/* HEADER */}
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
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
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
        {/* HERO SECTION */}
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
                <div className="relative z-10 w-full max-w-[600px] overflow-hidden rounded-xl border bg-white shadow-2xl">
              <Image
                src="/images/Mockup_imagea.png"
                width={600}
                height={400}
                alt="Template Generator App Interface"
                className="w-full object-cover"
                priority
                fetchPriority="high"
              />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section 
          id="features" 
          ref={featuresRef}
          className="py-16 md:py-24 bg-gray-50"
        >
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <div className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700">
                Key Features
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Everything you need for <span className="text-indigo-800">perfect templates</span>
              </h2>
              <p className="max-w-[800px] text-lg text-gray-600">
                Our template generator provides all the tools you need to create professional,
                personalized templates for any occasion.
              </p>
            </motion.div>

            {/* Features grid */}
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  delay={feature.delay}
                  inView={featuresInView}
                />
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section 
          id="how-it-works" 
          ref={howItWorksRef}
          className="py-16 md:py-24"
        >
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={howItWorksInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <div className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700">
                Simple Process
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                How It Works
              </h2>
              <p className="max-w-[800px] text-lg text-gray-600">
                Create beautiful templates in just a few simple steps.
              </p>
            </motion.div>

            {/* Steps */}
            <div className="mt-12 space-y-16">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={howItWorksInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: step.delay }}
                  className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8`}
                >
                  {/* Step content */}
                  <div className="flex flex-1 flex-col justify-center">
                    <div className="mb-4 flex items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
                        <span className="text-lg font-bold">{step.number}</span>
                      </div>
                      <div className="ml-4 h-0.5 flex-1 bg-gray-200"></div>
                    </div>
                    <h3 className="mb-3 text-2xl font-bold">{step.title}</h3>
                    <p className="text-lg text-gray-600">{step.description}</p>
                  </div>
                  
                  {/* Step image */}
                  <div className="flex flex-1 items-center justify-center">
                    <div className="overflow-hidden rounded-lg border bg-white p-2 shadow-md">
                      <Image
                        src={step.image}
                        width={400}
                        height={300}
                        alt={`Step ${step.number}: ${step.title}`}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section
          id="testimonials"
          ref={testimonialsRef}
          className="bg-gray-50 py-16 md:py-24"
        >
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <div className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700">
                <Star size={14} className="mr-1" />
                Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                What Our Users Say
              </h2>
              <p className="max-w-[800px] text-lg text-gray-600">
                Join thousands of satisfied users who create professional templates every day.
              </p>
            </motion.div>

            <div className="mt-12">
              <div className="relative mx-auto max-w-3xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-lg bg-white p-8 shadow-md"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4 h-16 w-16 overflow-hidden rounded-full">
                        <Image
                          src={testimonials[activeTestimonial].avatar}
                          width={64}
                          height={64}
                          alt={testimonials[activeTestimonial].name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <p className="mb-4 text-lg text-gray-600">"{testimonials[activeTestimonial].content}"</p>
                      <h4 className="font-semibold">{testimonials[activeTestimonial].name}</h4>
                      <p className="text-sm text-gray-500">{testimonials[activeTestimonial].role}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Testimonial navigation dots */}
                <div className="mt-6 flex justify-center space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`h-2 w-2 rounded-full ${
                        activeTestimonial === index ? "bg-indigo-600" : "bg-gray-300"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

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

      {/* FOOTER */}
      <footer className="border-t border-gray-200 bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Logo and description */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xl font-bold">
                <FileText className="h-6 w-6 text-indigo-600" />
                <span>TemplateGen</span>
              </div>
              <p className="text-gray-600">
                Create professional templates for any occasion with our easy-to-use platform.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-indigo-600">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-indigo-600">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-1.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.015 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-gray-900">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-600 hover:text-indigo-600">Features</a></li>
                <li><a href="#how-it-works" className="text-gray-600 hover:text-indigo-600">How It Works</a></li>
                <li><a href="#testimonials" className="text-gray-600 hover:text-indigo-600">Testimonials</a></li>
                <li><a href="/templates" className="text-gray-600 hover:text-indigo-600">Templates</a></li>
              </ul>
            </div>

            {/* Template Types */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-gray-900">Template Types</h3>
              <ul className="space-y-2">
                <li><a href="/templates/resume" className="text-gray-600 hover:text-indigo-600">Resume</a></li>
                <li><a href="/templates/takziah" className="text-gray-600 hover:text-indigo-600">Takziah Cards</a></li>
                <li><a href="/templates/business" className="text-gray-600 hover:text-indigo-600">Business Cards</a></li>
                <li><a href="/templates/cover-letter" className="text-gray-600 hover:text-indigo-600">Cover Letters</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-gray-900">Legal</h3>
              <ul className="space-y-2">
                <li><a href="/privacy" className="text-gray-600 hover:text-indigo-600">Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-600 hover:text-indigo-600">Terms of Service</a></li>
                <li><a href="/cookies" className="text-gray-600 hover:text-indigo-600">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-200 pt-8 text-center">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} TemplateGen. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;