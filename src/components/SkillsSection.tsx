import React from 'react';
import { skillGroups } from '../data/portfolio';
import { Reveal, SectionHeader } from './design';

export const SkillsSection: React.FC = () => (
  <section id="stack" className="scroll-mt-20 py-12 sm:py-24 px-4 sm:px-8">
    <div className="max-w-[1180px] mx-auto">
      <SectionHeader
        title="Stack"
        subtitle="Tools I reach for daily and problems I like working on."
      />

      <dl
        className="m-0"
        style={{ borderTop: '1px solid var(--hair-strong)' }}
      >
        {skillGroups.map((group, idx) => (
          <Reveal key={group.label} delay={idx * 45}>
            <div
              className="py-6 sm:py-8 grid grid-cols-12 gap-x-6 gap-y-2.5 items-baseline"
              style={{ borderBottom: '1px solid var(--hair)' }}
            >
              <dt className="col-span-12 md:col-span-3">
                <span
                  className="font-editorial italic text-[21px] sm:text-[24px]"
                  style={{ color: 'var(--ink)' }}
                >
                  {group.label}
                </span>
              </dt>
              <dd className="col-span-12 md:col-span-9 m-0">
                <div
                  className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[15px] sm:text-[16.5px] leading-relaxed"
                  style={{ color: 'var(--ink-secondary)' }}
                >
                  {group.items.map((item, i) => (
                    <React.Fragment key={item}>
                      <span style={{ color: 'var(--ink)' }}>{item}</span>
                      {i < group.items.length - 1 && (
                        <span
                          style={{ color: 'var(--ink-muted)' }}
                          aria-hidden="true"
                        >
                          ·
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </div>
  </section>
);
