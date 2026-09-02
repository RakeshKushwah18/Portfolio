import { contact, profile } from '../../data/portfolio';
import Reveal from '../ui/Reveal';
import { MagneticButton } from '../ui/Button';
import { TbBrandGithub, TbBrandLinkedin, TbMail } from '../../utils/iconMap';

export default function Contact() {
  return (
    <section id="contact" className="relative section-py">
      {/* Subtle radial accent */}
      <div className="pointer-events-none absolute left-1/3 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-accent-500/[0.04] blur-[120px]" />

      <div className="container-max section-px">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="section-label">06 — CONTACT</span>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="mt-6 text-display-xl font-bold text-cloud text-balance">
              {contact.heading}
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 text-base leading-relaxed text-cloud-200 text-pretty sm:text-lg">
              {contact.subtitle}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <MagneticButton href={`mailto:${contact.email}`} variant="primary" size="lg" icon={false}>
                Hire Me
              </MagneticButton>
              <MagneticButton href={`mailto:${contact.email}`} variant="outline" size="lg" icon={false}>
                <TbMail size={18} /> Email Me
              </MagneticButton>
              <MagneticButton href={contact.socials.linkedin} variant="ghost" size="lg" icon={false}>
                <TbBrandLinkedin size={18} /> LinkedIn
              </MagneticButton>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-10 flex items-center justify-center gap-3">
              {[
                { icon: TbBrandGithub, url: contact.socials.github, label: 'GitHub' },
                { icon: TbBrandLinkedin, url: contact.socials.linkedin, label: 'LinkedIn' },
                { icon: TbMail, url: `mailto:${contact.email}`, label: 'Email' },
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
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
