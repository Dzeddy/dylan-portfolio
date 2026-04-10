import React from 'react';
import { personalInfo } from '../data/portfolio';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-sky-400 font-mono text-sm mb-4 tracking-wider">04. What's Next?</p>
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-zinc-200">
          Get In Touch
        </h2>
        <p className="text-zinc-400 mb-10 text-base leading-relaxed">
          I'm currently looking for new opportunities, and my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a
          href={`mailto:${personalInfo.email}`}
          className="inline-block px-8 py-4 border border-sky-400 text-sky-400 font-mono text-sm rounded hover:bg-sky-400/10 transition-colors"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
};
