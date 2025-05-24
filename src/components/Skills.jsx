import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const programmingLanguages = [
    { name: 'Python', level: 90 },
    { name: 'JavaScript', level: 75 },
    { name: 'C', level: 70 },
    { name: 'R', level: 65 },
    { name: 'Kotlin', level: 60 }
  ];

  const technicalSkills = [
    { name: 'Database Management', level: 85 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'Hadoop', level: 65 }
  ];

  const frameworks = [
    { name: 'TensorFlow', level: 80 },
    { name: 'PyTorch', level: 75 },
    { name: 'Pandas & NumPy', level: 90 },
    { name: 'Scikit-Learn', level: 85 },
    { name: 'Flask', level: 70 },
    { name: 'React', level: 65 }
  ];

  const tools = [
    { name: 'Power BI', level: 80 },
    { name: 'Tableau', level: 75 },
    { name: 'Git', level: 85 },
    { name: 'Android Studio', level: 65 },
    { name: 'Blender', level: 60 }
  ];

  const SkillBar = ({ name, level }) => (
    <motion.div
      variants={itemVariants}
      className="mb-6"
    >
      <div className="flex justify-between mb-1">
        <span className="text-slate-700 font-medium">{name}</span>
        <span className="text-slate-600 font-medium">{level}%</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-2.5">
        <motion.div 
          className="h-2.5 rounded-full bg-indigo-600"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        ></motion.div>
      </div>
    </motion.div>
  );

  return (
    <section ref={ref} className="py-20 bg-white" id="skills">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">My Skills</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold text-slate-800 mb-6 pb-2 border-b border-slate-200">
                Programming Languages
              </h3>
              {programmingLanguages.map((skill, index) => (
                <SkillBar key={`lang-${index}`} name={skill.name} level={skill.level} />
              ))}
              
              <h3 className="text-xl font-bold text-slate-800 mb-6 mt-12 pb-2 border-b border-slate-200">
                Technical Skills
              </h3>
              {technicalSkills.map((skill, index) => (
                <SkillBar key={`tech-${index}`} name={skill.name} level={skill.level} />
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold text-slate-800 mb-6 pb-2 border-b border-slate-200">
                Frameworks & Libraries
              </h3>
              {frameworks.map((skill, index) => (
                <SkillBar key={`framework-${index}`} name={skill.name} level={skill.level} />
              ))}
              
              <h3 className="text-xl font-bold text-slate-800 mb-6 mt-12 pb-2 border-b border-slate-200">
                Tools & Software
              </h3>
              {tools.map((skill, index) => (
                <SkillBar key={`tool-${index}`} name={skill.name} level={skill.level} />
              ))}
            </motion.div>
          </div>

          <motion.div 
            variants={itemVariants}
            className="mt-16 bg-indigo-50 rounded-lg p-6 shadow-md"
          >
            <h3 className="text-xl font-bold text-slate-800 mb-4">Languages</h3>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white px-4 py-2 rounded-full shadow-sm">
                <span className="font-medium text-indigo-600">English</span>
                <span className="ml-2 text-slate-600">- Fluent</span>
              </div>
              <div className="bg-white px-4 py-2 rounded-full shadow-sm">
                <span className="font-medium text-indigo-600">Tamil</span>
                <span className="ml-2 text-slate-600">- Native</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;