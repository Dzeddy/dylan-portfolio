import React, { useCallback, useEffect, useState } from 'react';
import { personalInfo, sectionNav } from '../data/portfolio';
import { CanvasMode, ThemeMode } from '../types';
import { Navigation } from './Navigation';
import { HeroSection } from './HeroSection';
import { StatementBand } from './StatementBand';
import { ExperienceSection } from './ExperienceSection';
import { ProjectsSection } from './ProjectsSection';
import { SkillsSection } from './SkillsSection';
import { ContactSection } from './ContactSection';
import { Footer } from './Footer';
import { FloatingDock } from './FloatingDock';
import { CommandPalette } from './CommandPalette';

export const Portfolio: React.FC = () => {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.getAttribute('data-theme') === 'dark'
        ? 'dark'
        : 'light';
    }
    return 'light';
  });
  const [canvasMode, setCanvasMode] = useState<CanvasMode>('field');
  const [activeSection, setActiveSection] = useState<string>('intro');
  const [commandOpen, setCommandOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Sync theme attribute & localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('dz-theme', theme);
    } catch {
      // ignore storage errors
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const toggleCanvasMode = useCallback(() => {
    setCanvasMode((prev) => (prev === 'field' ? 'orbit' : 'field'));
  }, []);

  const handleCopyEmail = useCallback(() => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(personalInfo.email).catch(() => {});
    }
    setCopiedEmail(true);
    window.setTimeout(() => setCopiedEmail(false), 2000);
  }, []);

  const handleJumpSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  // Scroll-spy for floating dock & navigation
  useEffect(() => {
    const ids = sectionNav.map((s) => s.id);
    const updateActive = () => {
      const marker = window.scrollY + window.innerHeight * 0.34;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= marker) {
          current = id;
        }
      }
      // If near the very bottom, activate contact
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60
      ) {
        current = 'contact';
      }
      setActiveSection(current);
    };

    updateActive();
    window.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', updateActive, { passive: true });
    return () => {
      window.removeEventListener('scroll', updateActive);
      window.removeEventListener('resize', updateActive);
    };
  }, []);

  // Global keyboard shortcuts (Cmd/Ctrl+K for command palette)
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <div className="min-h-screen relative">
      <Navigation
        activeSection={activeSection}
        theme={theme}
        canvasMode={canvasMode}
        copiedEmail={copiedEmail}
        onToggleTheme={toggleTheme}
        onToggleCanvasMode={toggleCanvasMode}
        onCopyEmail={handleCopyEmail}
        onJumpSection={handleJumpSection}
        onOpenCommand={() => setCommandOpen(true)}
      />

      <main>
        <HeroSection
          theme={theme}
          canvasMode={canvasMode}
          onCanvasModeChange={setCanvasMode}
          copiedEmail={copiedEmail}
          onCopyEmail={handleCopyEmail}
        />

        <StatementBand />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />

        <ContactSection
          theme={theme}
          copiedEmail={copiedEmail}
          onCopyEmail={handleCopyEmail}
        />
      </main>

      <Footer onOpenCommand={() => setCommandOpen(true)} />

      <FloatingDock
        activeSection={activeSection}
        onSelectSection={handleJumpSection}
        onOpenCommand={() => setCommandOpen(true)}
      />

      <CommandPalette
        open={commandOpen}
        onClose={() => setCommandOpen(false)}
        theme={theme}
        onToggleTheme={toggleTheme}
        canvasMode={canvasMode}
        onToggleCanvasMode={toggleCanvasMode}
        onJumpSection={handleJumpSection}
        copiedEmail={copiedEmail}
        onCopyEmail={handleCopyEmail}
      />
    </div>
  );
};
