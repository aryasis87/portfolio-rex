'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { nav } from '@/lib/data';

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href) => (href === '/' ? pathname === '/' : !!pathname && pathname.startsWith(href));
  const links = nav.slice(0, -1);

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-black bg-[#fdfcf4]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="nb bg-lime-300 px-3 py-1 font-display text-2xl uppercase tracking-tight">
          Rex
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-3 py-1.5 font-mono text-sm font-bold uppercase tracking-wide transition ${isActive(l.href) ? 'bg-black text-lime-300' : 'hover:bg-black hover:text-white'}`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="nb nb-hover ml-2 bg-lime-300 px-4 py-1.5 font-mono text-sm font-bold uppercase">
            Contact →
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu" aria-expanded={open}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2, ease: 'easeOut' }}
            className="overflow-hidden border-t-2 border-black bg-[#fdfcf4] px-4 py-2 md:hidden"
          >
            {nav.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className={`block px-3 py-2.5 text-sm font-bold uppercase ${isActive(l.href) ? 'bg-black text-lime-300' : ''}`}>
                {l.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
