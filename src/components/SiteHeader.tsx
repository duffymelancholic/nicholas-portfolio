import { nav, profile } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/55 backdrop-blur-xl">
      <div className="mx-auto flex w-[min(1120px,calc(100%-2.5rem))] items-center justify-between gap-4 py-3.5">
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-md border border-white/15 bg-white/[0.03] font-mono text-[0.7rem] font-bold tracking-[0.14em] text-champagne">
            {profile.mark}
          </span>
          <span className="hidden font-medium tracking-tight sm:block">{profile.shortName}</span>
        </a>
        <nav className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="nav-link hidden sm:inline">
              {item.label}
            </a>
          ))}
          <a href={profile.githubHref} className="nav-link hidden md:inline" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="#contact" className="btn-lime">
            Hire me
          </a>
        </nav>
      </div>
    </header>
  );
}
