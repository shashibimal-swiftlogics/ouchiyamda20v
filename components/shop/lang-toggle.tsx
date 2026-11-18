'use client';
import { useState } from 'react';

/** Japanese is the default; English is shown beneath each text when switched on. */
export function LangToggle() {
  const [on, setOn] = useState(false);
  return (
    <button
      type="button"
      className="s-lang"
      aria-pressed={on}
      onClick={() => {
        const next = !on;
        setOn(next);
        document.querySelector('.shop')?.setAttribute('data-en', next ? 'on' : 'off');
      }}
    >
      EN {on ? '✓' : '＋'}
    </button>
  );
}
