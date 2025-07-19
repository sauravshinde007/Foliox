import React from 'react';
import { Mail, Phone, MapPin, Globe, Linkedin } from 'lucide-react';

const ModernTemplate = ({ data }) => {
  const formatSkills = (skillsText) => {
    if (!skillsText) return [];
    return skillsText.split(',').map(skill => skill.trim()).filter(skill => skill);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
        <h1 className="text-4xl font-bold mb-4">
          {data.personal.name || 'Your Name'}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm opacity-90">
          {data.personal.email && (
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>{data.personal.email}</span>
            </div>
          )}
          {data.personal.phone && (
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>{data.personal.phone}</span>
            </div>
          )}
          {data.personal.address && (
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>{data.personal.address}</span>
            </div>
          )}
          {data.personal.linkedin && (
            <div className="flex items-center gap-2">
              <Linkedin size={16} />
              <a href={data.personal.linkedin} className="hover:underline">
                LinkedIn Profile
              </a>
            </div>
          )}
          {data.personal.website && (
            <div className="flex items-center gap-2">
              <Globe size={16} />
              <a href={data.personal.website} className="hover:underline">
                Portfolio
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="p-8">
        {/* Summary */}
        {data.personal.summary && (
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div className="w-1 h-6 bg-blue-600 mr-3"></div>
              <h2 className="text-2xl font-bold text-gray-900">About Me</h2>
            </div>
            <p className="text-gray-700 leading-relaxed pl-4">{data.personal.summary}</p>
          </div>
        )}

        {/* Experience */}
        {data.experience && data.experience.some(exp => exp.company) && (
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-1 h-6 bg-blue-600 mr-3"></div>
              <h2 className="text-2xl font-bold text-gray-900">Experience</h2>
            </div>
            {data.experience.map((exp, index) => (
              exp.company && (
                <div key={index} className="mb-6 pl-4 border-l-2 border-gray-100">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{exp.position}</h3>
                      <p className="text-blue-600 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-600">
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                  {exp.description && (
                    <p className="text-gray-700 leading-relaxed mt-3">{exp.description}</p>
                  )}
                </div>
              )
            ))}
          </div>
        )}

        {/* Education */}
        {data.education && data.education.some(edu => edu.school) && (
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div className="w-1 h-6 bg-blue-600 mr-3"></div>
              <h2 className="text-2xl font-bold text-gray-900">Education</h2>
            </div>
            {data.education.map((edu, index) => (
              edu.school && (
                <div key={index} className="mb-4 pl-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
                      <p className="text-blue-600">{edu.school}</p>
                      {edu.field && <p className="text-gray-600">{edu.field}</p>}
                    </div>
                    <div className="text-right">
                      <span className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-600">
                        {edu.year}
                      </span>
                      {edu.gpa && <p className="text-sm text-gray-500 mt-1">GPA: {edu.gpa}</p>}
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
            <div className="flex items-center mb-6">
              <div className="w-1 h-6 bg-blue-600 mr-3"></div>
              <h2 className="text-2xl font-bold text-gray-900">Skills</h2>
            </div>
            
            <div className="pl-4 space-y-4">
              {data.skills.technical && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {formatSkills(data.skills.technical).map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800 rounded-lg text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {data.skills.languages && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {formatSkills(data.skills.languages).map((lang, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 text-gray-800 rounded-lg text-sm font-medium"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModernTemplate;
