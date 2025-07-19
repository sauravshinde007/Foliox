import React from 'react';
import { ResumeProvider } from './context/ResumeContext';
import ResumeForm from './components/ResumeForm';
import LivePreview from './components/LivePreview';
import PDFGenerator from './components/PDFGenerator';

const App = () => (
  <ResumeProvider>
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Form */}
          <div className="lg:max-h-screen lg:overflow-y-auto lg:pr-4">
            <ResumeForm />
          </div>
          
          {/* Right Side - Live Preview */}
          <div className="lg:max-h-screen lg:overflow-y-auto lg:pl-4">
            <div className="lg:sticky lg:top-0">
              <LivePreview />
            </div>
          </div>
        </div>
      </div>
      
      {/* Download Button */}
      <PDFGenerator />
    </div>
  </ResumeProvider>
);

export default App;
