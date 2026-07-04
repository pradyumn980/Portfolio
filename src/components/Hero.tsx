import { useEffect, useState } from "react";
import { Code2, Globe, Database, Terminal, FileText, Cpu, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "../data/portfolioData";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter logic
  useEffect(() => {
    const currentTagline = PERSONAL_INFO.taglines[taglineIndex];
    let timer: number;

    const handleTyping = () => {
      if (!isDeleting) {
        setTypedText(currentTagline.substring(0, typedText.length + 1));
        if (typedText === currentTagline) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 2000);
        } else {
          timer = setTimeout(handleTyping, 100);
        }
      } else {
        setTypedText(currentTagline.substring(0, typedText.length - 1));
        if (typedText === "") {
          setIsDeleting(false);
          setTaglineIndex((prev) => (prev + 1) % PERSONAL_INFO.taglines.length);
        } else {
          timer = setTimeout(handleTyping, 40);
        }
      }
    };

    timer = setTimeout(handleTyping, isDeleting ? 40 : 100);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, taglineIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  // Tech icons orbiting list
  const techOrbits = [
    { name: "React", icon: Globe, color: "text-blue-400 border-blue-400/20", pos: "top-[-10%] left-[20%]", delay: 0 },
    { name: "Node.js", icon: Code2, color: "text-green-400 border-green-400/20", pos: "top-[15%] right-[-5%]", delay: 1.5 },
    { name: "TypeScript", icon: Code2, color: "text-blue-500 border-blue-500/20", pos: "bottom-[10%] right-[10%]", delay: 0.8 },
    { name: "MongoDB", icon: Database, color: "text-emerald-500 border-emerald-500/20", pos: "bottom-[-5%] left-[25%]", delay: 2.2 },
    { name: "Java", icon: Terminal, color: "text-red-400 border-red-400/20", pos: "top-[40%] left-[-10%]", delay: 1.2 },
    { name: "Python", icon: Cpu, color: "text-yellow-400 border-yellow-400/20", pos: "bottom-[40%] right-[-8%]", delay: 1.9 },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden grid-bg"
    >
      {/* Background Aurora Gradient Blobs */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-blue-500/10 rounded-full filter blur-[100px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] bg-purple-500/10 rounded-full filter blur-[100px] animate-pulse-slow pointer-events-none" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-20">
        
        {/* Left: Introduction Content */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 tracking-wider mb-5">
              Welcome to my space
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display leading-[1.1] text-white"
          >
            {PERSONAL_INFO.title}{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent block mt-2">
              {PERSONAL_INFO.name}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-10 sm:h-12 flex items-center mt-4"
          >
            <span className="text-xl sm:text-2xl font-mono text-slate-400">I am a&nbsp;</span>
            <span className="text-xl sm:text-2xl font-mono font-bold text-cyan-400 border-r-2 border-cyan-400 animate-pulse pr-1">
              {typedText}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-textColorSecondary mt-6 max-w-xl leading-relaxed"
          >
            {PERSONAL_INFO.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-slate-950 font-bold hover:shadow-neon-blue hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              View Projects
            </button>
            <a
              href={PERSONAL_INFO.resumeUrl}
              className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-semibold hover:border-slate-700 hover:text-white flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <FileText size={18} />
              Download Resume
            </a>
          </motion.div>

          {/* Social icons short list */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex gap-4 mt-10"
          >
            <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors"><Github size={20} /></a>
            <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
          </motion.div>
        </div>

        {/* Right: Mock Profile Image & Floating Badges */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2 mt-8 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-64 h-64 sm:w-80 sm:h-80"
          >
            {/* Spinning Gradient Border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-cyan-400 to-purple-500 animate-spin" style={{ animationDuration: '8s' }} />
            
            {/* Dark Mask for border thickness */}
            <div className="absolute inset-[3px] rounded-full bg-[#020617] flex items-center justify-center overflow-hidden">
              
              {/* Profile Mockup SVG or Avatar */}
              <div className="w-full h-full bg-slate-900/80 flex flex-col items-center justify-center p-6 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent z-10" />
                
                {/* Tech Symbol background */}
                <Code2 size={120} className="text-slate-800/40 absolute top-[25%]" />
                
                {/* Visual Avatar detail */}
                <div className="z-20 text-center flex flex-col items-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-3xl font-bold font-display shadow-neon-blue mb-4 border border-blue-400/30">
                    PA
                  </div>
                  <h3 className="text-lg font-bold font-display text-white tracking-wide">Pradyumn</h3>
                  <p className="text-xs text-cyan-400 font-mono tracking-widest mt-1 uppercase">Full-Stack Dev</p>
                </div>
              </div>

            </div>

            {/* Floating Orbits */}
            {techOrbits.map((orbit, index) => {
              const Icon = orbit.icon;
              return (
                <motion.div
                  key={index}
                  className={`absolute ${orbit.pos} glass-panel border ${orbit.color} px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-lg z-30 select-none`}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 4 + index,
                    ease: "easeInOut",
                    delay: orbit.delay,
                  }}
                >
                  <Icon size={14} />
                  <span className="text-xs font-mono font-medium text-slate-300">{orbit.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20" onClick={() => scrollToSection("about")}>
        <span className="text-xs font-mono tracking-widest text-slate-500 uppercase">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border border-slate-700 flex justify-center p-1"
        >
          <div className="w-1 h-2 rounded-full bg-cyan-400" />
        </motion.div>
      </div>

    </section>
  );
}
