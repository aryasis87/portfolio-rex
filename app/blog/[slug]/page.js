import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { posts, getPost, profile } from '@/lib/data';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return { title: 'Article not found' };
  return { title: p.title, description: p.excerpt, alternates: { canonical: `/blog/${p.slug}` } };
}

export default async function Post({ params }) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();
  const next = posts[(posts.findIndex((x) => x.slug === slug) + 1) % posts.length];

  return (
    <main>
      <PageHeader kicker={`${p.category} · ${p.read} read`} title={p.title} sub={p.excerpt} />
      <article className="px-6 py-14">
        <div className="mx-auto max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-black/70">{p.date} · by {profile.name}</p>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-black/80">
            {p.body.map((para) => <p key={para.slice(0, 24)}>{para}</p>)}
          </div>
          <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t-[3px] border-black pt-8">
            <Link href="/blog" className="inline-flex items-center gap-2 font-mono text-sm font-bold uppercase underline-offset-4 hover:underline"><ArrowLeft size={16} aria-hidden="true" /> All articles</Link>
            {next.slug !== p.slug && <Link href={`/blog/${next.slug}`} className="inline-flex items-center gap-2 font-mono text-sm font-bold uppercase underline-offset-4 hover:underline">Next: {next.title} <ArrowUpRight size={16} aria-hidden="true" /></Link>}
          </div>
        </div>
      </article>
    </main>
  );
}
