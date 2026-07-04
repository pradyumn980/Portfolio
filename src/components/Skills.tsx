import { motion } from "framer-motion";
import { SKILLS_DATA } from "../data/portfolioData";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-[20%] left-[20%] w-[350px] h-[350px] bg-purple-500/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[20%] w-[350px] h-[350px] bg-blue-500/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">Skills & Technologies</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4 rounded-full" />
          <p className="text-sm text-textColorSecondary mt-4 max-w-xl mx-auto">
            A comprehensive breakdown of my technical capabilities spanning front-end styling, backend services, databases, and AI modeling.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SKILLS_DATA.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="glass-panel p-6 rounded-2xl relative overflow-hidden group hover:border-slate-700 hover:shadow-lg transition-all duration-300"
              >
                {/* Visual Category-Specific Glow Corner */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${category.color} opacity-[0.03] group-hover:opacity-[0.08] filter blur-xl transition-opacity`} />
                
                {/* Header detail */}
                <div className="flex items-center gap-3.5 mb-6">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-slate-950 font-bold shadow-md`}>
                    <Icon size={18} className="text-slate-900" />
                  </div>
                  <h3 className="text-lg font-bold font-display text-white group-hover:text-cyan-400 transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Skills tags subgrid */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="px-3 py-1.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs font-mono text-slate-300 flex items-center gap-1.5 group-hover/skill:border-slate-700 hover:bg-slate-800 transition-all select-none"
                    >
                      {/* Visual tiny indicator dot */}
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color}`} />
                      {skill.name}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
