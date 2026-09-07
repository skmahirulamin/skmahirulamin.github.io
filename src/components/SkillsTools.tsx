const tools = [
  { name: 'Photoshop', glyph: 'Ps', color: 'from-sky-500/30 to-blue-600/20', text: 'text-sky-300' },
  { name: 'Canva', glyph: 'Cv', color: 'from-cyan-500/30 to-teal-500/20', text: 'text-cyan-300' },
  { name: 'CapCut', glyph: 'Cc', color: 'from-slate-400/30 to-slate-600/20', text: 'text-slate-200' },
  { name: 'Premiere Pro', glyph: 'Pr', color: 'from-violet-500/30 to-purple-600/20', text: 'text-violet-300' },
  { name: 'HTML', glyph: '</>', color: 'from-orange-500/30 to-amber-600/20', text: 'text-orange-300' },
  { name: 'CSS', glyph: '#', color: 'from-blue-500/30 to-indigo-600/20', text: 'text-blue-300' },
  { name: 'JavaScript', glyph: 'JS', color: 'from-yellow-400/30 to-amber-500/20', text: 'text-yellow-300' },
  { name: 'Figma', glyph: 'Fg', color: 'from-pink-500/30 to-rose-600/20', text: 'text-pink-300' },
  { name: 'WordPress', glyph: 'Wp', color: 'from-sky-600/30 to-blue-700/20', text: 'text-sky-300' },
  { name: 'AI Tools', glyph: 'AI', color: 'from-emerald-500/30 to-teal-600/20', text: 'text-emerald-300' },
];

export default function SkillsTools() {
  return (
    <section id="tools" className="relative section-pad py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="reveal mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300/80">
            Tools I Create With
          </p>
          <h2 className="reveal text-4xl font-bold leading-tight md:text-5xl" data-reveal-delay="60">
            Skills & Tools I Use to Create Digital Experiences.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {tools.map((t, i) => (
            <div
              key={t.name}
              className="reveal group relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-[#0e0e13] p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-white/25"
              data-reveal-delay={i * 50}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${t.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
              <div className="relative">
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/5 font-['Space_Grotesk'] text-lg font-bold ${t.text}`}
                >
                  {t.glyph}
                </span>
              </div>
              <p className="relative text-sm font-medium text-white/85 transition-colors group-hover:text-white">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
