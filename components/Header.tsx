import { useState, useEffect, useMemo } from 'react';

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  const sections = useMemo(() => ['about-me', 'projects', 'contact'], []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.querySelector('.overflow-y-auto');
      const scrollPosition = scrollContainer?.scrollTop || 0;
      const containerHeight = scrollContainer?.clientHeight || 0;
      const scrollHeight = scrollContainer?.scrollHeight || 0;

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
  }, [sections]);

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


  return (
    <nav className="hidden md:block fixed left-8 bottom-20 z-50 xl:left-12 2xl:left-16">
      <ul className="flex flex-col space-y-6">
        {['About Me', 'Projects', 'Contact'].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              onClick={(e) => handleClick(e, item.toLowerCase().replace(' ', '-'))}
              className={`relative group ${activeSection === item.toLowerCase().replace(' ', '-') ? 'text-customGreen' : 'text-gray-600'}`}            >
              <span id={`nav-${item}`}>{item}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;