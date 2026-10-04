export const profile = {
  name: "Nicholas Obonyo Abala",
  shortName: "Nicholas Obonyo",
  title: "Full-Stack Developer",
  location: "Nairobi, Kenya",
  phone: "+254 769 611 795",
  phoneHref: "tel:+254769611795",
  email: "nickobonyo8@gmail.com",
  emailHref: "mailto:nickobonyo8@gmail.com",
  github: "github.com/duffymelancholic",
  githubHref: "https://github.com/duffymelancholic",
  resumeHref: "/nicholas-obonyo-abala-cv.pdf",
  summary:
    "Full-stack developer on retainer at ChainForge. I ship React, Next.js, and Node.js products through Git and pull requests. I use Claude in Cursor to implement and debug faster, then I review the diff, run the product, and own what ships. I have also put GPT-4 and Hugging Face inside a live product, called from the server.",
};

export const experience = [
  {
    role: "Full-Stack Developer (Retainer)",
    org: "ChainForge",
    period: "Jul 2026 — Present",
    points: [
      "Own features on live client products: task branches, conventional commits, and readable pull requests.",
      "Use Claude in Cursor to move from a ticket to a working change, then verify it in the running app before review.",
      "Building Centurion Hotel, a Next.js and TypeScript booking platform with admin modules and payment foundations.",
    ],
  },
];

export const projects = [
  {
    id: "eco-hub",
    role: "Full-stack · product AI",
    name: "Eco-Hub",
    subtitle: "Peer-to-peer energy marketplace",
    href: "https://eco-hub-trvd.onrender.com/",
    tags: ["OpenAI GPT-4", "Hugging Face", "Node.js", "React"],
    points: [
      "Connected GPT-4 and Hugging Face behind a Node API so unstructured input became localized solar plans and marketplace pricing.",
      "Shipped with a student team to production on Render. The model calls stay on the server.",
    ],
  },
  {
    id: "centurion",
    role: "Full-stack · ChainForge",
    name: "Centurion Hotel",
    subtitle: "Property booking and admin platform",
    href: null as string | null,
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
    points: [
      "Guest site and admin for rooms, dining, events, offers, gallery, and contact.",
      "Booking path from dates to confirmation, with availability scaffolding and payment reconciliation foundations.",
    ],
  },
  {
    id: "streamlist",
    role: "Full-Stack Software Engineer",
    name: "StreamList",
    subtitle: "Production-Grade Media Platform",
    href: null as string | null,
    tags: ["Next.js", "PostgreSQL", "Prisma", "JWT", "TMDB"],
    points: [
      "Decoupled Next.js app and Express API, with PostgreSQL, Prisma migrations, and JWT auth.",
      "TMDB credentials stay on the server. Deployed on Vercel and Render.",
    ],
  },
  {
    id: "chess47",
    role: "Full-stack · ChainForge",
    name: "Chess47",
    subtitle: "Kenya chess community platform",
    href: null as string | null,
    tags: ["React", "Next.js", "TypeScript"],
    points: [
      "Built the county map, rankings, tournaments, and editorial flows end to end, then took them through review to a shippable product.",
    ],
  },
  {
    id: "apm",
    role: "Product UI",
    name: "Associate Product Manager app",
    subtitle: "Authenticated management interface",
    href: null as string | null,
    tags: ["Auth", "UI/UX", "Data validation"],
    points: [
      "Built and deployed an end-to-end management system with secure authentication, data validation, and clean interface states.",
      "Designed modular components for seamless data fetching and refined UI/UX to improve workflow and navigation logic.",
      "Managed version control and conducted root cause analysis to eliminate critical processing bugs during development.",
    ],
  },
];

export const skills = {
  core: ["React.js", "Next.js", "TypeScript", "Node.js & Express", "Python", "REST APIs"],
  ai: ["Claude in Cursor", "OpenAI API", "Hugging Face"],
  infra: ["PostgreSQL / Prisma", "MongoDB", "Git / GitHub", "Vercel & Render", "Linux"],
  design: ["Tailwind CSS", "Pull requests", "Readable commits"],
};

export const education = [
  {
    title: "Diploma in Business Information Technology (DBIT)",
    school: "KCA University",
    period: "2026 — Present",
  },
  {
    title: "Full-Stack Software Engineering",
    school: "Moringa School",
    period: "Feb 2025 — Nov 2025",
  },
];

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Tools", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
