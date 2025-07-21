import React from 'react';
import { Heart, Github, FileText } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-6 h-6 text-blue-400" />
              <span className="text-xl font-bold">
                Foli<span className="text-blue-400">ox</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Create professional resumes and portfolios with ease. Built for the modern job seeker.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Templates</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/resume/minimal" className="hover:text-white transition-colors">Minimal Resume</a></li>
              <li><a href="/resume/modern" className="hover:text-white transition-colors">Modern Resume</a></li>
              <li><a href="/resume/creative" className="hover:text-white transition-colors">Creative Resume</a></li>
              <li><span className="text-gray-500">Portfolio Templates (Coming Soon)</span></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="space-y-2">
              <a 
                href="https://github.com/sauravshinde007/Foliox"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Github size={16} />
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-1">
            Made by <Heart size={16} className="text-red-500" /> Saurav Shinde
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
