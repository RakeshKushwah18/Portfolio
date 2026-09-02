import Reveal from './Reveal';
import { cn } from '../../utils/cn';

export default function SectionHeading({ label, title, subtitle, align = 'left', className }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={cn('max-w-2xl', alignment, className)}>
      {label && (
        <Reveal>
          <span className="section-label">{label}</span>
        </Reveal>
      )}
      <Reveal delay={0.06}>
        <h2 className="mt-5 text-display-lg font-bold text-cloud text-balance">{title}</h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.12}>
          <p className="mt-5 text-base leading-relaxed text-cloud-200 text-pretty sm:text-lg">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
