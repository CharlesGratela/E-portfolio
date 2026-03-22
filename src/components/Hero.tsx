const highlightStats = [
  { value: '4+', label: 'Portfolio projects' },
  { value: 'Full stack', label: 'From schema to UI' },
  { value: 'Mobile first', label: 'Built for real users' },
]

const capabilityTags = ['Backend-focused', 'React + TypeScript', 'Supabase workflows', 'Responsive UI systems']

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.28),_transparent_28%),linear-gradient(135deg,_#0f172a_0%,_#111827_40%,_#0c4a6e_100%)] px-5 pb-20 pt-32 text-white"
    >
      <div className="absolute inset-0 opacity-60">
        <div className="absolute left-[8%] top-28 h-40 w-40 rounded-full bg-sky-400/20 blur-3xl" />
        <div className="absolute bottom-20 right-[10%] h-56 w-56 rounded-full bg-orange-400/15 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[1.1fr_0.9fr]">
        <div className="order-2 text-center md:order-1 md:text-left">
          <span className="section-kicker border-white/15 bg-white/10 text-sky-100 shadow-white/5 dark:border-white/10 dark:bg-white/5 dark:text-sky-200">
            Full-Stack Developer Portfolio
          </span>
          <h1 className="max-w-3xl font-['Sora'] text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Building practical products with thoughtful backend logic and clean frontend experiences.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
            I&apos;m Charles Gandeza Gratela, a fresh graduate who enjoys turning real workflows into usable digital products. My work blends backend structure, responsive UI thinking, and a steady focus on practical execution.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            {capabilityTags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-medium text-slate-100 backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            <a href="#projects" className="btn btn-primary">
              Explore Projects
            </a>
            <a href="#contact" className="btn btn-secondary">
              Let&apos;s Connect
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {highlightStats.map((stat) => (
              <div key={stat.label} className="stat-chip">
                <div className="text-2xl font-extrabold text-white">{stat.value}</div>
                <div className="mt-1 text-sm text-slate-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-sky-400/30 via-transparent to-orange-300/20 blur-2xl" />
            <div className="relative surface-card w-[min(100%,26rem)] overflow-hidden rounded-[32px] border-white/10 bg-white/8 p-4 shadow-2xl shadow-slate-950/30 dark:border-white/10 dark:bg-white/5">
              <div className="rounded-[24px] border border-white/10 bg-slate-950/50 p-3">
                <div className="mb-3 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                  <span className="font-semibold tracking-[0.2em] text-sky-200 uppercase">Charles Gratela</span>
                  <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-300">Available for opportunities</span>
                </div>
                <div className="overflow-hidden rounded-[20px] border border-white/10 bg-slate-900">
                  <img
                    src="/images/projects/image.jpg"
                    alt="Charles Gratela"
                    className="h-[26rem] w-full object-cover"
                  />
                </div>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <div className="text-xs uppercase tracking-[0.22em] text-slate-400">Focus</div>
                    <div className="mt-1 font-semibold text-white">Backend systems</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <div className="text-xs uppercase tracking-[0.22em] text-slate-400">Style</div>
                    <div className="mt-1 font-semibold text-white">Clear and mobile-first</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
