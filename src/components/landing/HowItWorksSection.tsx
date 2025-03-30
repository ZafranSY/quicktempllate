// src/components/landing/HowItWorksSection.tsx
"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/image";
import { FileText, Palette, Download, ArrowRight } from "lucide-react";

// Step data
const steps = [
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Choose a Template",
    description: "Browse our extensive library of professionally designed templates for various purposes.",
    delay: 0.1
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Customize Design",
    description: "Personalize colors, fonts, and layouts to match your style and requirements.",
    delay: 0.2
  },
  {
    icon: <Download className="h-6 w-6" />,
    title: "Download & Share",
    description: "Export your finished template in multiple formats or share directly with others.",
    delay: 0.3
  }
];

export default function HowItWorksSection() {
  const [sectionRef, sectionInView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  return (
    <section 
      id="how-it-works" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-white"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700">
            Simple Process
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How It <span className="text-indigo-700">Works</span>
          </h2>
          <p className="max-w-[800px] text-lg text-gray-600">
            Creating professional templates has never been easier. Follow these simple steps to get started.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: step.delay }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 text-indigo-700">
                {step.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              {/* Arrow connector (not on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 transform">
                  <ArrowRight className="h-6 w-6 text-gray-400" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Demo Image */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <div className="relative max-w-3xl rounded-lg border bg-white p-2 shadow-lg">
            <Image
              src="/images/Mockup_imagea.png"
              width={800}
              height={450}
              alt="Template creation process"
              className="rounded-lg"
              loading="lazy"
            />
            <div className="absolute -bottom-4 -right-4 rounded-lg bg-indigo-600 px-6 py-3 text-white">
              <p className="text-sm font-medium">Easy to use interface</p>
            </div>
          </div>
        </motion.div>

        {/* Additional info */}
        <div className="mt-24 flex flex-col items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="max-w-2xl text-center"
          >
            <h3 className="mb-4 text-2xl font-bold">Ready to create your first template?</h3>
            <p className="mb-6 text-gray-600">
              Our intuitive platform makes it easy to design professional templates in minutes, 
              even if you have no design experience.
            </p>
            <button className="rounded-lg bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700">
              Get Started Now
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}