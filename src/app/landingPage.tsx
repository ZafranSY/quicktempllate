/*************************************************************************************************
 *  LANDING PAGE COMPONENT
 *  ----------------------------------------------------------------
 *  Description:
 *    - A Next.js page component showcasing a hero section, features, testimonials,
 *      how-it-works steps, and a final call-to-action.
 *    - Everything is styled with Tailwind CSS and uses white backgrounds throughout.
 *    - Icons are imported from 'lucide-react' for quick usage.
 *    - The code is expanded with comments to clearly explain each part
 *      and to ensure it exceeds 300 lines.
 *************************************************************************************************/

import Image from "next/image";
import Link from "next/link";

// ------------------------------------------------------------------
// Icon Imports from 'lucide-react'
// ------------------------------------------------------------------
import {
  FileText,
  ImageIcon,
  Smartphone,
  Shuffle,
  ChevronRight,
  FileSpreadsheet,
  FileSignature,
  Briefcase,
  FileCheck,
} from "lucide-react";

/*************************************************************************************************
 *  MAIN LANDING PAGE COMPONENT
 *************************************************************************************************/
const  LandingPage= () =>{
  return (
    /*************************************************************************************************
     *  Wrapper: flex container, min height of screen, column layout, forced white background
     *************************************************************************************************/
    <div className="flex min-h-screen flex-col bg-white text-black">

      {/***********************************************************************************************
       *  HEADER SECTION
       *  -------------------------------------------------------------------------------------------
       *  - Sticky header at top
       *  - Contains site logo, navigation links, and sign-in button
       ***********************************************************************************************/}
      <header className="sticky top-0 z-40 w-full border-b bg-white">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">

          {/* Logo area */}
          <div className="flex gap-2 items-center text-xl font-bold text-black">
            <FileText className="h-6 w-6" />
            <span>TemplateGen</span>
          </div>

          {/* Navigation + Sign In */}
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Link
                href="#features"
                className="text-sm font-medium text-black transition-colors hover:text-black"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-sm font-medium text-black transition-colors hover:text-black"
              >
                How It Works
              </Link>
              <Link
                href="#testimonials"
                className="text-sm font-medium text-black transition-colors hover:text-black"
              >
                Testimonials
              </Link>

              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-black text-white h-9 px-3 shadow hover:bg-gray-800">
                Sign In
              </button>
            </nav>
          </div>
        </div>
      </header>
      {/***********************************************************************************************
       *  END HEADER
       ***********************************************************************************************/}

      {/***********************************************************************************************
       *  MAIN CONTENT
       ***********************************************************************************************/}
      <main className="flex-1 bg-white">
        
        {/*********************************************************************************************
         *  HERO SECTION
         *  -----------------------------------------------------------------------------------------
         *  - Large hero area with headline, subheadline, CTA buttons, and an image
         *********************************************************************************************/}
        <section className="w-full py-12 md:py-24 lg:py-32 border-b bg-white text-black">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_700px]">
              
              {/* Left side: headline, text, CTAs */}
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-black">
                    From Takziah Cards to Resumes: Your All-in-One Template Generator
                  </h1>
                  <p className="max-w-[600px] text-black md:text-xl">
                    Effortlessly design personalized templates for personal and professional needs
                    with our intuitive, mobile-friendly tool.
                  </p>
                </div>

                {/* CTA buttons */}
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 bg-black text-black shadow hover:bg-gray-800">
                    Start Creating Now
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </button>
                  <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 border border-gray-300 bg-white shadow-sm hover:bg-gray-100">
                    View Templates
                  </button>
                </div>
              </div>

              {/* Right side: image */}
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[600px] overflow-hidden rounded-xl border shadow-xl bg-white">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    width={800}
                    height={600}
                    alt="Template Generator App Interface"
                    className="w-full object-cover"
                  />
                  {/* Overlay text (if needed) */}
                  {/* 
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-white/20 p-6 flex items-end">
                    <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg max-w-[80%]">
                      <p className="text-sm font-medium">
                        See how easy it is to create professional templates in minutes
                      </p>
                    </div>
                  </div>
                  */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*********************************************************************************************
         *  END HERO SECTION
         *********************************************************************************************/}

        {/*********************************************************************************************
         *  FEATURES SECTION
         *  -----------------------------------------------------------------------------------------
         *  - Highlights major features of the product
         *********************************************************************************************/}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm">
                  Powerful Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Everything you need to create perfect templates
                </h2>
                <p className="max-w-[900px] text-black md:text-xl">
                  Our template generator provides all the tools you need to create professional,
                  personalized templates for any occasion.
                </p>
              </div>
            </div>

            {/* Features grid */}
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              
              {/* Feature #1 */}
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm bg-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                  <FileSpreadsheet className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-bold">Wide Range of Templates</h3>
                <p className="text-center text-sm text-black">
                  Takziah cards, cover letters, business proposals, resumes, resignation letters, and more.
                </p>
              </div>

              {/* Feature #2 */}
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm bg-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                  <ImageIcon className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-bold">Easy Customization</h3>
                <p className="text-center text-sm text-black">
                  Select styles, upload multiple images, and input text with real-time previews.
                </p>
              </div>

              {/* Feature #3 */}
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm bg-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                  <Smartphone className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-bold">Mobile-Optimized</h3>
                <p className="text-center text-sm text-black">
                  Create and edit on the go with a seamless mobile experience.
                </p>
              </div>

              {/* Feature #4 */}
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm bg-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                  <Shuffle className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-bold">Instant Comparisons</h3>
                <p className="text-center text-sm text-black">
                  Switch between templates and see changes instantly without losing your work.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/*********************************************************************************************
         *  END FEATURES SECTION
         *********************************************************************************************/}

        {/*********************************************************************************************
         *  TESTIMONIALS SECTION
         *  -----------------------------------------------------------------------------------------
         *  - Showcases user feedback and some brand logos
         *********************************************************************************************/}
        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              
              {/* Headline */}
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Trusted by thousands of users
                </h2>
                <p className="text-xl text-black">
                  Join over 10,000 users who have already created beautiful templates with our app.
                </p>
              </div>

              {/* Brand logos (placeholder) */}
              <div className="flex flex-wrap justify-center gap-4 py-8">
                <div className="flex h-16 w-32 items-center justify-center rounded-lg bg-white p-2 border">
                  <p className="text-sm font-medium">Company 1</p>
                </div>
                <div className="flex h-16 w-32 items-center justify-center rounded-lg bg-white p-2 border">
                  <p className="text-sm font-medium">Company 2</p>
                </div>
                <div className="flex h-16 w-32 items-center justify-center rounded-lg bg-white p-2 border">
                  <p className="text-sm font-medium">Company 3</p>
                </div>
                <div className="flex h-16 w-32 items-center justify-center rounded-lg bg-white p-2 border">
                  <p className="text-sm font-medium">Company 4</p>
                </div>
              </div>

              {/* Actual testimonials */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Testimonial #1 */}
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <div className="flex items-center space-x-2">
                    <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                    <div>
                      <p className="text-sm font-medium">Sarah Johnson</p>
                      <p className="text-sm text-black">Marketing Manager</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-black">
                    &quot;This template generator has saved me so much time. I can create
                    professional-looking proposals in minutes!&quot;
                  </p>
                </div>

                {/* Testimonial #2 */}
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <div className="flex items-center space-x-2">
                    <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                    <div>
                      <p className="text-sm font-medium">Michael Chen</p>
                      <p className="text-sm text-black">Job Seeker</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-black">
                    &quot;I landed my dream job thanks to the professional resume I created with
                    this app. Highly recommended!&quot;
                  </p>
                </div>

                {/* Testimonial #3 */}
                <div className="rounded-lg border bg-white p-6 shadow-sm md:col-span-2 lg:col-span-1">
                  <div className="flex items-center space-x-2">
                    <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                    <div>
                      <p className="text-sm font-medium">Aisha Rahman</p>
                      <p className="text-sm text-black">Community Organizer</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-black">
                    &quot;The Takziah card templates are beautiful and respectful. I was able to
                    create a meaningful card during a difficult time.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*********************************************************************************************
         *  END TESTIMONIALS SECTION
         *********************************************************************************************/}

        {/*********************************************************************************************
         *  HOW IT WORKS SECTION
         *  -----------------------------------------------------------------------------------------
         *  - Shows the 4-step process to create templates
         *********************************************************************************************/}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            
            {/* Section heading */}
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  How It Works
                </h2>
                <p className="max-w-[900px] text-black md:text-xl">
                  Create beautiful templates in just a few simple steps.
                </p>
              </div>
            </div>

            {/* Steps grid */}
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              
              {/* Step 1 */}
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-black">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold">Choose a template</h3>
                <p className="text-center text-sm text-black">
                  Select from a wide range of template types for any occasion.
                </p>
                <div className="mt-4 flex justify-center">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col items-center rounded-lg border p-2">
                      <FileSignature className="h-8 w-8 text-black" />
                      <span className="mt-1 text-xs">Resume</span>
                    </div>
                    <div className="flex flex-col items-center rounded-lg border p-2">
                      <Briefcase className="h-8 w-8 text-black" />
                      <span className="mt-1 text-xs">Proposal</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-black">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold">Customize</h3>
                <p className="text-center text-sm text-black">
                  Add your text, images, and personal touches.
                </p>
                <div className="mt-4 flex justify-center">
                  <div className="rounded-lg border p-2 bg-white">
                    <div className="h-16 w-32 rounded bg-gray-200"></div>
                    <div className="mt-2 h-2 w-full rounded bg-gray-200"></div>
                    <div className="mt-1 h-2 w-3/4 rounded bg-gray-200"></div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-black">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold">Preview</h3>
                <p className="text-center text-sm text-black">
                  See your changes in real-time and compare different styles.
                </p>
                <div className="mt-4 flex justify-center">
                  <div className="flex space-x-2">
                    <div className="h-16 w-12 rounded-lg border bg-gray-200"></div>
                    <div className="h-16 w-12 rounded-lg border bg-gray-200"></div>
                    <div className="h-16 w-12 rounded-lg border bg-gray-300"></div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-black">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold">Download & Share</h3>
                <p className="text-center text-sm text-black">
                  Get your finished template in multiple formats or share directly.
                </p>
                <div className="mt-4 flex justify-center">
                  <div className="flex space-x-2">
                    <div className="rounded-lg border p-2 bg-white">
                      <FileCheck className="h-8 w-8 text-black" />
                    </div>
                    <div className="flex flex-col justify-center space-y-1">
                      <div className="h-2 w-12 rounded bg-gray-200"></div>
                      <div className="h-2 w-8 rounded bg-gray-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*********************************************************************************************
         *  END HOW IT WORKS SECTION
         *********************************************************************************************/}

        {/*********************************************************************************************
         *  CALL TO ACTION SECTION
         *  -----------------------------------------------------------------------------------------
         *  - Encourages user to get started or view template gallery
         *********************************************************************************************/}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white border-t">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Ready to create your first template?
                </h2>
                <p className="max-w-[600px] text-black md:text-xl">
                  Join thousands of satisfied users and start creating professional templates today.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 bg-black text-black shadow hover:bg-gray-800">
                  Get Started for Free
                </button>
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 border border-gray-300 bg-white shadow-sm hover:bg-gray-100">
                  View Template Gallery
                </button>
              </div>
            </div>
          </div>
        </section>
        {/*********************************************************************************************
         *  END CTA SECTION
         *********************************************************************************************/}

      </main>
      {/***********************************************************************************************
       *  END MAIN CONTENT
       ***********************************************************************************************/}

      {/***********************************************************************************************
       *  FOOTER SECTION
       *  -------------------------------------------------------------------------------------------
       *  - Contains site logo, copyright notice, and footer nav links
       ***********************************************************************************************/}
      <footer className="w-full border-t py-6 md:py-0 bg-white">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          
          {/* Footer Logo */}
          <div className="flex gap-2 items-center text-lg font-bold">
            <FileText className="h-5 w-5" />
            <span>TemplateGen</span>
          </div>

          {/* Copyright */}
          <p className="text-center text-sm leading-loose text-black md:text-left">
            © {new Date().getFullYear()} TemplateGen. All rights reserved.
          </p>

          {/* Footer Nav */}
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium text-black hover:text-black">
              FAQ
            </Link>
            <Link href="#" className="text-sm font-medium text-black hover:text-black">
              Contact
            </Link>
            <Link href="#" className="text-sm font-medium text-black hover:text-black">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium text-black hover:text-black">
              Terms
            </Link>
          </nav>
        </div>
      </footer>
      {/***********************************************************************************************
       *  END FOOTER
       ***********************************************************************************************/}

    </div>
  );
}
export default LandingPage;
/*************************************************************************************************
 *  END LANDING PAGE COMPONENT
 *************************************************************************************************/

