import { about } from '../../data/portfolio';
import Reveal, { RevealGroup, RevealItem } from '../ui/Reveal';

export default function About() {
  return (
    <section id="about" className="relative section-py">
      <div className="container-max section-px">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: label + heading */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="section-label">{about.label}</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-5 text-display-lg font-bold text-cloud text-balance">
                {about.heading}
              </h2>
            </Reveal>
          </div>

          {/* Right: content */}
          <div className="lg:col-span-7">
            <RevealGroup stagger={0.12}>
              {about.paragraphs.map((p, i) => (
                <RevealItem key={i}>
                  <p className="mb-5 text-base leading-relaxed text-cloud-200 text-pretty sm:text-lg">{p}</p>
                </RevealItem>
              ))}
            </RevealGroup>

            {/* Identity stats */}
            <Reveal delay={0.2}>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {about.stats.map((stat) => (
                  <div key={stat.label} className="surface surface-hover rounded-2xl p-4">
                    <p className="font-mono text-xs uppercase tracking-wider text-cloud-400">{stat.label}</p>
                    <p className="mt-1.5 text-sm font-bold text-cloud">{stat.value}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
