'use client';
import { useState } from 'react';
import { Mail, Phone, MapPin, Check } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { profile } from '@/lib/data';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => { e.preventDefault(); if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return; setSent(true); };
  const field = 'w-full border-2 border-black bg-white px-4 py-3 text-sm font-semibold outline-none placeholder:text-black/40 focus:bg-lime-50';

  return (
    <main>
      <PageHeader kicker="Contact" title="LET'S TALK" sub="Got a loud idea? Let's make it impossible to ignore." />
      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_1.2fr]">
          <div className="space-y-5">
            <Info icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
            <Info icon={Phone} label="Phone" value={profile.phone} href={`tel:${profile.phone.replace(/\s/g, '')}`} />
            <Info icon={MapPin} label="Location" value={profile.location} />
            <div className="nb bg-lime-300 p-5">
              <span className="flex items-center gap-2 text-sm font-black uppercase">
                <span className="h-2.5 w-2.5 rounded-full bg-black" /> Available for work
              </span>
              <p className="mt-2 text-sm font-semibold text-black/70">Booking projects for next quarter.</p>
            </div>
            <div className="flex flex-wrap gap-4 pt-1">
              {profile.socials.map((s) => <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="text-sm font-black uppercase underline-offset-4 hover:underline">{s.label}</a>)}
            </div>
          </div>
          <div>
            {sent ? (
              <div className="nb-lg bg-lime-300 p-10 text-center">
                <div className="nb mx-auto flex h-14 w-14 items-center justify-center bg-black text-lime-300"><Check size={28} /></div>
                <h2 className="mt-4 text-2xl font-black uppercase">Message sent!</h2>
                <p className="mt-1 font-semibold text-black/70">Thanks {form.name}. I’ll hit you back at {form.email}.</p>
                <button onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }} className="nb nb-hover mt-6 bg-white px-6 py-2.5 text-sm font-black uppercase">Send another</button>
              </div>
            ) : (
              <form onSubmit={submit} className="nb-lg space-y-4 bg-white p-6 md:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input name="name" value={form.name} onChange={handle} placeholder="YOUR NAME" required className={field} />
                  <input type="email" name="email" value={form.email} onChange={handle} placeholder="YOUR EMAIL" required className={field} />
                </div>
                <textarea name="message" value={form.message} onChange={handle} placeholder="WHAT'S THE IDEA?" rows={6} required className={`${field} resize-none`} />
                <button type="submit" className="nb nb-hover nb-press w-full bg-black py-3.5 font-black uppercase text-lime-300">Send it →</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function Info({ icon: Icon, label, value, href }) {
  const inner = (
    <div className="nb nb-hover flex items-start gap-4 bg-white p-5">
      <span className="nb flex h-11 w-11 shrink-0 items-center justify-center bg-lime-300"><Icon size={20} /></span>
      <div>
        <p className="text-xs font-black uppercase tracking-widest text-black/50">{label}</p>
        <p className="mt-0.5 font-black">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
