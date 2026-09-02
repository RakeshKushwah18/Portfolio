import { experience } from '../../data/portfolio';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

export default function Experience() {
  return (
    <section id="experience" className="relative section-py">
      <div className="container-max section-px">
        <SectionHeading
          label="04 — EXPERIENCE"
          title="Where I've applied my skills."
          subtitle="Real project work and development experience — building applications that ship."
        />

        {/* Timeline */}
        <div className="mt-14 relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-accent-500/30 via-cloud-200/10 to-transparent" />

          <div className="space-y-8">
            {experience.map((job, i) => (
              <Reveal key={`${job.role}-${i}`} delay={i * 0.08}>
                <div className="relative pl-16">
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-7 -translate-x-1/2">
                    <span className={`flex h-3 w-3 rounded-full ring-4 ring-ink-950 ${job.current ? 'bg-green-500' : 'bg-accent-500'}`} />
                  </div>

                  {/* Card */}
                  <div className="surface surface-hover rounded-3xl p-6 sm:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="font-bold text-cloud">{job.role}</h3>
                        <p className="mt-0.5 text-sm text-accent-400">{job.org}</p>
                      </div>
                      <span className="rounded-lg border border-cloud-200/10 bg-cloud-200/[0.04] px-2.5 py-1 text-xs font-medium text-cloud-200">
                        {job.duration}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-cloud-200 text-pretty">{job.description}</p>

                    <h4 className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-cloud-400">Key Responsibilities</h4>
                    <ul className="mt-3 space-y-2">
                      {job.responsibilities.map((r, ri) => (
                        <li key={ri} className="flex items-start gap-2.5 text-sm leading-relaxed text-cloud-200">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                          {r}
                        </li>
                      ))}
                    </ul>

                    {job.current && (
                      <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                        Current
                      </span>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
