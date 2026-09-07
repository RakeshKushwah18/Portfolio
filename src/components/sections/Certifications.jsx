import { certifications } from '../../data/portfolio';
import SectionHeading from '../ui/SectionHeading';
import { HiOutlineAcademicCap, HiOutlineExternalLink, HiOutlineCheckCircle } from 'react-icons/hi';

export default function Certifications() {
  return (
    <section id="certifications" className="relative section-py">
          <div className="container-max section-px">
            <SectionHeading
              label="06 — CERTIFICATIONS"
              title="Certifications & Training."
              subtitle="Validated skills and structured learning pathways across modern web stack."
            />
        {/* Certifications Grid */}
        <div className="   mt-14 relative gap-6 grid md:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="surface surface-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between border backdrop-blur-md transition-all duration-300  hover:bg-surface-2/70 hover:shadow-[0_8px_30px_rgb(0,0,0,0.3)]"
            >
              <div>
                {/* Header Row: Icon & Status Badge */}
                <div className=" flex items-center justify-between gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-accent-400 group-hover:border-accent-500/40 group-hover:bg-accent-500/10">
                    <HiOutlineAcademicCap size={22} />
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs font-medium text-cloud-300">
                      {cert.date}
                    </span>
                    <span className="flex items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400">
                      <HiOutlineCheckCircle size={14} />
                      {cert.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="mt-5">
                  <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-accent-400">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-accent-400/90">
                    {cert.issuer}
                  </p>
                </div>

                {/* Skills Chips */}
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {cert.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="rounded-md border border-white/5 bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-cloud-300 transition-colors group-hover:border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action / Link */}
              <div className="mt-6 border-t border-white/5 pt-4">
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-cloud-300 transition-colors hover:text-white"
                >
                  <span>Verify Credential</span>
                  <HiOutlineExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
