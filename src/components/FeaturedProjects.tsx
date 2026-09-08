import { Play, Gamepad2, Calculator, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Bengal Strikers',
    description:
      'A browser-based football game inspired by local football culture and Bengal, featuring interactive gameplay and a fast-paced match experience.',
    primary: { label: 'Play Game', icon: Play },
    primaryHref: 'https://bengalstrikers.netlify.app/',
    secondary: { label: 'View Details', icon: ArrowUpRight },
    secondaryHref: 'https://github.com/skmahirulamin/bengal-strikers',
    icon: Gamepad2,
    gradient: 'from-emerald-500/25 via-teal-500/15 to-cyan-500/25',
    accent: 'text-emerald-300',
    href: '#',
    image: `${import.meta.env.BASE_URL}Bengal_Strikers_Gameplay_Image.png`,
    previewLabel: 'Gameplay Preview',
  },
  {
    title: 'bKash Charge Calculator',
    description:
      'A web-based bKash charge calculator that helps users quickly estimate transaction fees for different bKash services.',
    primary: { label: 'Try Tool', icon: Calculator },
    primaryHref: 'https://bkash-charge-calculator.vercel.app/',
    secondary: { label: 'View Project', icon: ArrowUpRight },
    secondaryHref: 'https://github.com/skmahirulamin/bKash-Charge-Calculator',
    icon: Calculator,
    gradient: 'from-pink-500/25 via-rose-500/15 to-fuchsia-500/25',
    accent: 'text-pink-300',
    href: '#',
    image: `${import.meta.env.BASE_URL}bKash_Calc_View.png`,
    previewLabel: 'Website Preview',
  },
  /*
  {
    title: 'Creative AI Projects',
    description: 'A collection of experimental AI-powered visual and video projects.',
    primary: { label: 'Explore Projects', icon: Sparkles },
    icon: Sparkles,
    gradient: 'from-violet-500/25 via-indigo-500/15 to-blue-500/25',
    accent: 'text-violet-300',
    href: '#',
    span: 'lg:col-span-12',
    image: undefined,
  },
  */
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="relative section-pad py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="reveal mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300/80">
            Featured Projects
          </p>
          <h2 className="reveal text-4xl font-bold leading-tight md:text-5xl" data-reveal-delay="60">
            Selected work I&apos;m proud of.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="reveal group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0e0e13] lg:col-span-6"
              data-reveal-delay={i * 90}
            >
              {/* Visual top area */}
              <div className="relative aspect-[16/10] overflow-hidden md:aspect-[16/9]">
                <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient}`} />
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={`${p.title} project preview`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className={`flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition-transform duration-500 group-hover:scale-110 ${p.accent}`}
                    >
                      <p.icon className="h-9 w-9" />
                    </div>
                  )}
                </div>
                <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70 backdrop-blur">
                  {p.previewLabel ?? 'Placeholder · add your screenshot'}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-semibold md:text-3xl">{p.title}</h3>
                <p className="mt-3 max-w-xl text-white/65">{p.description}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={p.primaryHref ?? p.href}
                    target={p.primaryHref ? '_blank' : undefined}
                    rel={p.primaryHref ? 'noopener noreferrer' : undefined}
                    className="group/btn inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-transform duration-300 hover:scale-105"
                  >
                    <p.primary.icon className="h-4 w-4" />
                    {p.primary.label}
                  </a>
                  {p.secondary && (
                    <a
                      href={p.secondaryHref ?? p.href}
                      target={p.secondaryHref ? '_blank' : undefined}
                      rel={p.secondaryHref ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10"
                    >
                      <p.secondary.icon className="h-4 w-4" />
                      {p.secondary.label}
                    </a>
                  )}
                </div>
              </div>

              {/* hover glow */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-cyan-300/10 to-fuchsia-300/10" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
