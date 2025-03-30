// src/components/landing/FeatureSection.tsx
"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  FileSpreadsheet,
  ImageIcon,
  Smartphone,
  Shuffle,
  Heart,
  FileCheck,
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

export default function FeatureSection() {
  const [featuresRef, featuresInView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  return (
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
  );
}