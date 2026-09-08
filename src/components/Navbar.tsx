import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Designs', href: '#designs' },
  { label: 'Videos', href: '#videos' },
  { label: 'YouTube', href: '#youtube' },
  { label: 'Tools', href: '#tools' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled
          ? 'border-b border-white/10 bg-[#08080b]/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
        }`}
    >
      <nav className="section-pad mx-auto flex h-16 max-w-7xl items-center justify-between md:h-20">
        <a href="#hero" onClick={close} className="group flex items-center gap-2">
          <img
            src={`${import.meta.env.BASE_URL}sk-logo.png`}
            alt="SK Logo"
            className="h-10 w-10 object-contain"
          />
          <div className="flex items-center gap-3">

            <span className="text-lg font-semibold tracking-tight">
              Sheikh Mahi
            </span>
          </div>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative rounded-lg px-3.5 py-2 text-sm text-white/70 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-transform duration-300 hover:scale-105"
          >
            Let&apos;s Talk
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white/80 transition-colors hover:bg-white/10 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-[#08080b]/95 backdrop-blur-xl transition-[max-height,opacity] duration-400 lg:hidden ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        style={{ transitionDuration: '400ms' }}
      >
        <ul className="section-pad flex flex-col gap-1 py-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={close}
                className="block rounded-lg px-4 py-3 text-base text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <a
              href="#contact"
              onClick={close}
              className="block rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-black"
            >
              Let&apos;s Talk
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
