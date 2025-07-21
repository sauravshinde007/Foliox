import React from 'react';
import { useResumeContext } from "../../context/ResumeContext";
import { getTemplate } from "../../utils/templateRegistry";
// import TemplateSelector from './templates/TemplateSelector';

const LivePreview = () => {
  const { resumeData, selectedTemplate } = useResumeContext();
  const template = getTemplate(selectedTemplate);
  const TemplateComponent = template?.component;

  return (
    <div className="space-y-6">
      {/* <TemplateSelector /> */}
      
      <div className="bg-gray-100 p-4 rounded-lg">
        <div className="transform scale-75 origin-top w-[133%] -ml-[16.5%]">
          {TemplateComponent && (
            <TemplateComponent data={resumeData} isPdf={false} />
          )}
        </div>
      </div>
    </div>
  );
};

export default LivePreview;
