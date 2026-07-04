import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1200; // 1.2s loading speed
    const intervalTime = 15;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 300); // short delay after reaching 100%
          return 100;
        }
        return Math.min(prev + step, 100);
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-[#020617] z-[99999] flex flex-col items-center justify-center select-none">
      {/* Aurora glow behind logo */}
      <div className="absolute w-[280px] h-[280px] bg-cyan-500/10 rounded-full filter blur-[80px]" />

      <div className="relative flex flex-col items-center gap-6">
        {/* Animated Initials Logo */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative w-20 h-20 flex items-center justify-center rounded-2xl bg-slate-900 border border-slate-800 shadow-neon-cyan"
        >
          {/* Animated border rotating */}
          <div className="absolute inset-0 rounded-2xl border border-transparent border-t-cyan-400 border-r-blue-500 animate-spin" style={{ animationDuration: '2.5s' }} />
          <span className="text-2xl font-bold font-display bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            PA
          </span>
        </motion.div>

        {/* Developer Name */}
        <div className="flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-xl font-bold tracking-wider font-display text-slate-100"
          >
            PRADYUMN AGRAHARI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="text-xs tracking-widest text-slate-400 mt-1 uppercase"
          >
            Software Engineer & Creator
          </motion.p>
        </div>

        {/* Loading Progress Bar Container */}
        <div className="w-48 h-1 bg-slate-900 border border-slate-800/80 rounded-full overflow-hidden relative">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage Tracker */}
        <motion.span
          className="text-xs font-mono text-cyan-400/80 tracking-widest"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          {Math.round(progress)}%
        </motion.span>
      </div>
    </div>
  );
}
