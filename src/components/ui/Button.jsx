import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';
import { useMagnetic } from '../../hooks/useMagnetic';
import { TbArrowRight } from '../../utils/iconMap';

const VARIANTS = {
  primary:
    'bg-accent-500 text-white shadow-[0_4px_20px_-4px_rgba(139,124,255,0.5)] hover:bg-accent-400 hover:shadow-[0_6px_28px_-4px_rgba(139,124,255,0.6)] hover:-translate-y-0.5',
  cyan:
    'bg-sky-400 text-ink-950 font-bold shadow-[0_4px_20px_-4px_rgba(56,189,248,0.4)] hover:bg-sky-500 hover:-translate-y-0.5',
  ghost:
    'surface text-cloud hover:border-accent-500/30 hover:text-white hover:-translate-y-0.5',
  outline:
    'border border-cloud-200/15 text-cloud hover:border-accent-400/50 hover:bg-accent-500/[0.06] hover:text-white hover:-translate-y-0.5',
  subtle:
    'text-cloud-300 hover:text-white',
};

const SIZES = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
};

export default function Button({
  children, variant = 'primary', size = 'md', to, href, icon = true,
  className, onClick, type = 'button', ariaLabel, ...rest
}) {
  const classes = cn(
    'group relative inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 active:scale-[0.97]',
    VARIANTS[variant], SIZES[size], className
  );

  const inner = (
    <>
      {children}
      {icon && <TbArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />}
    </>
  );

  if (to) {
    return <Link to={to} className={classes} aria-label={ariaLabel} {...rest}>{inner}</Link>;
  }
  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={classes} aria-label={ariaLabel} {...rest}>{inner}</a>;
  }
  return <button type={type} onClick={onClick} className={classes} aria-label={ariaLabel} {...rest}>{inner}</button>;
}

export function MagneticButton({ strength = 0.25, children, ...props }) {
  const { ref, onMouseMove, onMouseLeave } = useMagnetic(strength);
  return (
    <div ref={ref} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} className="inline-block transition-transform duration-300 ease-out will-change-transform">
      <Button {...props}>{children}</Button>
    </div>
  );
}
