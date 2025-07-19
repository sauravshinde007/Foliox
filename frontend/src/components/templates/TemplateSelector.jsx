import React from 'react';
import { Check } from 'lucide-react';
import { useResumeContext } from '../../context/ResumeContext';
import { templates } from '../../utils/templateRegistry';

const TemplateSelector = () => {
  const { selectedTemplate, setSelectedTemplate } = useResumeContext();

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Template</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {templates.map(template => (
          <div
            key={template.id}
            className={`relative border-2 rounded-lg p-4 cursor-pointer transition-all ${
              selectedTemplate === template.id
                ? 'border-primary-500 bg-primary-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => setSelectedTemplate(template.id)}
          >
            {selectedTemplate === template.id && (
              <div className="absolute top-2 right-2 bg-primary-500 text-white rounded-full p-1">
                <Check size={16} />
              </div>
            )}
            
            <div className="aspect-[3/4] bg-gray-100 rounded mb-3 flex items-center justify-center">
              <span className="text-gray-500 text-sm">Preview</span>
            </div>
            
            <h4 className="font-medium text-gray-900">{template.name}</h4>
            <p className="text-sm text-gray-600">{template.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;
