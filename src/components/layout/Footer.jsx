import { Link } from 'react-router-dom';
import { profile, footerLinks } from '../../data/portfolio';
import { TbBrandGithub, TbBrandLinkedin, TbMail, TbArrowUp } from '../../utils/iconMap';

const SOCIAL_ICONS = { TbBrandGithub, TbBrandLinkedin, TbMail };

export default function Footer() {
  const year = new Date().getFullYear();
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative z-10 border-t border-cloud-200/8 bg-ink-950">
      <div className="container-max section-px py-12">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          {/* Left: monogram + name */}
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-accent-500/20 bg-accent-500/[0.08] font-mono text-sm font-bold text-accent-300">
              {profile.initials}
            </span>
            <span className="font-display text-base font-bold text-cloud">
              {profile.name}
            </span>
          </Link>

          {/* Center: built with */}
          <p className="order-3 text-center text-xs text-cloud-400 sm:order-2">
            Built with React + Tailwind CSS
          </p>

          {/* Right: socials */}
          <div className="order-2 flex items-center gap-2 sm:order-3">
            {footerLinks.social.map((s) => {
              const Icon = SOCIAL_ICONS[s.icon] ?? TbBrandGithub;
              return (
                <a
                  key={s.label}
                  href={s.url}
                  target={s.url.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-cloud-200/10 text-cloud-300 transition-all hover:-translate-y-0.5 hover:border-accent-400/30 hover:text-accent-300"
                >
                  <Icon size={18} />
                </a>
              );
            })}
            <button
              onClick={scrollTop}
              className="ml-1 flex h-9 w-9 items-center justify-center rounded-lg border border-cloud-200/10 text-cloud-300 transition-all hover:-translate-y-0.5 hover:border-accent-400/30 hover:text-accent-300"
              aria-label="Back to top"
            >
              <TbArrowUp size={16} />
            </button>
          </div>
        </div>

        <div className="mt-8 border-t border-cloud-200/5 pt-6 text-center">
          <p className="text-xs text-cloud-400">
            © {year} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
