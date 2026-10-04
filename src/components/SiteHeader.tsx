import { nav, profile } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/55 backdrop-blur-xl">
      <div className="mx-auto flex w-[min(1120px,calc(100%-2.5rem))] items-center justify-between gap-3 py-3.5">
        <a href="#top" className="group flex min-w-0 items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-white/15 bg-white/[0.03] font-mono text-[0.7rem] font-bold tracking-[0.14em] text-champagne">
            {profile.mark}
          </span>
          <span className="truncate font-medium tracking-tight">{profile.shortName}</span>
        </a>
        <nav className="flex shrink-0 items-center gap-x-5">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="nav-link hidden lg:inline">
              {item.label}
            </a>
          ))}
          <a
            href={profile.githubHref}
            className="nav-link hidden lg:inline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="#contact" className="btn-lime !min-h-9 !px-3.5 !py-2 text-sm">
            Hire me
          </a>
        </nav>
      </div>
    </header>
  );
}
