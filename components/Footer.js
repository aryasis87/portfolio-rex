import Link from 'next/link';
import { profile, nav } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="border-t-[3px] border-black bg-black px-6 py-14 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="nb-lg mb-12 bg-lime-300 p-8 text-black md:p-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <h2 className="max-w-xl font-display text-4xl uppercase leading-none md:text-5xl">Got something loud to build?</h2>
            <Link href="/contact" className="nb nb-hover shrink-0 bg-white px-7 py-3 font-black uppercase">Start a project →</Link>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="inline-block bg-lime-300 px-2 font-display text-2xl uppercase text-black">Rex</h3>
            <p className="mt-3 max-w-xs text-sm text-white/60">{profile.role} · {profile.location}.</p>
            <a href={`mailto:${profile.email}`} className="mt-3 inline-block font-bold text-lime-300 hover:underline">{profile.email}</a>
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-white/40">Menu</p>
            <ul className="mt-3 space-y-2">
              {nav.map((l) => <li key={l.href}><Link href={l.href} className="text-sm font-bold uppercase text-white/70 transition hover:text-lime-300">{l.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-white/40">Elsewhere</p>
            <ul className="mt-3 space-y-2">
              {profile.socials.map((s) => <li key={s.label}><a href={s.href} target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase text-white/70 transition hover:text-lime-300">{s.label}</a></li>)}
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t-2 border-white/20 pt-6 text-center text-sm font-bold uppercase text-white/40">© {new Date().getFullYear()} Rex — All rights reserved.</p>
      </div>
    </footer>
  );
}
