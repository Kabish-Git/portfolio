import React from 'react';
import { Link } from 'react-scroll';
import { Github, Linkedin, Mail, Code, ChevronUp, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <Code size={24} className="text-indigo-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Kabish D
            </span>
          </div>

          <div className="flex space-x-6">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/kabish.D74" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:kabishd74@gmail.com" className="text-slate-300 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>

          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="bg-indigo-600 hover:bg-indigo-700 p-2 rounded-full cursor-pointer transition-colors mt-6 md:mt-0"
          >
            <ChevronUp size={20} />
          </Link>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <p className="text-slate-300 leading-relaxed">
                AI Engineer and Data Analyst passionate about solving real-world problems through 
                data-driven insights and innovative technology solutions.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link
                      to={item.toLowerCase()}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="text-slate-300 hover:text-indigo-400 transition-colors cursor-pointer"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start">
                  <Mail size={18} className="mt-1 mr-3 text-indigo-400 shrink-0" />
                  <span>kabishd74@gmail.com</span>
                </li>
                <li className="flex items-start">
                  <Phone size={18} className="mt-1 mr-3 text-indigo-400 shrink-0" />
                  <span>+91-7418836307</span>
                </li>
                <li className="flex items-start">
                  <MapPin size={18} className="mt-1 mr-3 text-indigo-400 shrink-0" />
                  <span>Karambakudi, Pudukottai, Tamil Nadu</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 pt-6 border-t border-slate-700 text-slate-400">
          <p>© {new Date().getFullYear()} Kabish D. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;