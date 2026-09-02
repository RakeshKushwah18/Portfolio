import { skillGroups } from '../../data/portfolio';
import SectionHeading from '../ui/SectionHeading';
import { RevealGroup, RevealItem } from '../ui/Reveal';
import { getIcon } from '../../utils/getlcon';

export default function Skills() {
  return (
    <section id="skills" className="relative section-py">
      <div className="container-max section-px">
        <SectionHeading
          label="02 — SKILLS"
          title="Tools I use to turn ideas into interfaces."
          subtitle="A focused toolkit for building production web applications — grouped by how I use them."
        />

        <div className="mt-14 space-y-10">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <RevealItem>
                <h3 className="font-mono text-sm font-medium uppercase tracking-[0.15em] text-accent-300">
                  {group.category}
                </h3>
              </RevealItem>
              <RevealGroup className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6" stagger={0.04}>
                {group.items.map((skill) => {
                  const Icon = getIcon(skill.icon);
                  return (
                    <RevealItem key={skill.name}>
                      <div className="group surface surface-hover flex items-center gap-3 rounded-2xl p-4">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cloud-200/8 bg-ink-800/50 text-cloud-200 transition-all duration-300 group-hover:scale-110 group-hover:border-accent-400/30 group-hover:text-accent-300">
                          <Icon size={22} />
                        </span>
                        <span className="text-sm font-medium text-cloud-200">{skill.name}</span>
                      </div>
                    </RevealItem>
                  );
                })}
              </RevealGroup>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
