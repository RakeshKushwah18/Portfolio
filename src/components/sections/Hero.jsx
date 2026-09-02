import { motion } from 'framer-motion';
import { profile } from '../../data/portfolio';
import { MagneticButton } from '../ui/Button';
import { TbBrandGithub, TbBrandLinkedin, TbMail, TbDownload, TbArrowDown } from '../../utils/iconMap';

// Abstract layered UI visual — browser window, app interface, code fragments.
function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative mx-auto max-w-md lg:max-w-none"
    >
      {/* Browser window */}
      <div className="relative overflow-hidden rounded-2xl border border-cloud-200/10 bg-ink-900/90 shadow-elevated">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-cloud-200/8 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-cloud-400/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-cloud-400/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-cloud-400/30" />
          <div className="ml-3 flex-1 rounded-md bg-ink-800/60 px-3 py-1">
            <span className="font-mono text-[10px] text-cloud-400">localhost:3000</span>
          </div>
        </div>

        {/* Content area */}
        <div className="p-5">
          {/* Sidebar + main */}
          <div className="flex gap-4">
            {/* Sidebar */}
            <div className="hidden w-24 shrink-0 space-y-2 sm:block">
              <div className="h-6 rounded-md bg-accent-500/10" />
              <div className="h-6 rounded-md bg-cloud-200/5" />
              <div className="h-6 rounded-md bg-cloud-200/5" />
              <div className="h-6 rounded-md bg-cloud-200/5" />
              <div className="mt-3 h-px bg-cloud-200/8" />
              <div className="h-5 rounded-md bg-sky-400/8" />
            </div>

            {/* Main */}
            <div className="flex-1 space-y-3">
              {/* Heading skeleton */}
              <div className="h-4 w-3/4 rounded-md bg-cloud-200/8" />
              <div className="h-4 w-1/2 rounded-md bg-cloud-200/6" />
              {/* Cards */}
              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="h-16 rounded-lg border border-accent-500/10 bg-accent-500/[0.04] p-2">
                  <div className="h-2 w-12 rounded bg-accent-500/20" />
                  <div className="mt-2 h-6 w-full rounded bg-cloud-200/5" />
                </div>
                <div className="h-16 rounded-lg border border-sky-400/10 bg-sky-400/[0.04] p-2">
                  <div className="h-2 w-10 rounded bg-sky-400/20" />
                  <div className="mt-2 h-6 w-full rounded bg-cloud-200/5" />
                </div>
              </div>
              {/* Code line */}
              <div className="mt-3 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[9px] text-cloud-400">1</span>
                  <span className="h-2 w-32 rounded bg-accent-500/15" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[9px] text-cloud-400">2</span>
                  <span className="h-2 w-24 rounded bg-sky-400/15" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[9px] text-cloud-400">3</span>
                  <span className="h-2 w-20 rounded bg-cloud-200/8" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between border-t border-cloud-200/8 px-4 py-2">
          <span className="flex items-center gap-1.5 font-mono text-[10px] text-cloud-400">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500/70" />
            Ready
          </span>
          <span className="font-mono text-[10px] text-cloud-400">React · TS</span>
        </div>
      </div>

      {/* Floating component layer card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="absolute -right-3 top-12 hidden rounded-xl border border-cloud-200/10 bg-ink-800/90 px-3 py-2 shadow-lg sm:block"
      >
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-accent-400" />
          <span className="font-mono text-[10px] text-cloud-300">{'<Component />'}</span>
        </div>
      </motion.div>

      {/* Floating grid indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.5 }}
        className="absolute -left-3 bottom-16 hidden rounded-xl border border-cloud-200/10 bg-ink-800/90 px-3 py-2 shadow-lg sm:block"
      >
        <span className="font-mono text-[10px] text-cloud-300">grid · flexbox</span>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-32 sm:pt-36 lg:pt-40">
      {/* Subtle radial accent */}
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-96 w-96 rounded-full bg-accent-500/[0.04] blur-[100px]" />

      <div className="container-max section-px">
        {/* Technical metadata */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center gap-6"
        >
          {profile.heroMeta.map((meta) => (
            <div key={meta.code} className="flex items-center gap-2">
              <span className="font-mono text-xs font-medium text-accent-400">{meta.code}</span>
              <span className="font-mono text-xs text-cloud-400">{meta.label}</span>
            </div>
          ))}
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: text content */}
          <div className="lg:col-span-7">
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              {profile.available && (
                <span className="inline-flex items-center gap-2 rounded-full border border-green-500/15 bg-green-500/[0.06] px-3 py-1.5 text-xs font-medium text-green-400">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                  </span>
                  Available for Opportunities
                </span>
              )}
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="mt-6 text-display-2xl font-bold text-cloud"
            >
              Building digital
              <br />
              experiences that{' '}
              <span className="text-gradient-accent">actually work.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-7 max-w-xl text-base leading-relaxed text-cloud-200 text-pretty sm:text-lg"
            >
              {profile.subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.36 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <MagneticButton href="/#projects" variant="primary" size="lg" icon={false}>
                View Projects
              </MagneticButton>
              <MagneticButton href={profile.resumeUrl} variant="outline" size="lg" icon={false}>
                <TbDownload size={18} /> Download Resume
              </MagneticButton>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42 }}
              className="mt-7 flex items-center gap-3"
            >
              {[
                { icon: TbBrandGithub, url: profile.socials.github, label: 'GitHub' },
                { icon: TbBrandLinkedin, url: profile.socials.linkedin, label: 'LinkedIn' },
                { icon: TbMail, url: profile.socials.email, label: 'Email' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target={s.url.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-cloud-200/10 bg-ink-800/50 text-cloud-300 transition-all hover:-translate-y-0.5 hover:border-accent-400/30 hover:text-accent-300"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: abstract visual */}
          <div className="lg:col-span-5">
            <HeroVisual />
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 flex items-center justify-center gap-2 text-cloud-400"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em]">Scroll to explore</span>
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <TbArrowDown size={14} className="text-accent-400" />
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
