import React from 'react';

export default function ProjectsPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-5">
      <h1 className="text-4xl font-bold mb-4">My Projects</h1>
      <section className="w-full max-w-4xl p-5 bg-white shadow-md rounded-lg mt-5">
        <h2 className="text-2xl font-semibold mb-2">Tech Support Note Generator</h2>
        <p className="mb-4">A tool to generate tech support notes quickly and efficiently.</p>
        <a href="https://github.com/darkainu/note_generator" className="text-blue-500 hover:underline">
          View on GitHub
        </a>
      </section>
    </main>
  );
}
