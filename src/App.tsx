import { useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import ParticlesBg from "./components/ParticlesBg";
import LoadingScreen from "./components/LoadingScreen";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Scroll Progress bar logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-[#020617] text-textColorPrimary relative overflow-x-hidden"
          >
            {/* Scroll Indicator */}
            <motion.div
              className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 origin-left z-50 shadow-neon-cyan"
              style={{ scaleX }}
            />

            {/* Global Reactive Assets */}
            <CustomCursor />
            <ParticlesBg />

            {/* Layout Header */}
            <Navbar />

            {/* Sections Wrapper */}
            <main className="relative z-20">
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Achievements />
              <Contact />
            </main>

            {/* Layout Footer */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
