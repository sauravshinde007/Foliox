import React from 'react';
import { Download } from 'lucide-react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { useResumeContext } from '../../context/ResumeContext';
import { getTemplate } from '../../utils/templateRegistry';

const PDFGenerator = () => {
  const { resumeData, selectedTemplate } = useResumeContext();
  const template = getTemplate(selectedTemplate);
  const TemplateComponent = template?.component;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {TemplateComponent && (
        <PDFDownloadLink
          document={<TemplateComponent data={resumeData} isPdf={true} />}
          fileName={`${resumeData.personal.name || 'resume'}.pdf`}
        >
          {({ loading }) => (
            <button
              className="btn btn-primary flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
              disabled={loading}
            >
              <Download size={20} />
              {loading ? 'Generating...' : 'Download PDF'}
            </button>
          )}
        </PDFDownloadLink>
      )}
    </div>
  );
};

export default PDFGenerator;
