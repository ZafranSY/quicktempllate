// src/components/landing/TestimonialsSection.tsx
"use client";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

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

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.1, triggerOnce: true });

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  
  return (
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
                      loading="lazy"
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
  );
}