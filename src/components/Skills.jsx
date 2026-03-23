import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaJs, FaGithub, FaGitAlt, FaJava, FaPython, FaHtml5, FaCss3Alt
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiExpress, SiMongodb, SiPostman, SiFramer, SiCplusplus, SiJavascript, SiPhp, SiMysql, SiC
} from 'react-icons/si';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // Apple-style easing
      },
    },
  };

  const categories = [
    {
      title: "Languages",
      skills: [
        { name: "C++", icon: <SiCplusplus /> },
        { name: "Java", icon: <FaJava /> },
        { name: "Python", icon: <FaPython /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "TypeScript", icon: <SiJavascript /> },
        { name: "C", icon: <SiC /> },
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Framer Motion", icon: <SiFramer /> },
        { name: "Redux", icon: <FaJs /> }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "REST APIs", icon: <SiExpress /> }
      ]
    },
    {
      title: "Core Skills",
      skills: [
        { name: "DSA", icon: <FaGitAlt /> },
        { name: "OOPs", icon: <FaGithub /> },
        { name: "DBMS", icon: <SiMongodb /> },
        { name: "Git", icon: <FaGitAlt /> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="mb-20">
          <h2 className="text-[10px] font-bold tracking-[0.2em] text-[#52525b] uppercase mb-4">Competencies</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Tooling & <span className="text-gradient">Versatility</span>.
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {categories.map((category, idx) => (
            <motion.div key={idx} variants={itemVariants} className="space-y-10">
              <h4 className="text-white font-bold text-xl tracking-tight border-b border-white/5 pb-4">{category.title}</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {category.skills.map((skill, sIdx) => (
                  <motion.div 
                    key={sIdx}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: "rgba(59,130,246,0.1)",
                      borderColor: "rgba(59,130,246,0.3)",
                      boxShadow: "0 10px 40px rgba(59,130,246,0.2)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center justify-center p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 transition-all duration-300 group/item cursor-pointer relative overflow-hidden"
                  >
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover/item:from-blue-500/10 group-hover/item:to-purple-500/10 transition-all duration-500" />
                    
                    <div className="text-2xl text-[#a1a1aa] mb-3 relative z-10 group-hover/item:text-blue-400 transition-colors duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-[#52525b] group-hover/item:text-white font-bold transition-colors duration-300 relative z-10">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
