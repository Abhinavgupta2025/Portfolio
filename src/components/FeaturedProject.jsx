import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaBolt, FaRobot, FaLayerGroup } from 'react-icons/fa';
import aspirexImage from '../assets/aspirex-screenshot.jpeg';

const FeaturedProject = () => {
  return (
    <section id="featured" className="py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-20 flex items-center gap-6">
          <h2 className="text-[10px] font-bold tracking-[0.2em] text-[#52525b] uppercase">Featured Case Study</h2>
          <div className="flex-1 h-px bg-white/5"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-[#0a0a0a] border border-white/5 rounded-[3rem] overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative z-10">

            <div className="relative min-h-[400px] lg:min-h-[600px] bg-[#050505] overflow-hidden flex items-center justify-center p-8 lg:p-20 border-b lg:border-b-0 lg:border-r border-white/5">
              <div className="w-full h-full relative rounded-2xl border border-white/10 bg-black shadow-2xl flex flex-col overflow-hidden hover:scale-[1.02] transition-transform duration-1000 ease-out">
                <div className="h-10 bg-[#0a0a0a] border-b border-white/5 flex items-center px-4 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                  </div>
                  <div className="mx-auto text-[10px] text-[#52525b] font-bold tracking-widest uppercase">AspireX</div>
                </div>
                <div className="flex-1 p-4 sm:p-6 lg:p-8 flex items-center justify-center bg-black">
                  <img 
                    src={aspirexImage} 
                    alt="AspireX Platform Screenshot" 
                    className="w-full h-full object-contain rounded-lg"
                    style={{ maxHeight: '100%', maxWidth: '100%' }}
                  />
                </div>
                <div className="absolute bottom-4 lg:bottom-8 right-4 lg:right-8 bg-white/5 border border-white/10 backdrop-blur-xl px-3 lg:px-4 py-2 rounded-full flex items-center gap-2 lg:gap-3">
                  <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
                  <span className="text-[9px] lg:text-[10px] font-bold text-[#a1a1aa] tracking-widest uppercase">Latency: 12ms</span>
                </div>
              </div>
            </div>

            <div className="p-6 lg:p-10 xl:p-20 flex flex-col justify-center min-h-[400px] lg:min-h-[600px]">
              <div className="flex flex-wrap gap-2 lg:gap-3 mb-8 lg:mb-12">
                <span className="text-[9px] lg:text-[10px] font-bold tracking-[0.2em] px-3 lg:px-4 py-1.5 bg-white/5 text-[#a1a1aa] border border-white/5 rounded-full uppercase">Real-time</span>
                <span className="text-[9px] lg:text-[10px] font-bold tracking-[0.2em] px-3 lg:px-4 py-1.5 bg-white/5 text-[#a1a1aa] border border-white/5 rounded-full uppercase">AI Hints</span>
                <span className="text-[9px] lg:text-[10px] font-bold tracking-[0.2em] px-3 lg:px-4 py-1.5 bg-white text-black rounded-full uppercase">Full Stack</span>
              </div>

              <h3 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 lg:mb-8 tracking-tight">AspireX</h3>

              <div className="space-y-6 lg:space-y-8 text-[#a1a1aa] text-sm lg:text-lg leading-relaxed">
                <div className="group/item">
                  <strong className="text-white font-bold block mb-2 text-xs uppercase tracking-widest">Problem</strong>
                  <p className="text-[#71717a] group-hover:text-[#a1a1aa] transition-colors duration-500">AspireX is an innovative learning platform that bridges gap between education and career opportunities.</p>
                </div>
                <div className="group/item">
                  <strong className="text-white font-bold block mb-2 text-xs uppercase tracking-widest">Solution</strong>
                  <p className="text-[#71717a] group-hover:text-[#a1a1aa] transition-colors duration-500">Comprehensive learning paths with AI-powered mentorship and real-time progress tracking.</p>
                </div>
                <div className="group/item">
                  <strong className="text-white font-bold block mb-2 text-xs uppercase tracking-widest">Impact</strong>
                  <p className="text-[#71717a] group-hover:text-[#a1a1aa] transition-colors duration-500">Empowering thousands of learners to achieve their career goals through personalized education.</p>
                </div>
              </div>

              <div className="mt-8 lg:mt-16 flex flex-col sm:flex-row items-center gap-4 lg:gap-6">
                <a href="https://aspire-x.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-black px-8 lg:px-10 py-3 lg:py-4 rounded-full font-bold hover:bg-[#f4f4f5] transition-colors duration-300">
                  Live Product <FaExternalLinkAlt size={12} />
                </a>
                <a href="https://github.com/Abhinavgupta2025/AspireX.git" target="_blank" rel="noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-transparent border border-white/10 text-white px-8 lg:px-10 py-3 lg:py-4 rounded-full font-bold hover:bg-white/5 transition-colors duration-300">
                  GitHub <FaGithub size={16} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProject;
