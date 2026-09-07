const skills = [
  'Web Development',
  'Browser Games',
  'Graphic Design',
  'Video Editing',
  'AI Creativity',
  'Digital Marketing',
];

export default function About() {
  return (
    <section id="about" className="relative section-pad py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Visual */}
          <div className="reveal relative order-2 lg:order-1">
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10">
              <img
                src={`${import.meta.env.BASE_URL}mahi-profile.jpeg`}
                alt="Mahi — Digital Creator"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
            {/* floating chips */}
            <div className="absolute -right-3 top-8 rounded-2xl border border-white/10 bg-[#0e0e13]/90 px-4 py-3 backdrop-blur md:-right-6">
              <p className="text-2xl font-bold text-gradient">Multidisciplinary</p>
            </div>
            <div className="absolute -left-3 bottom-10 rounded-2xl border border-white/10 bg-[#0e0e13]/90 px-4 py-3 backdrop-blur md:-left-6">
              <p className="text-sm text-white/60">Creative · Technical</p>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p
              className="reveal mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300/80"
            >
              About Me
            </p>
            <h2
              className="reveal text-4xl font-bold leading-tight md:text-5xl"
              data-reveal-delay="60"
            >
              Turning ideas into{' '}
              <span className="text-gradient">engaging experiences</span>.
            </h2>
            <p
              className="reveal mt-6 text-lg leading-relaxed text-white/70"
              data-reveal-delay="120"
            >
              I&apos;m a multidisciplinary digital creator passionate about
              turning ideas into engaging digital experiences. I work across web
              development, interactive projects, graphic design, video editing
              and AI-powered creativity.
            </p>

            <div className="reveal mt-8 flex flex-wrap gap-3" data-reveal-delay="200">
              {skills.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-white"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
