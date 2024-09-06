import Image from 'next/image';
import Link from 'next/link';

const baseUrl = process.env.NODE_ENV === 'production' 
  ? '/website' 
  : '';

const Header: React.FC = () => {
  return (
    <header className="font-sans flex justify-between items-center p-5 bg-gray-800 text-white fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center">
      <Image
  src={`${baseUrl}/images/logo.png`}
  alt="Logo"
  width={100}
  height={50}
/>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#about-us" className="font-serif text-white hover:text-gray-300 text-lg font-medium">About Me</a>
          </li>
          <li>
            <a href="#projects" className="font-serif text-white hover:text-gray-300 text-lg font-medium">Projects</a>
          </li>
          <li>
            <a href="#contact" className="font-serif text-white hover:text-gray-300 text-lg font-medium">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;