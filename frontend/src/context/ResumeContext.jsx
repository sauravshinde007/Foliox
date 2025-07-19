import React, { createContext, useContext, useState } from 'react';
import { initialResumeData } from '../data/formSchema';

const ResumeContext = createContext();

export const useResumeContext = () => {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error('useResumeContext must be used within a ResumeProvider');
  }
  return context;
};

export const ResumeProvider = ({ children }) => {
  const [resumeData, setResumeData] = useState(initialResumeData);
  const [selectedTemplate, setSelectedTemplate] = useState('minimal');

  const updateResumeData = (section, field, value, index = null) => {
    setResumeData(prev => {
      const newData = { ...prev };
      
      if (index !== null) {
        // Handle array fields (experience, education)
        newData[section] = [...prev[section]];
        newData[section][index] = {
          ...newData[section][index],
          [field]: value
        };
      } else {
        // Handle regular fields
        newData[section] = {
          ...prev[section],
          [field]: value
        };
      }
      
      return newData;
    });
  };

  const addArrayItem = (section, newItem) => {
    setResumeData(prev => ({
      ...prev,
      [section]: [...prev[section], newItem]
    }));
  };

  const removeArrayItem = (section, index) => {
    setResumeData(prev => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index)
    }));
  };

  const value = {
    resumeData,
    selectedTemplate,
    setSelectedTemplate,
    updateResumeData,
    addArrayItem,
    removeArrayItem
  };

  return (
    <ResumeContext.Provider value={value}>
      {children}
    </ResumeContext.Provider>
  );
};
