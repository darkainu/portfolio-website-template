// app/page.tsx

import React from 'react';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen p-5 bg-customYellow">
      {/* About Me Section */}
      <section className="bg-customBlue w-full max-w-4xl mx-auto p-6 rounded-lg shadow-lg mt-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Column: Headshot Photo */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            {/* Replace the src with the path to your actual headshot image */}
            <img
              src="/path-to-your-headshot.jpg"
              alt="Headshot"
              className="w-full h-auto rounded-lg"
            />
          </div>
          {/* Right Column: Text Content */}
          <div className="w-full md:w-2/3 md:pl-6">
            <h2 className="text-2xl font-bold text-white mb-2">About Me</h2>
            <h3 className="text-xl text-gray-200 mb-4">UI/UX Designer & Flutter Developer</h3>
            <p className="text-gray-100 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl hendrerit consectetur.
              Proin pharetra leo at dui fermentum, in tincidunt sapien dapibus. Nullam quis nulla a justo malesuada tincidunt.
              Integer ullamcorper, nisl at convallis facilisis, odio massa tristique ligula, in aliquam massa nulla nec orci.
            </p>
            {/* Action Buttons */}
            <div className="flex space-x-4 mt-4">
              <button className="bg-customGreen text-white px-4 py-2 rounded-md hover:bg-green-600">
                Hire me
              </button>
              <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
                View CV
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}