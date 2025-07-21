import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';
import { useResumeContext } from '../context/ResumeContext';
import { getTemplate } from '../utils/templateRegistry';
import ResumeForm from '../components/resume/ResumeForm';
import LivePreview from '../components/resume/LivePreview';
import PDFGenerator from '../components/resume/PDFGenerator';

// const { resumeData } = useResumeContext();
// console.log('Current resume data:', resumeData);

const ResumeBuilder = () => {
  const { templateId } = useParams();
  const navigate = useNavigate();
  const { selectedTemplate, setSelectedTemplate } = useResumeContext();
  
  const template = getTemplate(templateId);

  useEffect(() => {
    if (template) {
      setSelectedTemplate(templateId);
    }
  }, [templateId, template, setSelectedTemplate]);

  if (!template) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Template not found</h2>
          <p className="text-gray-600 mb-6">The requested template doesn't exist or is not available.</p>
          <button 
            onClick={() => navigate('/')}
            className="btn btn-primary"
          >
            Back to Templates
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-40">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Templates
            </button>
            <div className="h-6 w-px bg-gray-300"></div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">
                {template.name} Resume Builder
              </h1>
              <p className="text-sm text-gray-600">{template.description}</p>
            </div>
          </div>
          
          {/* Download Button in Header */}
          <div className="hidden md:block">
            <PDFGenerator />
          </div>
        </div>
      </div>

      {/* Builder Interface */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="lg:max-h-screen lg:overflow-y-auto lg:pr-4">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Build Your Resume</h2>
              <p className="text-gray-600 text-sm">
                Fill in your information below and see the live preview update automatically.
              </p>
            </div>
            <ResumeForm />
          </div>
          
          {/* Preview Section */}
          <div className="lg:max-h-screen lg:overflow-y-auto lg:pl-4">
            <div className="lg:sticky lg:top-24">
              <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Live Preview</h3>
                    <p className="text-sm text-gray-600">
                      Changes are reflected instantly
                    </p>
                  </div>
                  {/* Mobile Download Button */}
                  <div className="md:hidden">
                    <PDFGenerator />
                  </div>
                </div>
              </div>
              <LivePreview />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
