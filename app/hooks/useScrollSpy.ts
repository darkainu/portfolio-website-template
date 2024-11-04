import { useState, useEffect } from 'react';

export const useScrollSpy = (sectionIds: string[], offset = 100) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.querySelector('.overflow-y-auto');
      const scrollPosition = scrollContainer?.scrollTop || 0;
      const containerHeight = scrollContainer?.clientHeight || 0;
      const scrollHeight = scrollContainer?.scrollHeight || 0;

      if (scrollHeight - (scrollPosition + containerHeight) < offset) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      for (const section of sectionIds) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop - offset && 
            scrollPosition < offsetTop + offsetHeight - offset
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
  }, [sectionIds, offset]);

  return activeSection;
};
