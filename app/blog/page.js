import { ArrowUpRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/ui/Reveal';
import { posts } from '@/lib/data';

export const metadata = { title: 'Blog — Rex' };

export default function BlogPage() {
  return (
    <main>
      <PageHeader kicker="Blog" title="HOT TAKES" sub="Loud opinions on design, type, and the web." />
      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-6xl gap-5">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.08}>
              <a href="#" className="nb nb-hover group flex flex-col justify-between gap-4 bg-white p-6 sm:flex-row sm:items-center md:p-7">
                <div className="max-w-2xl">
                  <div className="mb-2 flex items-center gap-3 text-xs font-bold uppercase text-black/50">
                    <span className="nb bg-lime-300 px-2 py-0.5">{p.category}</span>
                    <span>{p.date}</span><span>·</span><span>{p.read}</span>
                  </div>
                  <h2 className="text-xl font-black uppercase md:text-2xl">{p.title}</h2>
                  <p className="mt-2 font-medium text-black/70">{p.excerpt}</p>
                </div>
                <ArrowUpRight className="hidden shrink-0 transition group-hover:translate-x-1 sm:block" />
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
