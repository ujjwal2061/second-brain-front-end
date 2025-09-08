import { Github, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="text-center py-6 border-t text-gray-500 flex flex-col items-center gap-3">
      <p>© {new Date().getFullYear()} Second Brain. All rights Free.</p>
      <div className="flex gap-6">
        <a
          href="https://github.com/ujjwal2061"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-black transition">
          <Github className="w-5 h-5" />
          GitHub
        </a>
        <a
          href="https://x.com/neyuj_11"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-sky-500 transition">
          <Twitter className="w-5 h-5" />
          Twitter
        </a>
      </div>
    </footer>
  );
};
