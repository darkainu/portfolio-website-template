import React from 'react';
import ScrollToTopButton from './components/ScrollToTopButton';
import Image from 'next/image';
import ContactForm from './components/ContactForm';
import Link from 'next/link';

const baseUrl = process.env.NODE_ENV === 'production' 
  ? '/website' 
  : '';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen p-5 pt-20 bg-customYellow">
      
      {/* About Us Section */}
      <section id="about-us" className="font-body bg-sky-600 w-full max-w-4xl mx-auto p-6 rounded-lg shadow-lg mt-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Column: Headshot Photo */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <Image
  src={`${baseUrl}/images/profile.jpg`}
  alt="Profile Photo"
  width={300}
  height={300}
  className="w-full h-auto rounded-lg"
/>
          </div>
          {/* Right Column: Text Content */}
          <div className="w-full md:w-2/3 md:pl-6">
            <h3 className="text-xl text-gray-200 mb-4">Blending IT Support, Business Acumen, and Coding Skills</h3>
            <div className="text-gray-100 space-y-3">
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
                I&apos;m excited to bring my unique blend of skills to a tech-focused role where I can bridge the gap between business needs and technical implementation.
              </p>
            </div>
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-6">
              <button className="bg-customGreen text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-green-500 hover:shadow-lg active:scale-100 hover:scale-105">
                Hire me
              </button>
              <a
                href="/docs/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md transition-all duration-300 hover:bg-gray-100 hover:shadow-lg active:scale-100 hover:scale-105 inline-block"
              >
                View CV
              </a>
              <Link
  href={`${baseUrl}/full-bio`}
  className="bg-customBlue text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-blue-600 hover:shadow-lg active:scale-100 hover:scale-105 inline-block"
>
  Full Bio
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
      <section id="projects" className="font-body bg-white w-full max-w-4xl mx-auto p-6 rounded-lg shadow-lg mt-10">
        <h2 className="text-3xl font-bold text-customBlue mb-4">Projects</h2>
        
        {/* Row of Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First project card (customized) */}
          <a 
            href="https://www.welfareabroad.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block bg-gray-50 p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <h3 className="text-lg font-semibold text-black mb-2">Welfare Abroad Website</h3>
            <div className="w-full h-32 mb-3 rounded-lg overflow-hidden">
              <Image
                src={`${baseUrl}/images/welfareabroad.png`}
                alt="Welfare Abroad"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-gray-600">
              I&apos;ve used Typescript, Next.js, Tailwind CSS, Vercel and Hygraph for this project.
            </p>
          </a>

          {/* Other project cards (unchanged) */}
          {[...Array(4)].map((_, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <h3 className="text-lg font-semibold text-black mb-2">Project {index + 2}</h3>
              <div className="w-full h-32 bg-gray-300 mb-3 rounded-lg">
                {/* Placeholder for Project Image */}
              </div>
              <p className="text-gray-600">
                Brief description of the project. This is where you can talk about the project and its features.
              </p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="font-body bg-customLightGray w-full max-w-4xl mx-auto p-6 rounded-lg shadow-lg mt-10 mb-16">
        <h2 className="text-3xl font-bold text-customBlue mb-4">Contact Me</h2>
        <p className="text-gray-700 mb-6">
          Feel free to reach out if you have any questions or opportunities.
        </p>
        <ContactForm />
      </section>
      <ScrollToTopButton />
    </main>
  );
}