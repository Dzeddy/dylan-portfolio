import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowUpRight,
  Check,
  Copy,
  FileText,
  Github,
  Linkedin,
  Moon,
  Search,
  Sparkles,
  Sun,
  X,
} from 'lucide-react';
import { personalInfo, sectionNav } from '../data/portfolio';
import { CanvasMode, ThemeMode } from '../types';

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
  theme: ThemeMode;
  onToggleTheme: () => void;
  canvasMode: CanvasMode;
  onToggleCanvasMode: () => void;
  onJumpSection: (id: string) => void;
  copiedEmail: boolean;
  onCopyEmail: () => void;
}

interface PaletteItem {
  id: string;
  group: 'Navigate' | 'Actions' | 'Links';
  label: string;
  hint?: string;
  icon?: React.ReactNode;
  run: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  open,
  onClose,
  theme,
  onToggleTheme,
  canvasMode,
  onToggleCanvasMode,
  onJumpSection,
  copiedEmail,
  onCopyEmail,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIdx, setSelectedIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const items: PaletteItem[] = useMemo(
    () => [
      ...sectionNav.map((s, i) => ({
        id: `nav-${s.id}`,
        group: 'Navigate' as const,
        label: s.label,
        hint: `Section 0${i + 1}`,
        run: () => {
          onJumpSection(s.id);
          onClose();
        },
      })),
      {
        id: 'act-copy-email',
        group: 'Actions',
        label: copiedEmail ? 'Copied email address' : 'Copy email address',
        hint: personalInfo.email,
        icon: copiedEmail ? (
          <Check size={14} style={{ color: 'var(--accent)' }} />
        ) : (
          <Copy size={14} />
        ),
        run: () => {
          onCopyEmail();
          onClose();
        },
      },
      {
        id: 'act-theme',
        group: 'Actions',
        label: theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme',
        hint: theme === 'dark' ? 'Gallery Alabaster' : 'Obsidian Studio',
        icon: theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />,
        run: () => {
          onToggleTheme();
          onClose();
        },
      },
      {
        id: 'act-canvas',
        group: 'Actions',
        label:
          canvasMode === 'field'
            ? 'Switch hero canvas to Orbit'
            : 'Switch hero canvas to Field',
        hint: canvasMode === 'field' ? 'Antigravity vectors' : 'Bayer dither fluid',
        icon: <Sparkles size={14} />,
        run: () => {
          onToggleCanvasMode();
          onJumpSection('intro');
          onClose();
        },
      },
      {
        id: 'link-resume',
        group: 'Links',
        label: 'Open Résumé (PDF)',
        hint: '/resume.pdf',
        icon: <FileText size={14} />,
        run: () => {
          window.open(personalInfo.resumePath, '_blank', 'noreferrer');
          onClose();
        },
      },
      {
        id: 'link-github',
        group: 'Links',
        label: 'GitHub',
        hint: 'github.com/Dzeddy',
        icon: <Github size={14} />,
        run: () => {
          window.open(personalInfo.githubUrl, '_blank', 'noreferrer');
          onClose();
        },
      },
      {
        id: 'link-linkedin',
        group: 'Links',
        label: 'LinkedIn',
        hint: 'in/dylan-zhuang',
        icon: <Linkedin size={14} />,
        run: () => {
          window.open(personalInfo.linkedinUrl, '_blank', 'noreferrer');
          onClose();
        },
      },
      {
        id: 'link-paper',
        group: 'Links',
        label: 'Published Paper (Applied Sciences, 2021)',
        hint: 'doi.org/10.3390/app11177772',
        icon: <ArrowUpRight size={14} />,
        run: () => {
          window.open(personalInfo.paperUrl, '_blank', 'noreferrer');
          onClose();
        },
      },
    ],
    [
      canvasMode,
      copiedEmail,
      onClose,
      onCopyEmail,
      onJumpSection,
      onToggleCanvasMode,
      onToggleTheme,
      theme,
    ]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        (item.hint && item.hint.toLowerCase().includes(q)) ||
        item.group.toLowerCase().includes(q)
    );
  }, [items, query]);

  useEffect(() => {
    if (open) {
      setQuery('');
      setSelectedIdx(0);
      setTimeout(() => inputRef.current?.focus(), 20);
    }
  }, [open]);

  useEffect(() => {
    setSelectedIdx(0);
  }, [query]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIdx((prev) => (prev + 1) % Math.max(1, filtered.length));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIdx(
          (prev) => (prev - 1 + Math.max(1, filtered.length)) % Math.max(1, filtered.length)
        );
      } else if (e.key === 'Enter' && filtered[selectedIdx]) {
        e.preventDefault();
        filtered[selectedIdx].run();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [filtered, onClose, open, selectedIdx]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[14vh] px-4"
      style={{ backgroundColor: 'rgba(13, 13, 12, 0.42)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      <div
        className="gallery-sheet w-full max-w-[520px] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input */}
        <div
          className="flex items-center gap-3 px-5 py-4"
          style={{ borderBottom: '1px solid var(--hair)' }}
        >
          <Search size={15} style={{ color: 'var(--ink-muted)' }} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Jump to section, toggle theme, or open links..."
            className="w-full bg-transparent border-0 outline-none text-[14.5px]"
            style={{ color: 'var(--ink)' }}
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close command palette"
            className="w-7 h-7 rounded-full inline-flex items-center justify-center"
            style={{
              backgroundColor: 'var(--sheet-muted)',
              color: 'var(--ink-muted)',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <X size={13} />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[360px] overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <div
              className="py-10 text-center text-[13.5px]"
              style={{ color: 'var(--ink-muted)' }}
            >
              No matching commands
            </div>
          ) : (
            filtered.map((item, idx) => {
              const active = idx === selectedIdx;
              return (
                <button
                  key={item.id}
                  type="button"
                  onMouseEnter={() => setSelectedIdx(idx)}
                  onClick={item.run}
                  className="w-full flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl text-left transition-colors duration-100"
                  style={{
                    backgroundColor: active ? 'var(--sheet-muted)' : 'transparent',
                    color: 'var(--ink)',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className="w-5 flex justify-center shrink-0"
                      style={{ color: active ? 'var(--accent)' : 'var(--ink-muted)' }}
                    >
                      {item.icon || (
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{
                            backgroundColor: active
                              ? 'var(--accent)'
                              : 'var(--ink-muted)',
                          }}
                        />
                      )}
                    </span>
                    <span className="text-[14px] font-medium truncate">
                      {item.label}
                    </span>
                  </div>
                  {item.hint && (
                    <span
                      className="font-mono-meta text-[11.5px] shrink-0"
                      style={{ color: 'var(--ink-muted)' }}
                    >
                      {item.hint}
                    </span>
                  )}
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
