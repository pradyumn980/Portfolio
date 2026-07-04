import { Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { EXPERIENCE_DATA } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950/10">
      {/* Background gradients */}
      <div className="absolute top-[40%] right-[10%] w-[300px] h-[300px] bg-blue-500/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[30%] left-[10%] w-[300px] h-[300px] bg-purple-500/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-20">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">Experience Timeline</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4 rounded-full" />
          <p className="text-sm text-textColorSecondary mt-4 max-w-xl mx-auto">
            A chronological look at my industry experience, startup ventures, and milestones.
          </p>
        </div>

        {/* Timeline Path container */}
        <div className="relative">
          
          {/* Vertical Central Line (Desktop) / Left Line (Mobile) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-1/2 timeline-line opacity-30" />

          {/* Timeline Items */}
          <div className="space-y-16">
            {EXPERIENCE_DATA.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-stretch ${
                    isEven ? "md:flex-row-reverse" : ""
                  } relative`}
                >
                  
                  {/* Timeline Glowing Node */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-400 md:-translate-x-1/2 top-6 z-30 shadow-neon-cyan animate-pulse" />

                  {/* Left Side spacer/empty space on Desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content Card Side */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8"
                  >
                    <div className="glass-panel p-6 rounded-2xl relative overflow-hidden group hover:border-slate-700 transition-all duration-300">
                      
                      {/* Accent corner */}
                      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-cyan-400" />

                      {/* Header details */}
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                        <div>
                          <h3 className="text-lg font-bold font-display text-white group-hover:text-cyan-400 transition-colors">
                            {item.role}
                          </h3>
                          <p className="text-sm font-semibold text-slate-300 mt-0.5">
                            {item.company}
                          </p>
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400">
                          <Calendar size={12} />
                          {item.duration}
                        </div>
                      </div>

                      {/* List details */}
                      <ul className="space-y-2 mt-4">
                        {item.description.map((bullet, bIdx) => (
                          <li key={bIdx} className="text-xs text-textColorSecondary flex items-start gap-2 leading-relaxed">
                            <span className="text-cyan-400 mt-1.5 shrink-0 w-1 h-1 rounded-full bg-cyan-400" />
                            {bullet}
                          </li>
                        ))}
                      </ul>

                      {/* Skill tags */}
                      <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-slate-800/80">
                        {item.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-0.5 rounded-lg bg-slate-900 border border-slate-800/50 text-[10px] font-mono text-slate-400"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
