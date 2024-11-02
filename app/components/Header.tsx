import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const baseUrl = process.env.NODE_ENV === 'production' ? '/website' : '';

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about-me', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="hidden md:block fixed left-8 bottom-20 z-50">
      <ul className="flex flex-col space-y-6">
        {['About Me', 'Projects', 'Contact'].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className={`font-serif text-xl font-medium transition-all duration-300 ${
                activeSection === item.toLowerCase().replace(' ', '-')
                ? 'text-customGreen scale-110'
                : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Header;