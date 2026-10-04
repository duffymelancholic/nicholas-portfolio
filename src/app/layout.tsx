import type { Metadata } from "next";
import { Instrument_Serif, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono-body",
  subsets: ["latin"],
  weight: ["400", "700"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${instrumentSerif.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg text-ink">{children}</body>
    </html>
  );
}
