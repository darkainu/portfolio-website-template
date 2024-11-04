'use client'

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (sectionId: string) => {
    const scrollContainer = document.querySelector('.overflow-y-auto');
    const targetSection = document.getElementById(sectionId);
    
    if (scrollContainer && targetSection) {
      scrollContainer.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <div className="md:hidden fixed right-4 top-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 bg-customGreen rounded-full shadow-lg"
        aria-label="Toggle menu"
      >
        {isOpen ? <FaTimes className="text-white text-xl" /> : <FaBars className="text-white text-xl" />}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl">
          <div className="py-2">
            {['About Me', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => handleClick(item.toLowerCase().replace(' ', '-'))}
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
