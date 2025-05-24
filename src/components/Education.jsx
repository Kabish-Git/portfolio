import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section ref={ref} className="py-20 bg-indigo-50" id="education">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Education</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          </motion.div>

          <div className="relative border-l-4 border-indigo-500 ml-6 md:ml-12 pl-8 pb-8">
            {/* First Education Item */}
            <motion.div
              variants={itemVariants}
              className="mb-12 relative"
            >
              <div className="absolute -left-14 mt-1.5 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                <GraduationCap size={20} className="text-white" />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-3 text-indigo-600">
                  <Calendar size={18} className="mr-2" />
                  <span className="text-sm font-medium">2022 - 2026</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">B.Tech in Artificial Intelligence and Data Science</h3>
                <p className="text-slate-700 font-medium">Anna University Regional Campus, Coimbatore</p>
                <p className="text-slate-600 mt-2">CGPA: 7.4</p>
                <div className="mt-4 bg-indigo-50 p-3 rounded-md">
                  <p className="text-sm text-slate-700">
                    Focusing on machine learning algorithms, data analysis, and AI-driven applications. 
                    Actively participating in research projects and technical competitions.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Second Education Item */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="absolute -left-14 mt-1.5 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                <GraduationCap size={20} className="text-white" />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-3 text-indigo-600">
                  <Calendar size={18} className="mr-2" />
                  <span className="text-sm font-medium">2020 - 2022</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Higher Secondary Education</h3>
                <p className="text-slate-700 font-medium">R.T.A. Higher Secondary School, Pudukottai</p>
                <p className="text-slate-600 mt-2">Score: 85%</p>
                <div className="mt-4 bg-indigo-50 p-3 rounded-md">
                  <p className="text-sm text-slate-700">
                    Developed a strong foundation in mathematics and science.
                    Participated in various science exhibitions and programming competitions.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;