import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrolled } from '../hooks/useScrolled';
import { personalInfo } from '../data/portfolio';

const navigationItems = ['Experience', 'Projects', 'Skills', 'Contact'];

export const Navigation: React.FC = () => {
  const scrolled = useScrolled();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleNavClick = (item: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(item.toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-md border-b border-zinc-900' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-zinc-100 tracking-wide">{personalInfo.name}</h3>

          <div className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-zinc-400 hover:text-sky-400 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden text-zinc-400 hover:text-sky-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-zinc-900 bg-black">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className="text-zinc-400 hover:text-sky-400 transition-colors duration-200 text-left text-sm py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
