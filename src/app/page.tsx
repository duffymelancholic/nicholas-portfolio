import { education, experience, profile, projects, skills } from "@/lib/content";
import { SiteHeader } from "@/components/SiteHeader";

const skillLine = [...skills.core, ...skills.ai, ...skills.infra, ...skills.design].join(" · ");

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="mx-auto max-w-3xl px-5 pb-20 pt-12 sm:pt-16">
        <p className="text-sm text-muted">
          {profile.location} · Open to full-time roles
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-2 text-lg text-ink-soft">{profile.title}</p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{profile.summary}</p>
        <p className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <a className="text-link" href={profile.githubHref} target="_blank" rel="noopener noreferrer">
            {profile.github}
          </a>
          <a className="text-link" href={profile.emailHref}>
            {profile.email}
          </a>
          <a className="text-link" href={profile.phoneHref}>
            {profile.phone}
          </a>
          <a className="text-link" href={profile.resumeHref}>
            Download CV
          </a>
        </p>

        <section id="now" className="mt-16 border-t border-line pt-10">
          <h2 className="font-display text-2xl font-semibold tracking-tight">Currently</h2>
          {experience.map((job) => (
            <article key={job.role} className="mt-6">
              <h3 className="text-lg font-semibold">{job.role}</h3>
              <p className="mt-1 text-sm text-muted">
                {job.org} · {job.period}
              </p>
              <ul className="mt-4 space-y-2 text-ink-soft">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section id="work" className="mt-16 border-t border-line pt-10">
          <h2 className="font-display text-2xl font-semibold tracking-tight">Selected work</h2>
          <div className="mt-8 space-y-10">
            {projects.map((project) => (
              <article key={project.id}>
                <h3 className="font-display text-xl font-semibold tracking-tight">{project.name}</h3>
                <p className="mt-1 text-sm text-muted">
                  {project.subtitle} · {project.role}
                </p>
                <ul className="mt-3 space-y-2 text-ink-soft">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <p className="mt-3 text-sm text-muted">{project.tags.join(" · ")}</p>
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link mt-2 inline-block text-sm"
                  >
                    Live site
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="mt-16 border-t border-line pt-10">
          <h2 className="font-display text-2xl font-semibold tracking-tight">Tools</h2>
          <p className="mt-4 leading-relaxed text-ink-soft">{skillLine}</p>
        </section>

        <section id="education" className="mt-16 border-t border-line pt-10">
          <h2 className="font-display text-2xl font-semibold tracking-tight">Education</h2>
          <div className="mt-6 space-y-5">
            {education.map((item) => (
              <article key={item.title}>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted">
                  {item.school} · {item.period}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-16 border-t border-line pt-10">
          <h2 className="font-display text-2xl font-semibold tracking-tight">Contact</h2>
          <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
            {profile.location}. I am looking for a full-time full-stack role, on site or remote.
          </p>
          <p className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <a className="text-link" href={profile.emailHref}>
              {profile.email}
            </a>
            <a className="text-link" href={profile.phoneHref}>
              {profile.phone}
            </a>
          </p>
        </section>
      </main>
      <footer className="border-t border-line">
        <p className="mx-auto max-w-3xl px-5 py-6 text-sm text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </footer>
    </>
  );
}
