import React from 'react';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 w-full px-6 py-8 md:px-12 flex justify-between items-center z-50 mix-blend-difference"
    >
      <div className="font-display font-bold text-2xl tracking-tighter hover-trigger cursor-none text-white">
        DAGHS.
      </div>
      
      <button 
        onClick={scrollToContact}
        className="group flex items-center gap-3 px-6 py-2 rounded-full border border-white/20 bg-black/10 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300 hover-trigger cursor-none"
      >
        <span className="text-sm font-medium tracking-wide">GET IN TOUCH</span>
        <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
      </button>
    </motion.nav>
  );
};
