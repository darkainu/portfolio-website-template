import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const baseUrl = process.env.NODE_ENV === 'production' ? '/website' : '';

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const scrollContainer = document.querySelector('.overflow-y-auto');
    const targetSection = document.getElementById(sectionId);
    
    if (scrollContainer && targetSection) {
      scrollContainer.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about-me', 'projects', 'contact'];
      const scrollContainer = document.querySelector('.overflow-y-auto');
      const scrollPosition = scrollContainer?.scrollTop || 0;
      const containerHeight = scrollContainer?.clientHeight || 0;
      const scrollHeight = scrollContainer?.scrollHeight || 0;

      // Special handling for Contact section
      if (scrollHeight - (scrollPosition + containerHeight) < 100) {
        setActiveSection('contact');
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop - 100 && 
            scrollPosition < offsetTop + offsetHeight - 100
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const scrollContainer = document.querySelector('.overflow-y-auto');
    scrollContainer?.addEventListener('scroll', handleScroll);
    
    return () => scrollContainer?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="hidden md:block fixed left-8 bottom-20 z-50">
      <ul className="flex flex-col space-y-6">
        {['About Me', 'Projects', 'Contact'].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              onClick={(e) => handleClick(e, item.toLowerCase().replace(' ', '-'))}
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