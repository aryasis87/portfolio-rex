import Image from 'next/image';
import Link from 'next/link';
import { Download } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/ui/Reveal';
import { profile, skills, experience, education } from '@/lib/data';

export const metadata = { title: 'About — Rex' };

export default function AboutPage() {
  return (
    <main>
      <PageHeader kicker="About" title="WHO IS REX?" sub={profile.bioShort} />

      <section className="border-b-[3px] border-black px-6 py-14">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <Reveal>
            <div className="nb-lg bg-white p-2">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image src={profile.avatar} alt={profile.name} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover grayscale contrast-125" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl font-black uppercase md:text-4xl">No fluff. <span className="bg-lime-300 px-2">Just work.</span></h2>
            <div className="mt-5 space-y-4 font-medium leading-relaxed text-black/80">
              {profile.bio.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <Link href="#" className="nb nb-hover nb-press mt-7 inline-flex items-center gap-2 bg-lime-300 px-6 py-3 font-black uppercase">
              <Download size={16} /> Download CV
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="border-b-[3px] border-black bg-lime-300 px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <Reveal><h2 className="text-3xl font-black uppercase md:text-4xl">Skills</h2></Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {skills.map((s, i) => (
              <Reveal key={s.group} delay={i * 0.1}>
                <div className="nb h-full bg-white p-6">
                  <h3 className="mb-4 text-lg font-black uppercase">{s.group}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {s.items.map((it) => <li key={it} className="nb bg-lime-300 px-2.5 py-1 text-xs font-bold uppercase">{it}</li>)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <Reveal><h2 className="text-3xl font-black uppercase md:text-4xl">Experience</h2></Reveal>
          <div className="mt-10">
            {experience.map((e, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="grid gap-2 border-t-2 border-black py-6 md:grid-cols-[160px_1fr]">
                  <span className="font-black uppercase text-black/50">{e.period}</span>
                  <div>
                    <h3 className="text-xl font-black uppercase">{e.role} <span className="text-black/40">/ {e.company}</span></h3>
                    <p className="mt-2 max-w-2xl font-medium text-black/70">{e.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12"><h2 className="text-3xl font-black uppercase md:text-4xl">Education</h2></Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {education.map((e, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="nb bg-white p-6">
                  <span className="text-xs font-black uppercase text-black/50">{e.period}</span>
                  <h3 className="mt-2 text-lg font-black uppercase">{e.degree}</h3>
                  <p className="text-sm font-semibold text-black/70">{e.school}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
