import { useState, useRef } from "react";
import { Mail, Send, Linkedin, Github, Code2, Award, CheckCircle, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "../data/portfolioData";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setStatus('idle');

    const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

    try {
      const response = await fetch(`${backendUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setLoading(false);
      setStatus('success');
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Backend submission failed:", error);
      setLoading(false);
      setStatus('error');
    }
  };

  const socialLinks = [
    { name: "LinkedIn", url: PERSONAL_INFO.socials.linkedin, icon: Linkedin, color: "hover:text-blue-400 border-blue-500/20" },
    { name: "GitHub", url: PERSONAL_INFO.socials.github, icon: Github, color: "hover:text-slate-200 border-slate-700" },
    { name: "LeetCode", url: PERSONAL_INFO.socials.leetcode, icon: Code2, color: "hover:text-yellow-500 border-yellow-500/20" },
    { name: "HackerRank", url: PERSONAL_INFO.socials.hackerrank, icon: Award, color: "hover:text-green-500 border-green-500/20" },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-[30%] left-[10%] w-[350px] h-[350px] bg-blue-500/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[30%] right-[10%] w-[350px] h-[350px] bg-purple-500/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-20">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">Get in Touch</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4 rounded-full" />
          <p className="text-sm text-textColorSecondary mt-4 max-w-xl mx-auto">
            Have a question, an opportunity, or want to collaborate on a project? Leave a message below.
          </p>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct coordinates info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold font-display text-white">Let's talk about projects</h3>
              <p className="text-sm text-textColorSecondary mt-4 leading-relaxed max-w-sm">
                I'm currently looking for Software Development Engineer (SDE) opportunities. Let's build something epic together.
              </p>

              {/* Email direct card */}
              <div className="mt-8 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-4 hover:border-slate-700 transition-colors w-fit">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Email address</p>
                  <a href={`mailto:${PERSONAL_INFO.socials.email}`} className="text-sm font-semibold text-slate-200 hover:text-white transition-colors">
                    {PERSONAL_INFO.socials.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Grid */}
            <div className="mt-12 lg:mt-0">
              <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">Connect elsewhere</h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, idx) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`p-3 rounded-xl bg-slate-900/60 border ${link.color} text-slate-400 text-xs font-mono flex items-center gap-2 hover:bg-slate-900 transition-all`}
                    >
                      <Icon size={14} />
                      {link.name}
                    </a>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Contact form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 rounded-2xl border border-slate-800/80">
              <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
                
                {/* Name Input */}
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>

                {/* Email Input */}
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>

                {/* Message Input */}
                <div className="flex flex-col">
                  <label htmlFor="message" className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Type your message here..."
                    className="px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-slate-950 font-bold hover:shadow-neon-cyan active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <span className="w-5 h-5 rounded-full border-2 border-slate-950 border-t-transparent animate-spin" />
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>

                {/* Status toast logs */}
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-xs flex items-center gap-2"
                  >
                    <CheckCircle size={14} />
                    Message sent successfully! Thank you.
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2"
                  >
                    <AlertCircle size={14} />
                    Oops! Something went wrong. Please try again.
                  </motion.div>
                )}

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
