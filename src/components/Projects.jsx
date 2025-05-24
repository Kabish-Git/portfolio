import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [activeProject, setActiveProject] = useState(null);

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const projects = [
    {
      id: 1,
      title: 'Pollution Detector',
      description: 'An IoT-based solution that uses machine learning algorithms to detect and analyze air pollution levels in real-time.',
      technologies: ['Python', 'TensorFlow', 'Arduino', 'IoT', 'Machine Learning'],
      details: 'This project combines IoT sensors with machine learning to monitor and analyze air pollution levels. The system collects data from various environmental sensors, processes it using custom ML algorithms, and provides real-time insights on air quality. The solution includes predictive modeling to forecast pollution trends.',
      image: 'https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'Attendance Management System',
      description: 'A blockchain-based attendance tracking system that ensures tamper-proof record-keeping and verification.',
      technologies: ['Blockchain', 'Smart Contracts', 'JavaScript', 'Solidity', 'Web3'],
      details: 'This system leverages blockchain technology to create an immutable and secure attendance management solution. It uses smart contracts to automatically record and verify attendance data, eliminating the possibility of falsification. The system includes a user-friendly interface for both students and administrators.',
      image: 'https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'Library Management System',
      description: 'A comprehensive Python-based library management system for efficient book tracking and user management.',
      technologies: ['Python', 'SQLite', 'Flask', 'Bootstrap', 'Database Design'],
      details: 'This library management system streamlines book cataloging, borrowing, and returning processes. It features user authentication, book search functionality, borrowing history, and fine calculation for late returns. The application includes an admin dashboard for managing the library inventory and user accounts.',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      github: '#',
      demo: '#'
    }
  ];

  const ProjectModal = ({ project, onClose }) => (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64 overflow-hidden rounded-t-lg">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6">
          <h3 className="text-2xl font-bold text-slate-800 mb-2">{project.title}</h3>
          
          <p className="text-slate-600 mb-6">
            {project.details}
          </p>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-slate-700 mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex gap-4">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors"
            >
              <Github size={18} />
              View Code
            </a>
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section ref={ref} className="py-20 bg-slate-50" id="projects">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">My Projects</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience in AI, 
              machine learning, and software development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
                  <p className="text-slate-600 mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <button
                    onClick={() => setActiveProject(project)}
                    className="flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
                  >
                    View Details <ArrowRight size={16} className="ml-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {activeProject && (
        <ProjectModal 
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;