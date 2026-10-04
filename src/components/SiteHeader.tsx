import { nav, profile } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-bg/95">
      <div className="mx-auto flex max-w-3xl flex-wrap items-baseline justify-between gap-x-6 gap-y-2 px-5 py-4">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight">
          {profile.shortName}
        </a>
        <nav className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-ink-soft">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-link">
              {item.label}
            </a>
          ))}
          <a href={profile.githubHref} className="text-link" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
