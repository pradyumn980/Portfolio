import { ArrowUp, Github, Linkedin, Code2, Award } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative py-12 border-t border-slate-900 bg-[#020617] overflow-hidden">
      
      {/* Light glow separator */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 z-20 relative">
        
        {/* Left Side: Brand Logo */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 font-display text-lg font-bold text-white">
            <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 flex items-center justify-center text-xs text-slate-900 font-extrabold shadow-neon-blue">
              P
            </span>
            <span>Pradyumn Agrahari</span>
          </div>
          <p className="text-[10px] font-mono text-slate-500 mt-2 tracking-wider">
            CRAFTING DIGITAL EXPERIENCES FROM SCRATCH.
          </p>
        </div>

        {/* Center: Social Paths */}
        <div className="flex items-center gap-5">
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 hover:text-white transition-colors"
            aria-label="GitHub Profile"
          >
            <Github size={18} />
          </a>
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 hover:text-white transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={PERSONAL_INFO.socials.leetcode}
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 hover:text-white transition-colors"
            aria-label="LeetCode Profile"
          >
            <Code2 size={18} />
          </a>
          <a
            href={PERSONAL_INFO.socials.hackerrank}
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 hover:text-white transition-colors"
            aria-label="HackerRank Profile"
          >
            <Award size={18} />
          </a>
        </div>

        {/* Right Side: Back to Top & Copyright */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right gap-3">
          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:shadow-neon-cyan flex items-center justify-center transition-all group"
            aria-label="Back to top"
          >
            <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
          
          <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
            © {new Date().getFullYear()} Pradyumn Agrahari. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
