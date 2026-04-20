import React from 'react';
import { C, Mono } from './design';

export const Footer: React.FC = () => (
  <footer
    className="px-6 sm:px-10 md:px-14 py-8"
    style={{ borderTop: `1px solid ${C.hair}` }}
  >
    <div className="flex flex-col md:flex-row items-start md:items-baseline justify-between gap-3">
      <Mono>Set in Fraunces &amp; Instrument Sans. Built in Gainesville, 2026.</Mono>
      <Mono>© Dylan Zhuang · No. 01 / 01</Mono>
    </div>
  </footer>
);
