import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2, Globe } from 'lucide-react';

interface LivePreviewModalProps {
  isOpen: boolean;
  url: string | null;
  onClose: () => void;
}

export const LivePreviewModal: React.FC<LivePreviewModalProps> = ({ isOpen, url, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Reset loading state when URL changes
  useEffect(() => {
    if (isOpen) setIsLoading(true);
  }, [isOpen, url]);

  return (
    <AnimatePresence>
      {isOpen && url && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex flex-col bg-black/90 backdrop-blur-xl"
        >
          {/* Browser Header */}
          <div className="h-14 bg-[#111] border-b border-white/10 flex items-center justify-between px-6 shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56] hover:brightness-110 transition-all cursor-pointer" onClick={onClose} />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            
            <div className="flex-1 mx-8 hidden md:flex justify-center">
              <div className="bg-[#1a1a1a] border border-white/5 rounded-md px-4 py-1.5 flex items-center gap-2 w-full max-w-lg text-xs text-gray-400 font-mono">
                <Globe size={12} className="text-accent" />
                <span className="truncate">{url}</span>
              </div>
            </div>

            <button 
              onClick={onClose}
              className="text-white/60 hover:text-white transition-colors hover-trigger p-2 hover:bg-white/10 rounded-full"
            >
              <X size={20} />
            </button>
          </div>

          {/* Iframe Container */}
          <div className="flex-1 w-full relative bg-white">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0a] z-10">
                <div className="flex flex-col items-center gap-4">
                  <Loader2 className="w-8 h-8 text-accent animate-spin" />
                  <span className="text-xs text-gray-500 font-mono tracking-widest uppercase">Connecting to Satellite...</span>
                </div>
              </div>
            )}
            <iframe
              src={url}
              className="w-full h-full border-0"
              title="Live Preview"
              onLoad={() => setIsLoading(false)}
              allowFullScreen
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};