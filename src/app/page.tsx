import Image from "next/image";
import { education, experience, profile, projects, skills } from "@/lib/content";
import { SiteHeader } from "@/components/SiteHeader";

const skillGroups = [
  { label: "Core", items: skills.core },
  { label: "AI", items: skills.ai },
  { label: "Infra", items: skills.infra },
  { label: "Craft", items: skills.design },
] as const;

export default function Home() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main id="top">
        <section className="hero-stage" aria-label="Introduction">
          <div className="hero-media" aria-hidden="true">
            <Image
              src="/media/hero-nairobi.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="hero-veil" />
            <div className="hero-halftone" />
          </div>

          <div className="hero-copy">
            <p className="section-kicker reveal">
              {profile.location} · Open to full-time roles
            </p>
            <h1 className="reveal reveal-delay-1 mt-5 max-w-5xl font-display text-[clamp(3.4rem,11vw,7.5rem)] leading-[0.9] tracking-[-0.03em]">
              <span className="shimmer-text">{profile.name}</span>
            </h1>
            <p className="hero-line reveal reveal-delay-2 mt-6 max-w-xl font-display text-2xl italic leading-snug text-ink-soft sm:text-3xl">
              {profile.heroLine}
            </p>
            <p className="hero-support reveal reveal-delay-3 mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {profile.heroSupport}
            </p>
            <div className="hero-actions reveal reveal-delay-4 mt-8 flex flex-wrap gap-3">
              <a className="btn-lime" href="#work">
                View selected work
              </a>
              <a className="btn-ghost" href={profile.resumeHref}>
                Download CV
              </a>
            </div>
          </div>
        </section>

        <section id="now" className="section-frame">
          <p className="section-kicker">Currently</p>
          <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
            On retainer at <span className="champagne-text">ChainForge</span>
          </h2>
          {experience.map((job) => (
            <article key={job.role} className="mt-8 max-w-3xl">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="text-xl font-semibold tracking-tight">{job.role}</h3>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                  {job.period}
                </p>
              </div>
              <p className="mt-2 text-ink-soft">{job.org}</p>
              <ul className="mt-5 space-y-3 text-ink-soft">
                {job.points.map((point) => (
                  <li key={point} className="relative pl-4 before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-lime">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section id="work" className="section-frame !pt-2">
          <p className="section-kicker">Selected work</p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl tracking-tight sm:text-5xl">
            Frames from recent releases
          </h2>
          <p className="mt-4 max-w-2xl text-ink-soft">
            Product surfaces shipped end to end — from API to interface — with review discipline baked in.
          </p>

          <div className="mt-10">
            {projects.map((project, index) => (
              <article key={project.id} className={`work-row tone-${project.tone}`}>
                <div className="work-still-wrap">
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    sizes="(max-width: 860px) 100vw, 48vw"
                    className="work-still object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                      {String(index + 1).padStart(2, "0")} / {project.role}
                    </p>
                    <span className="work-arrow text-lg" aria-hidden="true">
                      →
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-champagne">{project.subtitle}</p>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-soft">
                    {project.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <p className="mt-4 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted">
                    {project.tags.join(" · ")}
                  </p>
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-lime"
                    >
                      Open live site <span aria-hidden="true">↗</span>
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section-frame !pt-2">
          <p className="section-kicker">Tools</p>
          <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
            The kit behind the cut
          </h2>
          <div className="skill-rail mt-8">
            {skillGroups.map((group) => (
              <div key={group.label} className="skill-group">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-champagne">
                  {group.label}
                </p>
                <p className="text-lg leading-relaxed text-ink-soft">{group.items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="section-frame !pt-2">
          <p className="section-kicker">Education</p>
          <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
            Training
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {education.map((item) => (
              <article key={item.title} className="border-t border-line pt-5">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                  {item.period}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2 text-ink-soft">{item.school}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section-frame !pt-2 !pb-24">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(90%_80%_at_10%_0%,rgba(209,254,23,0.16),transparent_45%),radial-gradient(70%_70%_at_90%_100%,rgba(234,217,163,0.14),transparent_50%),#0b0b0b] px-6 py-12 sm:px-10 sm:py-16">
            <p className="section-kicker">Contact</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl tracking-tight sm:text-6xl">
              Let’s ship the next frame together.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
              {profile.location}. Looking for a full-time full-stack role — on site or remote.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="btn-lime" href={profile.emailHref}>
                {profile.email}
              </a>
              <a className="btn-ghost" href={profile.phoneHref}>
                {profile.phone}
              </a>
              <a
                className="btn-ghost"
                href={profile.githubHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex w-[min(1120px,calc(100%-2.5rem))] flex-wrap items-center justify-between gap-3 py-6 text-sm text-muted">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-champagne-deep">
            Directed like a studio cut
          </p>
        </div>
      </footer>
    </div>
  );
}
