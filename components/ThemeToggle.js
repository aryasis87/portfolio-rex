'use client';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const dark = resolvedTheme === 'dark';
  return (
    <button
      type="button"
      aria-label="Ganti tema"
      onClick={() => setTheme(dark ? 'light' : 'dark')}
      className="fixed bottom-5 right-5 z-[60] grid h-11 w-11 place-items-center border-2 border-black bg-lime-300 text-black shadow-[4px_4px_0_#0a0a0a] transition hover:translate-x-0.5 hover:translate-y-0.5 dark:border-lime-300 dark:bg-black dark:text-lime-300"
    >
      {mounted && dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
