import { journey } from '../../data/portfolio';
import Reveal from '../ui/Reveal';
import { TbArrowDown } from '../../utils/iconMap';

export default function Journey() {
  return (
    <section id="journey" className="relative section-py">
      <div className="container-max section-px">
        <Reveal>
          <span className="section-label">ALWAYS LEARNING</span>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-5 text-display-lg font-bold text-cloud">The progression.</h2>
        </Reveal>

        <div className="mt-12 max-w-md">
          {journey.map((step, i) => {
            const isLast = i === journey.length - 1;
            return (
              <Reveal key={step.stage} delay={i * 0.05}>
                <div className="relative flex items-start gap-4 pb-8">
                  {/* Connector line */}
                  {!isLast && (
                    <div className="absolute left-3 top-8 bottom-0 w-px bg-gradient-to-b from-accent-500/30 to-cloud-200/8" />
                  )}
                  {/* Dot */}
                  <div className="relative z-10 mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent-500/20 bg-ink-900">
                    <span className={`h-2 w-2 rounded-full ${isLast ? 'bg-sky-400' : 'bg-accent-500'}`} />
                  </div>
                  {/* Content */}
                  <div className={isLast ? '' : 'pb-0'}>
                    <h3 className={`text-sm font-bold ${isLast ? 'text-sky-400' : 'text-cloud'}`}>{step.stage}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-cloud-300 text-pretty">{step.desc}</p>
                    {isLast && (
                      <span className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-sky-400/15 bg-sky-400/[0.06] px-2.5 py-0.5 text-xs font-medium text-sky-400">
                        Future Focus
                      </span>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
