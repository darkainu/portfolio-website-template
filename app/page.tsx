'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ParallaxSection from '../components/ParallaxSection';
import MobileMenu from '../components/MobileMenu';
import ScrollToTopButton from '../components/ScrollToTopButton';
import ContactForm from '../components/ContactForm';

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
                  src="/images/profile.webp"
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
              loremipsum
              </h3>
              <div className="text-gray-100 space-y-4">
                <p>
                loremipsum:
                </p>
                <ul className="list-disc list-inside pl-4 space-y-2">
                  <li>loremipsum</li>
                  <li>loremipsum</li>
                  <li>loremipsum</li>
                  <li>loremipsum</li>
                </ul>
                <p>
                loremipsum
                </p>
                <p>
                loremipsum
                </p>
                <p>
                loremipsum
                </p>
              </div>
              {/* Enhanced Action Buttons Container */}
              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="https://www.upwork.com/freelancers/~01a28d736c9c353891?mp_source=share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-customGreen text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-green-500 hover:shadow-lg hover:shadow-customGreen/20 active:transform active:scale-95 hover:scale-105"
                >
                  Hire me
                </a>
                <a
                  href="/docs/resume.pdf"
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
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0077B5] text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-[#006699] hover:shadow-lg active:scale-100 hover:scale-105 inline-block"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/"
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
            Recent Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Project Card */}
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-sm p-5 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-102 border border-white/20"
            >
              <h3 className="text-xl font-semibold text-white mb-3"> asdasd</h3>
              <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/"
                  alt="loremipsum"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <p className="text-gray-200 group-hover:text-white transition-colors duration-300">
              loremipsum
              </p>
            </a>

            {/* Media Organizer Project */}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-sm p-5 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-102 border border-white/20"
            >
              <h3 className="text-xl font-semibold text-white mb-3">loremipsum</h3>
              <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/"
                  alt="loremipsum"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <p className="text-gray-200 group-hover:text-white transition-colors duration-300">
              loremipsum
              </p>
            </a>

            {/* Media Organizer Web Project */}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-sm p-5 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-102 border border-white/20"
            >
              <h3 className="text-xl font-semibold text-white mb-3">loremipsum</h3>
              <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/"
                  alt="loremipsum"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <p className="text-gray-200 group-hover:text-white transition-colors duration-300">
              loremipsum
              </p>
            </a>

            {/* Note Generator Project */}
            <a
              href="https://github.com/darkainu/note_generator"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-sm p-5 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-102 border border-white/20"
            >
              <h3 className="text-xl font-semibold text-white mb-3">Xasdqes</h3>
              <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/notegenerator.webp"
                  alt="Note Generator"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <p className="text-gray-200 group-hover:text-white transition-colors duration-300">
              loremipsum </p>
            </a>
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