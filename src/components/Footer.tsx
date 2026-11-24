import React from 'react';
import { personalInfo } from '../data/portfolio';

interface FooterProps {
  onOpenCommand: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCommand }) => (
  <footer className="px-4 sm:px-8 pt-6 pb-12 md:pb-28">
    <div
      className="max-w-[1180px] mx-auto pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[12.5px]"
      style={{
        borderTop: '1px solid var(--hair)',
        color: 'var(--ink-muted)',
      }}
    >
      <div>
        © 2026 {personalInfo.name} · {personalInfo.location}
      </div>
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onOpenCommand}
          className="hidden md:inline font-mono-meta text-[12px] transition-colors duration-150"
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            color: 'var(--ink-muted)',
            cursor: 'pointer',
          }}
        >
          Press ⌘K for quick jump
        </button>
        <a
          href="#intro"
          className="md:hidden font-mono-meta text-[12px]"
          style={{ color: 'var(--ink-muted)', textDecoration: 'none' }}
        >
          Back to top ↑
        </a>
      </div>
    </div>
  </footer>
);
