import React from 'react';
import { useNavigate } from 'react-router-dom';
import TemplateCard from '../components/common/TemplateCard';
import { FileText, Briefcase, Download, Zap, Star, Globe } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  const resumeTemplates = [
    {
      id: 'minimal',
      name: 'Minimal',
      description: 'Clean black & white professional design',
      type: 'resume',
      features: ['ATS-Friendly', 'Clean Layout', 'Professional']
    },
    {
      id: 'modern',
      name: 'Modern',
      description: 'Professional blue theme with structured layout',
      type: 'resume',
      features: ['Contemporary', 'Structured', 'Corporate']
    },
    {
      id: 'creative',
      name: 'Creative',
      description: 'Colorful artistic professional design',
      type: 'resume',
      features: ['Colorful', 'Artistic', 'Eye-catching']
    }
  ];

  const portfolioTemplates = [
    {
      id: 'developer',
      name: 'Developer Portfolio',
      description: 'Showcase your coding projects and technical skills',
      type: 'portfolio',
      features: ['Project Gallery', 'GitHub Integration', 'Tech Stack'],
      comingSoon: true
    },
    {
      id: 'designer',
      name: 'Designer Portfolio',
      description: 'Visual portfolio for creative professionals',
      type: 'portfolio',
      features: ['Image Gallery', 'Case Studies', 'Visual Focus'],
      comingSoon: true
    },
    {
      id: 'business',
      name: 'Business Portfolio',
      description: 'Professional portfolio for business leaders',
      type: 'portfolio',
      features: ['Achievement Focus', 'Leadership', 'Corporate'],
      comingSoon: true
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to <span className="text-yellow-300">Foliox</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Create stunning resumes and portfolios with live preview and professional PDF export
          </p>
          <p className="text-lg mb-12 opacity-90">
            Built for professionals who want to stand out
          </p>
          
          {/* Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <Zap className="w-12 h-12 mx-auto mb-3 text-yellow-300" />
              <p className="text-sm font-medium">Live Preview</p>
            </div>
            <div className="text-center">
              <FileText className="w-12 h-12 mx-auto mb-3 text-yellow-300" />
              <p className="text-sm font-medium">Multiple Templates</p>
            </div>
            <div className="text-center">
              <Download className="w-12 h-12 mx-auto mb-3 text-yellow-300" />
              <p className="text-sm font-medium">PDF Export</p>
            </div>
            <div className="text-center">
              <Briefcase className="w-12 h-12 mx-auto mb-3 text-yellow-300" />
              <p className="text-sm font-medium">Professional</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Templates */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Resume Templates</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Professional resume templates with live preview and instant PDF download
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {resumeTemplates.map((template) => (
              <TemplateCard
                key={template.id}
                template={template}
                onClick={() => navigate(`/resume/${template.id}`)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Templates (Coming Soon) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfolio Templates</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Coming Soon - Create deployable portfolio websites to showcase your work
            </p>
            <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
              <Star className="w-4 h-4" />
              Under Development
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {portfolioTemplates.map((template) => (
              <TemplateCard
                key={template.id}
                template={template}
                onClick={() => {}}
                disabled
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Foliox?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time Preview</h3>
              <p className="text-gray-600">See changes instantly as you type with our live preview feature</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional PDFs</h3>
              <p className="text-gray-600">Download high-quality PDFs with selectable text and clickable links</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Portfolio Websites</h3>
              <p className="text-gray-600">Coming soon - Deploy your portfolio as a live website</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
