import { useState } from "react";
import { Github, ExternalLink, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS_DATA } from "../data/portfolioData";

export default function Projects() {
  const [filter, setFilter] = useState<'All' | 'Full Stack' | 'AI & NLP'>('All');

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (filter === 'All') return true;
    return project.category === filter;
  });

  const filterTabs: ('All' | 'Full Stack' | 'AI & NLP')[] = ['All', 'Full Stack', 'AI & NLP'];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-[20%] right-[20%] w-[350px] h-[350px] bg-blue-500/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[20%] w-[350px] h-[350px] bg-purple-500/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">Featured Projects</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4 rounded-full" />
          <p className="text-sm text-textColorSecondary mt-4 max-w-xl mx-auto">
            Explore some of my notable software projects, ranging from real-time web applications to NLP detection systems.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-3 mb-16">
          <div className="p-1 rounded-xl bg-slate-900 border border-slate-800/80 flex items-center gap-1 shadow-lg">
            {filterTabs.map((tab) => {
              const isActive = filter === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-slate-950 font-bold shadow-md"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass-panel rounded-2xl overflow-hidden group border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between"
              >
                
                {/* Visual Thumbnail */}
                <div className="relative h-48 bg-slate-950 flex flex-col justify-between p-6 overflow-hidden select-none">
                  {/* Neon Grid Overlay */}
                  <div className="absolute inset-0 grid-bg opacity-30 group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Accent glow orb */}
                  <div className="absolute top-[-20%] right-[-10%] w-40 h-40 bg-blue-500/10 rounded-full filter blur-xl group-hover:bg-cyan-500/20 transition-colors" />

                  {/* Top tags */}
                  <div className="relative flex justify-between items-center z-10">
                    <span className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-[10px] font-mono text-cyan-400 tracking-wider">
                      {project.category.toUpperCase()}
                    </span>
                    <span className="text-slate-600 group-hover:text-slate-400 transition-colors">
                      <Code2 size={16} />
                    </span>
                  </div>

                  {/* Project Name inside thumb */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold font-display text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                      {project.tech.map((t, idx) => (
                        <span key={idx} className="text-[9px] font-mono text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800/50">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Description / Content Details */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <p className="text-xs text-textColorSecondary leading-relaxed">
                      {project.description}
                    </p>
                    <ul className="space-y-1.5 mt-4">
                      {project.features.map((feature, fIdx) => (
                        <li key={fIdx} className="text-[11px] text-slate-400 flex items-start gap-2 leading-relaxed">
                          <span className="text-blue-400 mt-1 shrink-0 w-1 h-1 rounded-full bg-blue-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions buttons footer */}
                  <div className="flex gap-4 mt-6 pt-4 border-t border-slate-800/60">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-2 px-4 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono font-medium text-slate-300 hover:text-white hover:border-slate-700 flex items-center justify-center gap-1.5 transition-all"
                    >
                      <Github size={14} />
                      Repository
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-2 px-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 text-xs font-mono font-semibold text-cyan-400 hover:text-white hover:from-blue-500/20 hover:to-cyan-500/20 flex items-center justify-center gap-1.5 transition-all"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
