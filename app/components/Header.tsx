import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const baseUrl = process.env.NODE_ENV === 'production' ? '/website' : '';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // Logic to determine active section based on scroll position
    // ...
  }, []);

  return (
    <header className="font-sans flex justify-between items-center p-5 bg-gray-800 text-white fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center">
        <Image src={`${baseUrl}/images/logo.png`} alt="Logo" width={100} height={50} />
      </div>
      <nav className="hidden md:block">
        <ul className="flex space-x-4">
          {['About Me', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className={`font-serif text-white hover:text-gray-300 text-lg font-medium ${
                  activeSection === item.toLowerCase().replace(' ', '-') ? 'border-b-2' : ''
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {/* Hamburger icon */}
        <span className="sr-only">Open menu</span>
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-gray-800 p-5 md:hidden">
          <ul className="space-y-2">
            {['About Me', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="block font-serif text-white hover:text-gray-300 text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;