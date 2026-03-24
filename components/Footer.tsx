export default function Footer() {
  return (
    <footer className="py-10 border-t border-violet/10 bg-void">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p
          className="text-grape/50 text-sm"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          © {new Date().getFullYear()} Iwudike Precious. All rights reserved.
        </p>
        <p
          className="text-grape/40 text-xs tracking-widest uppercase"
          style={{ fontFamily: "var(--font-space-mono)" }}
        >
          Virtual Assistant · Project Manager · Nigeria
        </p>
        <div className="flex items-center gap-5">
          <a
            href="mailto:iwudikeprecious@gmail.com"
            className="text-grape/50 hover:text-lavender text-sm transition-colors duration-200"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/precious-iwudike"
            target="_blank"
            rel="noopener noreferrer"
            className="text-grape/50 hover:text-lavender text-sm transition-colors duration-200"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
