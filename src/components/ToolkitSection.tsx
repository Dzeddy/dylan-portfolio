import React from 'react';
import { toolkitRows } from '../data/portfolio';
import { Reveal } from './design';

export const ToolkitSection: React.FC = () => (
  <section
    id="toolkit"
    className="scroll-mt-20 max-w-[1200px] mx-auto px-5 sm:px-9 py-16 sm:py-20"
    style={{ borderTop: '1px solid #ECEEF0' }}
  >
    <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-12 items-start">
      <Reveal>
        <h2
          className="m-0 text-[28px] sm:text-[32px] font-medium tracking-[-0.035em]"
          style={{ color: '#0F0F10', lineHeight: 1.1 }}
        >
          Toolkit
        </h2>
        <p
          className="mt-2.5 mb-0 text-[15px] leading-[1.55] max-w-[26ch]"
          style={{ color: '#646973' }}
        >
          Education, languages, and infrastructure stack.
        </p>
      </Reveal>

      <dl className="m-0">
        {toolkitRows.map((row, idx) => (
          <Reveal key={row.label} delay={idx * 25}>
            <div
              className={`grid grid-cols-1 sm:grid-cols-[132px_1fr] gap-y-1 gap-x-6 pb-5 ${
                idx === 0 ? 'pt-0 sm:pt-1' : 'pt-5'
              }`}
              style={{ borderBottom: '1px solid #ECEEF0' }}
            >
              <dt
                className="text-[14px] font-medium"
                style={{ color: '#7C818B' }}
              >
                {row.label}
              </dt>
              <dd
                className="m-0 text-[15px] leading-[1.58]"
                style={{ color: '#0F0F10' }}
              >
                {row.value}
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </div>
  </section>
);
