import React from 'react';
import { LayoutGrid } from 'lucide-react';
import { sectionNav } from '../data/portfolio';

interface FloatingDockProps {
  activeSection: string;
  onSelectSection: (id: string) => void;
  onOpenCommand: () => void;
}

/**
 * Rhythm Kumar-inspired floating pill dock:
 * Active section expands into a pitch-black pill; other sections remain crisp vermilion dots.
 */
export const FloatingDock: React.FC<FloatingDockProps> = ({
  activeSection,
  onSelectSection,
  onOpenCommand,
}) => {
  return (
    <div className="hidden md:block fixed bottom-5 left-1/2 -translate-x-1/2 z-40">
      <nav
        aria-label="Section dock"
        className="flex items-center gap-1.5 px-2 py-1.5 rounded-full backdrop-blur-md"
        style={{
          backgroundColor: 'var(--dock-bg)',
          border: '1px solid var(--hair)',
          boxShadow: 'var(--dock-shadow)',
        }}
      >
        {sectionNav.map((item) => {
          const active = activeSection === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelectSection(item.id)}
              title={item.label}
              aria-label={`Jump to ${item.label}`}
              aria-current={active ? 'location' : undefined}
              className="group relative flex items-center justify-center rounded-full transition-all duration-200"
              style={{
                backgroundColor: active ? 'var(--cta-bg)' : 'transparent',
                color: active ? 'var(--cta-fg)' : 'var(--ink-secondary)',
                padding: active ? '6px 14px' : '8px 8px',
                cursor: 'pointer',
                border: 'none',
              }}
            >
              {active ? (
                <span className="text-[12.5px] font-medium leading-none tracking-tight">
                  {item.label}
                </span>
              ) : (
                <span
                  className="block w-1.5 h-1.5 rounded-full transition-transform duration-150 group-hover:scale-150"
                  style={{ backgroundColor: 'var(--accent)' }}
                />
              )}
            </button>
          );
        })}

        <div
          className="h-4 w-px mx-1"
          style={{ backgroundColor: 'var(--hair-strong)' }}
          aria-hidden="true"
        />

        <button
          type="button"
          onClick={onOpenCommand}
          title="Command palette (⌘K)"
          aria-label="Open command palette"
          className="w-8 h-8 rounded-full inline-flex items-center justify-center transition-colors duration-150"
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--ink-muted)',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--ink)';
            e.currentTarget.style.backgroundColor = 'var(--sheet-muted)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--ink-muted)';
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          <LayoutGrid size={14} />
        </button>
      </nav>
    </div>
  );
};
