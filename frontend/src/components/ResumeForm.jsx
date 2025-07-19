import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { useResumeContext } from '../context/ResumeContext';
import { formSections } from '../data/formSchema';

const FormField = ({ field, value, onChange, section, index = null }) => {
  const handleChange = (e) => {
    onChange(section, field.name, e.target.value, index);
  };

  if (field.type === 'textarea') {
    return (
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {field.label} {field.required && <span className="text-red-500">*</span>}
        </label>
        <textarea
          className="form-textarea"
          value={value || ''}
          onChange={handleChange}
          placeholder={field.placeholder}
          rows={field.rows || 3}
          required={field.required}
        />
      </div>
    );
  }

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {field.label} {field.required && <span className="text-red-500">*</span>}
      </label>
      <input
        className="form-input"
        type={field.type}
        value={value || ''}
        onChange={handleChange}
        placeholder={field.placeholder}
        required={field.required}
      />
    </div>
  );
};

const ArraySection = ({ section, data, updateResumeData, addArrayItem, removeArrayItem }) => {
  const handleAddItem = () => {
    const newItem = {};
    section.fields.forEach(field => {
      newItem[field.name] = '';
    });
    addArrayItem(section.id, newItem);
  };

  const handleRemoveItem = (index) => {
    if (data.length > 1) {
      removeArrayItem(section.id, index);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <span>{section.icon}</span>
          {section.title}
        </h3>
        <button
          onClick={handleAddItem}
          className="btn btn-primary flex items-center gap-2 text-sm"
        >
          <Plus size={16} />
          Add {section.title.slice(0, -1)}
        </button>
      </div>

      {data.map((item, index) => (
        <div key={index} className="border border-gray-100 rounded-lg p-4 mb-4 bg-gray-50">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-medium text-gray-800">
              {section.title.slice(0, -1)} {index + 1}
            </h4>
            {data.length > 1 && (
              <button
                onClick={() => handleRemoveItem(index)}
                className="text-red-500 hover:text-red-700 p-1"
              >
                <Trash2 size={16} />
              </button>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {section.fields.map(field => (
              <div key={field.name} className={field.type === 'textarea' ? 'md:col-span-2' : ''}>
                <FormField
                  field={field}
                  value={item[field.name]}
                  onChange={updateResumeData}
                  section={section.id}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const RegularSection = ({ section, data, updateResumeData }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2 mb-6">
        <span>{section.icon}</span>
        {section.title}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {section.fields.map(field => (
          <div key={field.name} className={field.type === 'textarea' ? 'md:col-span-2' : ''}>
            <FormField
              field={field}
              value={data[field.name]}
              onChange={updateResumeData}
              section={section.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const ResumeForm = () => {
  const { resumeData, updateResumeData, addArrayItem, removeArrayItem } = useResumeContext();

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Resume Builder</h2>
        <p className="text-gray-600">Fill in your information to generate a professional resume</p>
      </div>

      {formSections.map(section => (
        <div key={section.id}>
          {section.isArray ? (
            <ArraySection
              section={section}
              data={resumeData[section.id]}
              updateResumeData={updateResumeData}
              addArrayItem={addArrayItem}
              removeArrayItem={removeArrayItem}
            />
          ) : (
            <RegularSection
              section={section}
              data={resumeData[section.id]}
              updateResumeData={updateResumeData}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ResumeForm;
