import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/portfolio';
import Reveal from '../components/ui/Reveal';
import NotFound from './NotFound';
import {
  TbBrandGithub, TbExternalLink, TbCircleCheck, TbArrowRight, TbArrowLeft, TbChevronRight,
} from '../utils/iconMap';

const CASE_STUDY_SECTIONS = [
  { key: 'problem', label: 'Problem' },
  { key: 'solution', label: 'Solution' },
  { key: 'features', label: 'Key Features', type: 'list' },
  { key: 'challenges', label: 'Challenges' },
  { key: 'learned', label: 'What I Learned' },
];

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <NotFound />;

  return (
    <article className="pt-32 sm:pt-36">
      {/* Breadcrumb + header */}
      <div className="container-max section-px">
        <Reveal>
          <nav className="flex items-center gap-2 text-sm text-cloud-400">
            <Link to="/" className="hover:text-cloud-200">Home</Link>
            <TbChevronRight size={14} />
            <Link to="/#projects" className="hover:text-cloud-200">Projects</Link>
            <TbChevronRight size={14} />
            <span className="text-accent-400">{project.title}</span>
          </nav>
        </Reveal>

        <Reveal delay={0.06}>
          <span className="eyebrow mt-6">{project.category}</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-5 text-display-lg font-extrabold text-cloud">{project.title}</h1>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-cloud-200 text-pretty">{project.description}</p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-accent-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_2px_12px_-2px_rgba(139,124,255,0.4)] transition-all hover:bg-accent-400 hover:-translate-y-0.5">
                <TbExternalLink size={18} /> Live Demo
              </a>
            )}
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-cloud-200/12 px-5 py-2.5 text-sm font-medium text-cloud-200 transition-all hover:border-accent-400/30 hover:text-white hover:-translate-y-0.5">
              <TbBrandGithub size={18} /> View Code
            </a>
          </div>
        </Reveal>
      </div>

      {/* Hero image */}
      <div className="container-max section-px mt-12">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-cloud-200/10 shadow-elevated">
            <img src={project.image} alt={project.title} className="aspect-[16/9] w-full object-cover" />
          </div>
        </Reveal>
      </div>

      {/* Case study sections */}
      <div className="container-max section-px mt-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Main content */}
          <div className="lg:col-span-8">
            {CASE_STUDY_SECTIONS.filter((s) => project[s.key]).map((section, i) => (
              <Reveal key={section.key} delay={i * 0.04}>
                <div className={i > 0 ? 'mt-10' : ''}>
                  <h2 className="text-xl font-bold text-cloud">{section.label}</h2>
                  {section.type === 'list' ? (
                    <ul className="mt-4 space-y-3">
                      {project[section.key].map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm leading-relaxed text-cloud-200">
                          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-accent-500/15 bg-accent-500/[0.06] text-accent-400">
                            <TbCircleCheck size={16} />
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-3 text-base leading-relaxed text-cloud-200 text-pretty">{project[section.key]}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <Reveal delay={0.1}>
              <div className="surface sticky top-24 p-6">
                <h3 className="font-bold text-cloud">Tech Stack</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="badge">{t}</span>
                  ))}
                </div>

                <h3 className="mt-6 font-bold text-cloud">Project Links</h3>
                <div className="mt-4 flex flex-col gap-2">
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-accent-500 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_2px_12px_-2px_rgba(139,124,255,0.4)] transition-all hover:bg-accent-400 hover:-translate-y-0.5">
                      <TbExternalLink size={16} /> Live Demo
                    </a>
                  )}
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-cloud-200/12 px-4 py-2.5 text-sm font-medium text-cloud-200 transition-all hover:border-accent-400/30 hover:text-white">
                    <TbBrandGithub size={16} /> View Code
                  </a>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </div>

      {/* Nav */}
      <div className="container-max section-px mt-16 pb-20">
        <div className="flex items-center justify-between border-t border-cloud-200/8 pt-8">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-cloud-300 transition-colors hover:text-white">
            <TbArrowLeft size={16} /> All projects
          </Link>
          <Link to="/#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-accent-400 transition-colors hover:text-accent-300">
            Start a project <TbArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
