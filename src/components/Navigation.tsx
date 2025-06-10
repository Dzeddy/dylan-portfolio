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
    <nav className={`fixed w-full z-50 transition-all duration-300 hidden sm:block ${
      scrolled ? 'bg-black/90 backdrop-blur-md border-b border-yellow-600/20' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg sm:text-xl font-bold text-yellow-500">{personalInfo.name}</h3>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-yellow-500 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-300 hover:text-yellow-500 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-yellow-600/20">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className="text-gray-300 hover:text-yellow-500 transition-colors duration-200 text-left py-2"
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