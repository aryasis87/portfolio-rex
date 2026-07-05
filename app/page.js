// app/page.js
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Star } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { profile, stats, services, projects, clients, process, testimonials } from '@/lib/data';

const MARQUEE = ['BRANDING', 'WEB DESIGN', 'ART DIRECTION', 'POSTERS', 'TYPOGRAPHY', 'IDENTITY'];

export default function Home() {
  return (
    <main className="grid-bg">
      {/* Hero — oversized display + asymmetric */}
      <section className="border-b-[3px] border-black px-6 pt-12 pb-8">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-black/60">{profile.role} — {profile.location}</p>
          <div className="mt-4 grid items-end gap-8 md:grid-cols-[1fr_18rem]">
            <h1 className="font-display text-[24vw] uppercase leading-[0.78] tracking-tight md:text-[13rem]">Rex</h1>
            <div className="md:pb-4">
              <p className="max-w-xs font-mono text-sm leading-relaxed text-black/70">{profile.intro}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/work" className="nb nb-hover nb-press inline-flex items-center gap-2 bg-black px-5 py-3 font-mono text-sm font-bold uppercase text-lime-300">Work <ArrowRight size={16} /></Link>
                <Link href="/contact" className="nb nb-hover nb-press bg-lime-300 px-5 py-3 font-mono text-sm font-bold uppercase">Hire</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-b-[3px] border-black bg-black py-3">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((r) => (
            <div key={r} className="flex shrink-0 items-center" aria-hidden={r === 1}>
              {MARQUEE.map((m) => (
                <span key={m} className="flex items-center font-display text-2xl uppercase">
                  <span className="px-6 text-lime-300">{m}</span><span className="text-white">★</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Statement + duotone image */}
      <section className="border-b-[3px] border-black">
        <div className="mx-auto grid max-w-6xl md:grid-cols-2">
          <div className="px-6 py-14 md:border-r-[3px] md:border-black">
            <h2 className="font-display text-5xl uppercase leading-[0.9] md:text-7xl">Design that <span className="bg-lime-300 px-1">shouts.</span></h2>
            <p className="mt-6 max-w-md font-mono text-sm leading-relaxed text-black/70">{profile.bioShort}</p>
            <Link href="/about" className="mt-6 inline-flex items-center gap-1 font-mono text-sm font-bold uppercase underline-offset-4 hover:underline">More about me <ArrowUpRight size={15} /></Link>
          </div>
          <div className="relative min-h-[340px] bg-lime-400">
            <Image src={profile.avatar} alt={profile.name} fill priority sizes="(max-width:768px) 100vw, 50vw" className="object-cover contrast-125 grayscale mix-blend-multiply" />
          </div>
        </div>
      </section>

      {/* Stats — mono ledger */}
      <section className="border-b-[3px] border-black bg-black">
        <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className={`px-6 py-7 ${i < 3 ? 'border-white/20 md:border-r' : ''}`}>
              <p className="font-display text-5xl text-lime-300">{s.value}</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-white/60">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services — numbered editorial list */}
      <section className="border-b-[3px] border-black px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-black/60">{'// What I make'}</p>
          <div className="mt-8 border-y-2 border-black">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="group flex flex-col gap-2 border-b-2 border-black py-6 last:border-b-0 md:flex-row md:items-center md:gap-8">
                  <span className="font-display text-4xl text-black/25 md:w-24">0{i + 1}</span>
                  <h3 className="font-display text-3xl uppercase transition-colors group-hover:text-lime-500 md:w-80 md:shrink-0">{s.title}</h3>
                  <p className="font-mono text-sm text-black/70">{s.desc}</p>
                  <ArrowUpRight className="hidden shrink-0 md:ml-auto md:block" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Work preview */}
      <section className="border-b-[3px] border-black bg-lime-300 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-5xl uppercase md:text-6xl">Selected work</h2>
            <Link href="/work" className="font-mono text-sm font-bold uppercase underline-offset-4 hover:underline">[ all ]</Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <Link href="/work" className="nb nb-hover group block bg-white">
                  <div className="relative h-52 w-full overflow-hidden border-b-2 border-black">
                    <Image src={p.image} alt={p.title} fill sizes="(max-width:640px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
                    <span className="absolute right-0 top-0 bg-black px-2 py-1 font-mono text-xs text-lime-300">0{i + 1}</span>
                  </div>
                  <div className="flex items-center justify-between p-4">
                    <h3 className="font-display text-xl uppercase">{p.title}</h3>
                    <span className="font-mono text-xs uppercase text-black/60">{p.category}</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Clients strip */}
      <section className="border-b-[3px] border-black bg-black py-5">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-6">
          <span className="font-mono text-xs uppercase tracking-widest text-white/40">Worked with:</span>
          {clients.map((c) => <span key={c} className="font-display text-xl uppercase text-white/80">{c}</span>)}
        </div>
      </section>

      {/* Process */}
      <section className="border-b-[3px] border-black px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-5xl uppercase md:text-6xl">How it <span className="bg-lime-300 px-2">works</span></h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.08}>
                <div className="nb h-full bg-white p-6">
                  <span className="font-display text-5xl text-lime-500">{p.step}</span>
                  <h3 className="mt-2 font-display text-xl uppercase">{p.title}</h3>
                  <p className="mt-1 font-mono text-xs leading-relaxed text-black/70">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-b-[3px] border-black bg-lime-300 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-5xl uppercase md:text-6xl">People talk</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <div className="nb h-full bg-white p-6">
                  <div className="mb-3 flex gap-1">{Array.from({ length: 5 }).map((_, k) => <Star key={k} size={16} className="fill-lime-400 text-black" />)}</div>
                  <p className="font-medium">“{t.quote}”</p>
                  <p className="mt-4 font-display text-lg uppercase">{t.name}</p>
                  <p className="font-mono text-xs uppercase text-black/60">{t.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
