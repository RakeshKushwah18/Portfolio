import { education } from '../../data/portfolio';
import Reveal from '../ui/Reveal';
import { TbBook2 } from '../../utils/iconMap';

export default function Education() {
  return (
    <section id="education" className="relative section-py">
      <div className="container-max section-px">
        <Reveal>
          <span className="section-label">{education.label}</span>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-5 text-display-lg font-bold text-cloud">{education.heading}</h2>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-10 max-w-2xl">
            <div className="surface surface-hover rounded-3xl p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent-500/15 bg-accent-500/[0.06] text-accent-400">
                  <TbBook2 size={24} />
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-cloud">{education.degree}</h3>
                  <p className="mt-1 text-sm text-accent-400">{education.institution}</p>
                  <p className="mt-3 text-sm leading-relaxed text-cloud-200 text-pretty">{education.description}</p>
                  <span className="mt-4 inline-flex items-center rounded-lg border border-cloud-200/10 bg-cloud-200/[0.04] px-2.5 py-1 text-xs font-medium text-cloud-200">
                    {education.duration}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
