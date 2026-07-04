import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { PERSONAL_INFO, STATS_CARDS } from "../data/portfolioData";

export default function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * index,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/20">
      <div className="absolute top-[30%] right-[5%] w-[250px] h-[250px] bg-cyan-500/5 rounded-full filter blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-[250px] h-[250px] bg-blue-500/5 rounded-full filter blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">About Me</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4 rounded-full" />
          <p className="text-sm text-textColorSecondary mt-4 max-w-xl mx-auto">
            Get to know my academic background, technical focus, and passion for engineering.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative w-64 h-80 sm:w-72 sm:h-96"
            >
              {/* Glow Behind */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-blue-600 via-cyan-400 to-purple-600 opacity-60 blur-md" />
              
              {/* Main Card */}
              <div className="absolute inset-0 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between p-6 overflow-hidden">
                {/* Visual UI Grid Accents */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-800/10 border-l border-b border-slate-800/60 rounded-bl-3xl flex items-center justify-center">
                  <GraduationCap className="text-slate-700/30" size={60} />
                </div>
                
                {/* Card Title Details */}
                <div className="relative">
                  <div className="flex gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-white mt-8">B.Tech Student</h3>
                  <p className="text-xs text-cyan-400 font-mono tracking-widest mt-1">COMPUTER SCIENCE</p>
                </div>

                {/* Subtitle details */}
                <div className="relative z-10">
                  <div className="w-10 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-4" />
                  <p className="text-xs font-mono text-slate-400 leading-relaxed">
                    Analyzing algorithms, constructing scalable systems, and integrating AI workflows.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-mono text-slate-300 tracking-wider">OPEN TO COLLABORATIONS</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Bio details */}
          <div className="lg:col-span-7 flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                Passionate Full Stack Developer & AI Enthusiast
              </h3>
              <p className="text-base text-textColorSecondary mt-4 leading-relaxed">
                {PERSONAL_INFO.aboutText}
              </p>
              
              <div className="mt-8">
                <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-widest mb-4">
                  Core Strengths
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {PERSONAL_INFO.strengths.map((strength, index) => (
                    <span
                      key={index}
                      className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 hover:border-slate-700 hover:text-white transition-all cursor-default select-none"
                    >
                      {strength}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Statistic Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {STATS_CARDS.map((card, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="glass-panel border border-slate-800/80 p-5 rounded-2xl flex flex-col hover:border-blue-500/30 hover:shadow-neon-blue group transition-all"
            >
              <span className="text-3xl font-extrabold font-display bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent group-hover:scale-105 origin-left transition-transform duration-300">
                {card.value}
              </span>
              <span className="text-sm font-bold text-slate-200 mt-2 font-display">
                {card.label}
              </span>
              <span className="text-[11px] font-mono text-slate-500 mt-1 leading-snug">
                {card.sub}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
