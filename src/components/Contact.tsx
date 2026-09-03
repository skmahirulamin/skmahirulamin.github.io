import { useState } from 'react';
import { Mail, Facebook, MessageCircle, Youtube, Github, Send, CheckCircle2 } from 'lucide-react';

const socials = [
  { label: 'Email', icon: Mail, href: 'mailto:skmahirulamin@gmail.com' },
  { label: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/iamskmahi/' },
  { label: 'WhatsApp', icon: MessageCircle, href: 'https://wa.me/8801997258668' },
  { label: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/@paurutitost' },
  { label: 'GitHub', icon: Github, href: 'https://github.com/skmahirulamin' },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('access_key', 'b8beb76f-d775-4946-a305-bbd8e045022f');
    formData.append('name', form.name);
    formData.append('email', form.email);
    formData.append('message', form.message);
    formData.append('subject', 'New message from SK Mahi Portfolio');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSent(true);
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setSent(false), 4000);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch {
      alert('Unable to send message. Please try again later.');
    }
  };
  const field =
    'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition-colors focus:border-cyan-300/50 focus:bg-white/[0.07]';

  return (
    <section id="contact" className="relative section-pad py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="reveal mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300/80">
            Contact
          </p>
          <h2 className="reveal text-4xl font-bold leading-tight md:text-5xl" data-reveal-delay="60">
            Let&apos;s Create Something.
          </h2>
          <p className="reveal mx-auto mt-5 max-w-xl text-lg text-white/70" data-reveal-delay="120">
            Have an idea, project or opportunity? Let&apos;s talk.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="reveal rounded-3xl border border-white/10 bg-[#0e0e13] p-6 md:p-8"
            data-reveal-delay="120"
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/80">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className={field}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/80">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className={field}
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/80">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project…"
                  className={`${field} resize-none`}
                />
              </div>
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-black transition-all duration-300 hover:scale-[1.02]"
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                    Message Sent
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Socials */}
          <div className="reveal flex flex-col gap-4" data-reveal-delay="180">
            <div className="rounded-3xl border border-white/10 bg-[#0e0e13] p-6">
              <p className="mb-5 text-sm font-medium text-white/80">Connect with me</p>
              <div className="grid grid-cols-1 gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-300/5"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-white/80 transition-colors group-hover:text-cyan-300">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <span className="font-medium text-white/90">{s.label}</span>
                    <span className="ml-auto text-white/30 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
