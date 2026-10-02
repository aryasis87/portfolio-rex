import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <main>
      <PageHeader kicker="Error 404" title="Off the grid." sub="This page doesn't exist, or it moved. Everything else is still loud and in place." />
      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-4">
          <Link href="/" className="nb nb-hover nb-press inline-flex items-center gap-2 bg-black px-5 py-3 font-mono text-sm font-bold uppercase text-lime-300">
            <ArrowLeft size={16} aria-hidden="true" /> Back home
          </Link>
          <Link href="/work" className="nb nb-hover nb-press bg-white px-5 py-3 font-mono text-sm font-bold uppercase">
            See the work
          </Link>
        </div>
      </section>
    </main>
  );
}
