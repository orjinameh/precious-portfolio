import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Iwudike Precious — Virtual Assistant & Project Manager",
  description:
    "Portfolio of Iwudike Precious — Virtual Assistant, Project Manager, and Student Quantity Surveyor based in Nigeria. Open to remote opportunities.",
  keywords: [
    "Virtual Assistant",
    "Project Manager",
    "Quantity Surveyor",
    "Nigeria",
    "Remote",
    "Iwudike Precious",
  ],
  openGraph: {
    title: "Iwudike Precious",
    description: "Virtual Assistant · Project Manager · Student Quantity Surveyor",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
