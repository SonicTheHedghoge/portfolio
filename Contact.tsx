import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setFormState('success');
      } else {
        setFormState('error');
      }
    } catch (error) {
      setFormState('error');
    }
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-bg to-surface relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-6">START A PROJECT</h2>
          <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto">
            Ready to build something monumental? I am currently available for select freelance opportunities and consulting.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 hover:border-white/20 transition-colors duration-500"
        >
          {formState === 'success' ? (
            <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-4">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="font-display text-2xl font-bold text-white">Message Received</h3>
              <p className="text-text-muted">Thank you for reaching out. I'll get back to you within 24 hours.</p>
              <button 
                onClick={() => setFormState('idle')}
                className="mt-6 text-sm text-accent hover:text-white transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <input type="hidden" name="access_key" value="2d33b836-9e9d-46cc-8026-738cb7bb70e0" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2 group">
                  <label htmlFor="name" className="text-xs font-mono uppercase tracking-widest text-text-muted group-focus-within:text-accent transition-colors">Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    className="w-full bg-transparent border-b border-white/10 py-3 text-lg focus:outline-none focus:border-accent transition-colors placeholder:text-white/10 hover-trigger"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="space-y-2 group">
                  <label htmlFor="email" className="text-xs font-mono uppercase tracking-widest text-text-muted group-focus-within:text-accent transition-colors">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    className="w-full bg-transparent border-b border-white/10 py-3 text-lg focus:outline-none focus:border-accent transition-colors placeholder:text-white/10 hover-trigger"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="space-y-2 group">
                <label htmlFor="message" className="text-xs font-mono uppercase tracking-widest text-text-muted group-focus-within:text-accent transition-colors">Message</label>
                <textarea 
                  name="message" 
                  required 
                  rows={4}
                  className="w-full bg-transparent border-b border-white/10 py-3 text-lg focus:outline-none focus:border-accent transition-colors placeholder:text-white/10 resize-none hover-trigger"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {formState === 'error' && (
                <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-3 rounded-md">
                  <AlertCircle size={16} />
                  <span>Something went wrong. Please try again later.</span>
                </div>
              )}

              <div className="flex justify-end pt-4">
                <button 
                  type="submit" 
                  disabled={formState === 'submitting'}
                  className="group relative px-8 py-4 bg-white text-black font-bold tracking-wider uppercase rounded-full overflow-hidden hover:bg-accent hover:text-white transition-all duration-300 hover-trigger disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {formState === 'submitting' ? (
                      <>
                        <span>Sending</span>
                        <Loader2 className="w-4 h-4 animate-spin" />
                      </>
                    ) : (
                      <>
                        <span>Submit Proposal</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};