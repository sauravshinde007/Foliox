import React from 'react';
import { Mail, Phone, MapPin, Globe, Linkedin } from 'lucide-react';

const MinimalTemplate = ({ data }) => {
  const formatSkills = (skillsText) => {
    if (!skillsText) return [];
    return skillsText.split(',').map(skill => skill.trim()).filter(skill => skill);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto">
      <div className="p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {data.personal.name || 'Your Name'}
          </h1>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            {data.personal.email && (
              <div className="flex items-center gap-1">
                <Mail size={16} />
                <span>{data.personal.email}</span>
              </div>
            )}
            {data.personal.phone && (
              <div className="flex items-center gap-1">
                <Phone size={16} />
                <span>{data.personal.phone}</span>
              </div>
            )}
            {data.personal.address && (
              <div className="flex items-center gap-1">
                <MapPin size={16} />
                <span>{data.personal.address}</span>
              </div>
            )}
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mt-2">
            {data.personal.linkedin && (
              <div className="flex items-center gap-1">
                <Linkedin size={16} />
                <a href={data.personal.linkedin} className="text-blue-600 hover:underline">
                  LinkedIn
                </a>
              </div>
            )}
            {data.personal.website && (
              <div className="flex items-center gap-1">
                <Globe size={16} />
                <a href={data.personal.website} className="text-blue-600 hover:underline">
                  Website
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Summary */}
        {data.personal.summary && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3 border-b-2 border-gray-200 pb-1">
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">{data.personal.summary}</p>
          </div>
        )}

        {/* Experience */}
        {data.experience && data.experience.some(exp => exp.company) && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b-2 border-gray-200 pb-1">
              Work Experience
            </h2>
            {data.experience.map((exp, index) => (
              exp.company && (
                <div key={index} className="mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{exp.position}</h3>
                      <p className="text-gray-600 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-500">
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                  {exp.description && (
                    <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                  )}
                </div>
              )
            ))}
          </div>
        )}

        {/* Education */}
        {data.education && data.education.some(edu => edu.school) && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b-2 border-gray-200 pb-1">
              Education
            </h2>
            {data.education.map((edu, index) => (
              edu.school && (
                <div key={index} className="mb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{edu.degree}</h3>
                      <p className="text-gray-600">{edu.school}</p>
                      {edu.field && <p className="text-gray-600">{edu.field}</p>}
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-gray-500">{edu.year}</span>
                      {edu.gpa && <p className="text-sm text-gray-500">GPA: {edu.gpa}</p>}
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        )}

        {/* Skills */}
        {(data.skills.technical || data.skills.languages) && (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b-2 border-gray-200 pb-1">
              Skills
            </h2>
            
            {data.skills.technical && (
              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {formatSkills(data.skills.technical).map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {data.skills.languages && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {formatSkills(data.skills.languages).map((lang, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MinimalTemplate;
