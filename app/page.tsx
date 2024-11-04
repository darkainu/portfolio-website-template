'use client';
import React from 'react';
import ScrollToTopButton from './components/ScrollToTopButton';
import Image from 'next/image';
import ContactForm from './components/ContactForm';
import Link from 'next/link';
import ParallaxSection from './components/ParallaxSection';
import MobileMenu from './components/MobileMenu';

const baseUrl = process.env.NODE_ENV === 'production' 
  ? '/website' 
  : '';

    export default function HomePage(): React.ReactNode {
    return (
      <ParallaxSection>
        <MobileMenu />
        <main className="flex flex-col items-center justify-start min-h-screen p-5 pt-20 md:ml-32 xl:ml-40">
          {/* About Me Section */}
          <section id="about-me" className="font-body bg-gradient-to-br from-sky-600/80 to-blue-800/80 backdrop-blur-sm w-full max-w-4xl mx-auto p-8 rounded-xl shadow-2xl mt-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Enhanced Image Container */}
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <div className="relative group">
                  <Image
                    src={`${baseUrl}/images/bio.webp`}
                    alt="Profile Photo"
                    width={300}
                    height={300}
                    className="w-full h-auto rounded-xl shadow-lg transform transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-blue-900/20 to-transparent" />
                </div>
              </div>

              {/* Enhanced Content Container */}
              <div className="w-full md:w-2/3 md:pl-8">
                <h3 className="text-2xl font-semibold text-white mb-6 border-b border-white/20 pb-2">
                  Blending IT Support, Business Acumen, and Coding Skills
                </h3>
                <div className="text-gray-100 space-y-4">
                  <p>
                    My career journey has been a unique blend of technology and entrepreneurship:
                  </p>
                  <ul className="list-disc list-inside pl-4 space-y-2">
                    <li>Provided top-notch technical support at Apple</li>
                    <li>Co-founded companies in medical travel and supplement industries</li>
                    <li>Built websites and custom CRM systems</li>
                    <li>Developed end-to-end solutions to enhance customer experience</li>
                  </ul>
                  <p>
                    This diverse experience has honed my skills in IT, customer service, and business management.
                  </p>
                  <p>
                    Recently, I completed a post-baccalaureate degree in Computer Science, adding a range of programming languages and frameworks to my toolkit.
                  </p>
                  <p>
                    I am excited to bring my unique blend of skills to a tech-focused role where I can bridge the gap between business needs and technical implementation.
                  </p>
                </div>
                {/* Enhanced Action Buttons Container */}
                <div className="flex flex-wrap gap-4 mt-8">
                  <button className="bg-customGreen text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-green-500 hover:shadow-lg hover:shadow-customGreen/20 active:transform active:scale-95 hover:scale-105">
                    Hire me
                  </button>
                  <a
                    href={`${baseUrl}/docs/resume.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md transition-all duration-300 hover:bg-gray-100 hover:shadow-lg active:scale-100 hover:scale-105 inline-block"
                  >
                    View CV
                  </a>
                  <Link
                    href="/full-bio"
                    className="bg-customBlue text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-blue-600 hover:shadow-lg active:scale-100 hover:scale-105 inline-block"
                  >
                    Career & Life
                  </Link>
                  <a
                    href="https://www.linkedin.com/in/muratorhan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0077B5] text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-[#006699] hover:shadow-lg active:scale-100 hover:scale-105 inline-block"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/darkainu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#333] text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-[#24292e] hover:shadow-lg active:scale-100 hover:scale-105 inline-block"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </section>
  {/* Projects Section */}
  <section id="projects" className="font-body bg-gradient-to-br from-indigo-600/80 to-purple-800/80 backdrop-blur-sm w-full max-w-4xl mx-auto p-8 rounded-xl shadow-2xl mt-10 mb-32">
    <h2 className="text-3xl font-bold text-white mb-8 border-b-2 border-white/20 pb-3">
      Featured Projects
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Featured Project Card */}
      <a 
        href="https://www.welfareabroad.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group bg-white/10 backdrop-blur-sm p-5 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-102 border border-white/20"
      >
        <h3 className="text-xl font-semibold text-white mb-3">Welfare Abroad Website</h3>
        <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
          <Image
            src={`${baseUrl}/images/welfareabroad.webp`}
            alt="Welfare Abroad"
            width={300}
            height={300}
            className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <p className="text-gray-200 group-hover:text-white transition-colors duration-300">
          Built with Typescript, Next.js, Tailwind CSS, Vercel and Hygraph
        </p>
      </a>

      {/* Other Project Cards */}
      {[...Array(4)].map((_, index) => (
        <div 
          key={index} 
          className="group bg-white/10 backdrop-blur-sm p-5 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-102 border border-white/20"
        >
          <h3 className="text-xl font-semibold text-white mb-3">Project {index + 2}</h3>
          <div className="relative w-full h-40 bg-gray-200 mb-4 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <p className="text-gray-200 group-hover:text-white transition-colors duration-300">
            Brief description of the project. This is where you can talk about the project and its features.
          </p>
        </div>
      ))}
    </div>
  </section>
  {/* Contact Section */}
  <section id="contact" className="font-body bg-gradient-to-br from-blue-700/80 to-indigo-900/80 backdrop-blur-sm w-full max-w-4xl mx-auto p-8 rounded-xl shadow-2xl mt-10 mb-32">
    <div className="relative">
      {/* Decorative elements */}
      <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-customBlue/20 rounded-tl-xl" />
      <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-customBlue/20 rounded-br-xl" />
    
      {/* Content */}
      <h2 className="text-3xl font-bold text-white mb-6 border-b-2 border-white/20 pb-3">
        Let&apos;s Connect
      </h2>
    
      <p className="text-gray-200 mb-8 text-lg">
        Feel free to reach out if you have any questions or opportunities. I&apos;m always excited to discuss new projects and possibilities.
      </p>

      {/* Contact Form with enhanced styling */}
      <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-lg">
        <ContactForm />
      </div>
    </div>
  </section>
  <ScrollToTopButton />
</main>
</ParallaxSection>
);
}