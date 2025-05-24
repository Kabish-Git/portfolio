import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cpu, Database, Code, BrainCircuit, Shield } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section ref={ref} className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-10 text-lg text-slate-600 leading-relaxed">
            <p>
              I'm an AI & Data Science student passionate about harnessing the power of data and artificial intelligence
              to solve complex problems. With expertise in machine learning, data analytics, and full-stack development,
              I create innovative solutions that drive results.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <div className="bg-slate-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <BrainCircuit size={32} className="text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-slate-800">AI & Machine Learning</h3>
              <p className="text-slate-600">Building intelligent systems that learn and adapt using TensorFlow and PyTorch.</p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Database size={32} className="text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Data Analysis</h3>
              <p className="text-slate-600">Extracting meaningful insights from complex datasets using Python and SQL.</p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Code size={32} className="text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Full Stack Development</h3>
              <p className="text-slate-600">Creating end-to-end applications with modern frameworks and technologies.</p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Shield size={32} className="text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Cyber Security</h3>
              <p className="text-slate-600">Implementing secure solutions with a focus on data protection and privacy.</p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Cpu size={32} className="text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-slate-800">IoT Integration</h3>
              <p className="text-slate-600">Connecting physical devices with digital systems for data collection and automation.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;