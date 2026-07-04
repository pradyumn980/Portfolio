import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import confetti from "canvas-confetti";
import { ACHIEVEMENTS } from "../data/portfolioData";

export default function Achievements() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const triggerConfetti = (id: string) => {
    // Fire confetti for LeetCode, HackerRank, and Co-Founder milestones
    if (id === "co-founder" || id === "hackerrank" || id === "leetcode") {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#3B82F6", "#06B6D4", "#8B5CF6", "#22C55E"],
        disableForReducedMotion: true
      });
    }
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-slate-950/20">
      <div className="absolute top-[20%] left-[20%] w-[350px] h-[350px] bg-cyan-500/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[20%] w-[350px] h-[350px] bg-blue-500/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">Milestones & Achievements</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4 rounded-full" />
          <p className="text-sm text-textColorSecondary mt-4 max-w-xl mx-auto">
            A numeric summary of academic milestones, problem-solving stats, and project initiatives. Click cards to celebrate!
          </p>
        </div>

        {/* Counter Cards Grid */}
        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {ACHIEVEMENTS.map((ach) => (
            <CounterCard
              key={ach.id}
              achievement={ach}
              triggerInView={isInView}
              onClick={() => triggerConfetti(ach.id)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

interface CounterCardProps {
  achievement: typeof ACHIEVEMENTS[0];
  triggerInView: boolean;
  onClick: () => void;
}

function CounterCard({ achievement, triggerInView, onClick }: CounterCardProps) {
  const [count, setCount] = useState(0);
  const Icon = achievement.icon;

  useEffect(() => {
    if (!triggerInView) return;

    let start = 0;
    const end = achievement.target;
    if (end === 0) return;

    const duration = 1500; // 1.5 seconds loading
    const incrementTime = Math.max(Math.floor(duration / end), 20);
    
    const timer = setInterval(() => {
      // Calculate a step size that feels smooth
      const step = Math.max(Math.ceil(end / 40), 1);
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [triggerInView, achievement.target]);

  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.03, y: -4 }}
      className="glass-panel p-6 rounded-2xl border border-slate-800/80 hover:border-slate-700/80 hover:shadow-neon-cyan flex flex-col items-center text-center cursor-pointer select-none group transition-all duration-300"
    >
      <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 flex items-center justify-center mb-4 group-hover:text-white group-hover:bg-cyan-500 group-hover:shadow-neon-cyan transition-all">
        <Icon size={18} />
      </div>
      
      <div className="text-3xl font-extrabold font-display bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mt-2">
        {triggerInView ? count : 0}
        {achievement.suffix}
      </div>

      <p className="text-xs font-bold text-slate-200 tracking-wide mt-3 leading-snug">
        {achievement.label}
      </p>
    </motion.div>
  );
}
