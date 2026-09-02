import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, profile } from '../../data/portfolio';
import { cn } from '../../utils/cn';
import { TbBrandGithub, TbBrandLinkedin, TbMail, TbMenu2, TbClose } from '../../utils/iconMap';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Track active section
  useEffect(() => {
    if (location.pathname !== '/') return;
    const sections = ['home', 'projects', 'experience', 'skills', 'education', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [location.pathname]);

  const handleNav = (path) => {
    setOpen(false);
    if (path.includes('#')) {
      const [, hash] = path.split('#');
      if (location.pathname !== '/') {
        window.location.href = path;
        return;
      }
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isActive = (path) => {
    const hash = path.split('#')[1];
    return hash === activeSection;
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled ? 'py-2.5' : 'py-4'
      )}
    >
      <nav className="container-max section-px">
        <div className={cn(
          'flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300',
          scrolled
            ? 'border border-cloud-200/8 bg-ink-900/80 backdrop-blur-xl shadow-card'
            : 'border border-transparent'
        )}>
          {/* Logo / monogram */}
          <Link to="/" className="flex items-center gap-2.5" aria-label="Home">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-accent-500/20 bg-accent-500/[0.08] font-mono text-sm font-bold text-accent-300">
              {profile.initials}
            </span>
            <span className="font-display text-base font-bold text-cloud hidden sm:block">
              {profile.firstName}<span className="text-accent-400">.</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const hash = link.path.split('#')[1];
              return (
                <li key={link.path}>
                  <button
                    onClick={() => handleNav(link.path)}
                    className={cn(
                      'group relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors',
                      isActive(link.path) ? 'text-cloud' : 'text-cloud-300 hover:text-cloud'
                    )}
                  >
                    {link.label}
                    <span
                      className={cn(
                        'absolute bottom-1 left-3.5 h-px bg-accent-400 transition-all duration-300',
                        isActive(link.path)
                          ? 'w-[calc(100%-1.75rem)]'
                          : 'w-0 group-hover:w-[calc(100%-1.75rem)]'
                      )}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Desktop actions */}
          <div className="hidden items-center gap-1.5 md:flex">
            <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex h-9 w-9 items-center justify-center rounded-lg text-cloud-300 transition-colors hover:text-cloud">
              <TbBrandGithub size={18} />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-lg text-cloud-300 transition-colors hover:text-cloud">
              <TbBrandLinkedin size={18} />
            </a>
            <a href={`mailto:${profile.socials.email}`} aria-label="Email" className="flex h-9 w-9 items-center justify-center rounded-lg text-cloud-300 transition-colors hover:text-cloud">
              <TbMail size={18} />
            </a>
            <button
              onClick={() => handleNav('/#contact')}
              className="ml-1.5 rounded-xl bg-accent-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_2px_12px_-2px_rgba(139,124,255,0.4)] transition-all hover:bg-accent-400 hover:shadow-[0_4px_18px_-2px_rgba(139,124,255,0.5)] hover:-translate-y-0.5"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-cloud md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <TbClose size={22} /> : <TbMenu2 size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="container-max section-px md:hidden"
          >
            <div className="mt-2 rounded-2xl border border-cloud-200/8 bg-ink-900/95 p-4 backdrop-blur-xl">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <button
                      onClick={() => handleNav(link.path)}
                      className="w-full rounded-xl px-4 py-3 text-left text-base font-medium text-cloud-200 transition-colors hover:bg-accent-500/[0.06] hover:text-white"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex items-center gap-2 border-t border-cloud-200/8 pt-3">
                <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex h-10 w-10 items-center justify-center rounded-xl border border-cloud-200/10 text-cloud-300">
                  <TbBrandGithub size={18} />
                </a>
                <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-xl border border-cloud-200/10 text-cloud-300">
                  <TbBrandLinkedin size={18} />
                </a>
                <a href={profile.socials.email} aria-label="Email" className="flex h-10 w-10 items-center justify-center rounded-xl border border-cloud-200/10 text-cloud-300">
                  <TbMail size={18} />
                </a>
                <button
                  onClick={() => handleNav('/#contact')}
                  className="ml-auto rounded-xl bg-accent-500 px-4 py-2.5 text-sm font-semibold text-white"
                >
                  Hire Me
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
