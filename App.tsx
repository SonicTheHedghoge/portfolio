import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { CustomCursor } from './components/CustomCursor';
import { ProjectCard } from './components/ProjectCard';
import { LivePreviewModal } from './components/LivePreviewModal';
import { SmoothScroll } from './components/SmoothScroll';
import { Contact } from './components/Contact';
import { PROJECTS, EXPERIENCES, STACK } from './constants';
import { ArrowDown } from 'lucide-react';

const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handlePreview = (url: string) => {
    setPreviewUrl(url);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setTimeout(() => setPreviewUrl(null), 300);
  };

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-bg text-text-main font-sans selection:bg-accent selection:text-white">
        {/* Ambient Background Noise */}
        <div className="fixed inset-0 bg-noise opacity-[0.03] pointer-events-none z-50 mix-blend-overlay"></div>
        
        {/* Custom Cursor */}
        <CustomCursor />

        {/* Modal */}
        <LivePreviewModal isOpen={modalOpen} url={previewUrl} onClose={handleCloseModal} />

        {/* Navigation */}
        <Navbar />

        <main className="relative z-10">
          {/* HERO SECTION */}
          <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-20 relative overflow-hidden">
            {/* Subtle Gradient Glow */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none animate-pulse duration-[5000ms]" />

            <div className="max-w-6xl relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-display text-accent tracking-[0.2em] text-sm md:text-base font-medium mb-6 flex items-center gap-4"
              >
                <span className="w-12 h-[1px] bg-accent"></span>
                TUNISIA • 2026
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-[12vw] leading-[0.85] font-bold tracking-tight mb-8 bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-transparent"
              >
                FULL STACK
                <br />
                ARCHITECT
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="max-w-xl text-text-muted text-lg md:text-xl leading-relaxed"
              >
                I build digital empires. Precision engineering meets artistic chaos. 
                Creating high-performance web experiences from Nabeul to the World.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="absolute bottom-12 left-6 md:left-24 animate-bounce text-white/30"
            >
              <ArrowDown size={32} />
            </motion.div>
          </section>

          {/* WORK SECTION */}
          <section id="work" className="py-20 md:py-32 px-6 md:px-12 lg:px-24">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
              <motion.h2 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-display text-5xl md:text-7xl font-bold"
              >
                SELECTED<br/>WORKS
              </motion.h2>
              <span className="text-text-muted font-mono mt-4 md:mt-0">[01 — 06]</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
              {PROJECTS.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={index}
                  onPreview={handlePreview}
                />
              ))}
            </div>
          </section>

          {/* ABOUT SECTION */}
          <section id="about" className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-surface/50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-5xl md:text-7xl font-bold mb-24 relative z-10"
            >
              THE ARCHITECT
            </motion.h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative z-10">
              {/* Left Column: Bio & Stack */}
              <div className="lg:col-span-4 space-y-16">
                <div>
                  <h3 className="text-accent font-display text-sm tracking-widest mb-6 uppercase">About Me</h3>
                  <p className="text-text-muted text-lg leading-relaxed">
                    I am <strong className="text-white">Adem Daghari (DAGHS)</strong>. A 23-year-old Full Stack Architect based in Nabeul. 
                    I combine technical precision with creative direction. My code is clean, my designs are brutal, and my deployments are instant.
                  </p>
                </div>

                <div>
                  <h3 className="text-accent font-display text-sm tracking-widest mb-6 uppercase">Stack</h3>
                  <div className="flex flex-wrap gap-3">
                    {STACK.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-4 py-2 border border-white/10 rounded-full text-sm hover:border-accent hover:text-accent transition-colors duration-300 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Experience */}
              <div className="lg:col-span-8">
                <h3 className="text-accent font-display text-sm tracking-widest mb-10 uppercase">Experience</h3>
                <div className="space-y-12">
                  {EXPERIENCES.map((exp, idx) => (
                    <motion.div 
                      key={exp.id}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="relative pl-8 md:pl-12 border-l border-white/10 group hover-trigger"
                    >
                      <div className={`absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full transition-colors duration-300 ${exp.highlight ? 'bg-accent shadow-[0_0_10px_#3b82f6]' : 'bg-white/20 group-hover:bg-white'}`} />
                      
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h4 className="text-2xl md:text-3xl font-medium text-white group-hover:text-accent transition-colors">{exp.role}</h4>
                        <span className="text-sm font-mono text-text-muted mt-1 md:mt-0">{exp.period}</span>
                      </div>
                      
                      <div className="font-display text-text-muted uppercase tracking-wider text-sm mb-4">
                        {exp.company}
                      </div>
                      
                      <p className="text-gray-400 leading-relaxed max-w-2xl">
                        {exp.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CONTACT SECTION */}
          <Contact />

          {/* FOOTER */}
          <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-text-muted font-mono">
            <div className="mb-4 md:mb-0 hover:text-white transition-colors cursor-pointer">
              © 2026 DAGHS. ALL RIGHTS RESERVED.
            </div>
            <div className="flex gap-8">
              <span className="hover:text-accent transition-colors cursor-pointer hover-trigger">TUNISIA</span>
              <span className="hover:text-accent transition-colors cursor-pointer hover-trigger">NABEUL</span>
            </div>
          </footer>
        </main>
      </div>
    </SmoothScroll>
  );
};

export default App;