import React from 'react';
import { personalInfo } from '../data/portfolio';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
          <span className="bg-gradient-to-r from-yellow-400 via-orange-500 via-red-500 via-pink-500 via-purple-500 via-blue-500 via-cyan-500 via-green-500 to-yellow-400 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient">
            Get In Touch
          </span>
        </h2>
        <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg px-4">
          I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation.
        </p>
        <a 
          href={`mailto:${personalInfo.email}`}
          className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold rounded-lg hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(202,138,4,0.3)] text-sm sm:text-base"
        >
          Send Me an Email
        </a>
      </div>
    </section>
  );
}; 