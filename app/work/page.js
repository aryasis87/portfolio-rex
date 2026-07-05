'use client';
import { useMemo, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import { projects } from '@/lib/data';

const CATS = ['All', 'Branding', 'Web', 'Poster'];

export default function WorkPage() {
  const [cat, setCat] = useState('All');
  const list = useMemo(() => (cat === 'All' ? projects : projects.filter((p) => p.category === cat)), [cat]);

  return (
    <main>
      <PageHeader kicker="Work" title="THE WORK" sub="Branding, web, and posters — loud and proud." />
      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-wrap gap-3">
            {CATS.map((c) => (
              <button key={c} onClick={() => setCat(c)} className={`nb nb-press px-4 py-2 text-sm font-black uppercase transition ${cat === c ? 'bg-black text-lime-300' : 'bg-white hover:bg-lime-300'}`}>
                {c}
              </button>
            ))}
          </div>
          <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {list.map((p) => (
                <motion.a key={p.title} href="#" layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.3 }} className="nb nb-hover group block bg-white">
                  <div className="relative h-56 w-full overflow-hidden border-b-2 border-black">
                    <Image src={p.image} alt={p.title} fill sizes="(max-width:640px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
                    <span className="nb absolute left-3 top-3 bg-lime-300 px-2 py-0.5 text-xs font-black uppercase">{p.category}</span>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-black uppercase">{p.title}</h3>
                      <span className="text-xs font-bold text-black/50">{p.year}</span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-black/70">{p.desc}</p>
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
