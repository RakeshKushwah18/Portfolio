import { Link } from 'react-router-dom';
import { projects } from '../../data/portfolio';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import { TbBrandGithub, TbExternalLink, TbArrowRight } from '../../utils/iconMap';

function ProjectCard({ project, className }) {
  const isLarge = project.size === 'large';
  return (
    <Reveal className={className}>
      <article className="group surface surface-hover flex h-full flex-col overflow-hidden rounded-3xl">
        {/* Image */}
        <div className={`relative overflow-hidden ${isLarge ? 'aspect-[16/9]' : 'aspect-[16/10]'}`}>
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent" />
          <span className="absolute left-4 top-4 rounded-full border border-accent-500/15 bg-ink-900/80 px-3 py-1.5 text-xs font-medium text-cloud-200 backdrop-blur">
            {project.category}
          </span>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-6">
          <h3 className={`font-bold text-cloud ${isLarge ? 'text-xl sm:text-2xl' : 'text-lg'}`}>{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-cloud-200 text-pretty">{project.tagline}</p>

          {/* Tech */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.slice(0, isLarge ? 5 : 3).map((t) => (
              <span key={t} className="badge">{t}</span>
            ))}
          </div>

          {/* Links */}
          <div className="mt-auto flex items-center gap-3 pt-5">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl bg-accent-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_2px_12px_-2px_rgba(139,124,255,0.4)] transition-all hover:bg-accent-400"
              >
                Live Demo <TbExternalLink size={14} />
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-cloud-200/12 px-4 py-2 text-sm font-medium text-cloud-200 transition-all hover:border-accent-400/30 hover:text-white"
            >
              <TbBrandGithub size={16} /> Code
            </a>
            {project.caseStudy && (
              <Link
                to={`/projects/${project.slug}`}
                className="ml-auto inline-flex items-center gap-1 text-sm font-semibold text-accent-400 transition-colors hover:text-accent-300"
              >
                Details <TbArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  const large = projects.find((p) => p.size === 'large');
  const medium = projects.filter((p) => p.size === 'medium');
  const small = projects.filter((p) => p.size === 'small');

  return (
    <section id="projects" className="relative section-py">
      <div className="container-max section-px">
        <SectionHeading
          label="03 — SELECTED WORK"
          title="Things I've actually built."
          subtitle="Each project solves a real problem. Click through for full case studies."
        />

        {/* Editorial bento grid */}
        <div className="mt-14 grid auto-rows-fr gap-5 lg:grid-cols-3">
          {/* Large — spans 2 columns */}
          {large && (
            <ProjectCard project={large} className="lg:col-span-2" />
          )}

          {/* Medium cards */}
          {medium.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}

          {/* Small cards */}
          {small.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
