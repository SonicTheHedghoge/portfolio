import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Maximize2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
  onPreview: (url: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onPreview }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group relative cursor-none hover-trigger w-full"
      onClick={() => onPreview(project.liveUrl)}
    >
      <div className="bg-surface border border-white/5 rounded-xl overflow-hidden relative transition-all duration-500 hover:border-accent hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.3)]">
        
        {/* Image Container */}
        <div className="w-full aspect-[16/10] overflow-hidden relative bg-white/5">
          <div className="absolute top-4 right-4 z-20 flex gap-2">
            <div className="bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2 text-xs font-bold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse" />
              Live Preview
            </div>
          </div>
          
          {/* Skeleton/Loading State */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-white/5 animate-pulse z-0" />
          )}

          <img 
            src={project.imageUrl} 
            alt={project.title}
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0 group-hover:scale-105 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
             <div className="bg-white/10 backdrop-blur-md p-4 rounded-full text-white transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                <Maximize2 size={24} />
             </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-display text-2xl font-medium text-white group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>
            <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors duration-300" />
          </div>
          <p className="text-text-muted text-sm tracking-wider uppercase font-medium">
            {project.tags}
          </p>
        </div>
      </div>
    </motion.div>
  );
};