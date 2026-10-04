import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-sans-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Nicholas Obonyo Abala | Full-Stack Developer",
  description:
    "Nairobi full-stack developer. React, Next.js, and Node.js products, plus a live app that calls GPT-4 from the server.",
  openGraph: {
    title: "Nicholas Obonyo Abala | Full-Stack Developer",
    description:
      "Nairobi full-stack developer. React, Next.js, Node.js, and product AI on Eco-Hub.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sourceSerif.variable} ${sourceSans.variable} h-full antialiased`}>
      <body className="min-h-full bg-bg text-ink">{children}</body>
    </html>
  );
}
