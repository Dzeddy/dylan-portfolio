import React from 'react';
import { Reveal } from './design';

export const StatementBand: React.FC = () => (
  <section className="py-12 sm:py-24 px-4 sm:px-8">
    <div className="max-w-[1180px] mx-auto">
      <Reveal>
        <p
          className="m-0 max-w-[960px]"
          style={{
            fontSize: 'clamp(1.55rem, 3.4vw, 2.95rem)',
            lineHeight: 1.24,
            letterSpacing: '-0.025em',
            color: 'var(--ink)',
            textWrap: 'balance',
          }}
        >
          <span className="font-display font-semibold">
            ML infrastructure built for fleet scale.
          </span>{' '}
          <span
            className="font-editorial font-normal"
            style={{ letterSpacing: '-0.015em', color: 'var(--ink)' }}
          >
            From accelerator release qualification and automated remediation to
            low-latency distributed backends, I care about systems that stay fast
            when the workload gets hard.
          </span>
        </p>
      </Reveal>
    </div>
  </section>
);
