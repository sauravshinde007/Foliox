import React from 'react';
import { Mail, Phone, MapPin, Globe, Linkedin } from 'lucide-react';
import {
  Page, Text, Document, View, Link as PdfLink, StyleSheet
} from '@react-pdf/renderer';

// PDF Styles for Modern Template
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 0,
    fontFamily: 'Helvetica'
  },
  header: {
    backgroundColor: '#2563EB',
    color: '#FFFFFF',
    padding: 32,
    marginBottom: 0
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#FFFFFF'
  },
  contactGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8
  },
  contactInfo: {
    fontSize: 11,
    color: '#FFFFFF',
    marginBottom: 4,
    opacity: 0.9
  },
  linkText: {
    fontSize: 11,
    color: '#FFFFFF',
    marginBottom: 4
  },
  content: {
    padding: 32
  },
  section: {
    marginBottom: 24
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16
  },
  sectionLine: {
    width: 4,
    height: 24,
    backgroundColor: '#2563EB',
    marginRight: 12
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937'
  },
  sectionContent: {
    paddingLeft: 16
  },
  experienceItem: {
    marginBottom: 16,
    paddingLeft: 16,
    borderLeftWidth: 2,
    borderLeftColor: '#E5E7EB'
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 2
  },
  company: {
    fontSize: 13,
    color: '#2563EB',
    fontWeight: 'bold',
    marginBottom: 4
  },
  dateRange: {
    fontSize: 10,
    color: '#6B7280',
    backgroundColor: '#F3F4F6',
    padding: '4 8',
    borderRadius: 12,
    marginBottom: 8
  },
  description: {
    fontSize: 11,
    color: '#4B5563',
    lineHeight: 1.5
  },
  skillCategory: {
    marginBottom: 12
  },
  skillTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8
  },
  skillItem: {
    fontSize: 10,
    color: '#4B5563',
    marginBottom: 2
  },
  summary: {
    fontSize: 11,
    color: '#4B5563',
    lineHeight: 1.6,
    paddingLeft: 16
  }
});

const ModernTemplate = ({ data, isPdf = false }) => {
  const formatSkills = (skillsText) => {
    if (!skillsText) return [];
    return skillsText.split(',').map(skill => skill.trim()).filter(skill => skill);
  };

  if (isPdf) {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          {/* Header Section */}
          <View style={styles.header}>
            <Text style={styles.name}>{data.personal.name || 'Your Name'}</Text>
            
            <View style={styles.contactGrid}>
              {data.personal.email && (
                <Text style={styles.contactInfo}>Email: {data.personal.email}</Text>
              )}
              {data.personal.phone && (
                <Text style={styles.contactInfo}>Phone: {data.personal.phone}</Text>
              )}
              {data.personal.address && (
                <Text style={styles.contactInfo}>Address: {data.personal.address}</Text>
              )}
              {data.personal.linkedin && (
                <PdfLink src={data.personal.linkedin}>
                  <Text style={styles.linkText}>LinkedIn Profile</Text>
                </PdfLink>
              )}
              {data.personal.website && (
                <PdfLink src={data.personal.website}>
                  <Text style={styles.linkText}>Portfolio</Text>
                </PdfLink>
              )}
            </View>
          </View>

          {/* Main Content */}
          <View style={styles.content}>
            {/* Summary */}
            {data.personal.summary && (
              <View style={styles.section}>
                <View style={styles.sectionHeader}>
                  <View style={styles.sectionLine}></View>
                  <Text style={styles.sectionTitle}>About Me</Text>
                </View>
                <Text style={styles.summary}>{data.personal.summary}</Text>
              </View>
            )}

            {/* Experience */}
            {data.experience && data.experience.some(exp => exp.company) && (
              <View style={styles.section}>
                <View style={styles.sectionHeader}>
                  <View style={styles.sectionLine}></View>
                  <Text style={styles.sectionTitle}>Experience</Text>
                </View>
                {data.experience.map((exp, index) => (
                  exp.company && (
                    <View key={index} style={styles.experienceItem}>
                      <Text style={styles.jobTitle}>{exp.position}</Text>
                      <Text style={styles.company}>{exp.company}</Text>
                      <Text style={styles.dateRange}>
                        {exp.startDate} - {exp.endDate}
                      </Text>
                      {exp.description && (
                        <Text style={styles.description}>{exp.description}</Text>
                      )}
                    </View>
                  )
                ))}
              </View>
            )}

            {/* Education */}
            {data.education && data.education.some(edu => edu.school) && (
              <View style={styles.section}>
                <View style={styles.sectionHeader}>
                  <View style={styles.sectionLine}></View>
                  <Text style={styles.sectionTitle}>Education</Text>
                </View>
                <View style={styles.sectionContent}>
                  {data.education.map((edu, index) => (
                    edu.school && (
                      <View key={index} style={{ marginBottom: 12 }}>
                        <Text style={styles.jobTitle}>{edu.degree}</Text>
                        <Text style={styles.company}>{edu.school}</Text>
                        {edu.field && <Text style={styles.description}>{edu.field}</Text>}
                        <Text style={styles.dateRange}>
                          {edu.year} {edu.gpa && `• GPA: ${edu.gpa}`}
                        </Text>
                      </View>
                    )
                  ))}
                </View>
              </View>
            )}

            {/* Skills */}
            {(data.skills.technical || data.skills.languages) && (
              <View style={styles.section}>
                <View style={styles.sectionHeader}>
                  <View style={styles.sectionLine}></View>
                  <Text style={styles.sectionTitle}>Skills</Text>
                </View>
                
                <View style={styles.sectionContent}>
                  {data.skills.technical && (
                    <View style={styles.skillCategory}>
                      <Text style={styles.skillTitle}>Technical Skills</Text>
                      {formatSkills(data.skills.technical).map((skill, index) => (
                        <Text key={index} style={styles.skillItem}>• {skill}</Text>
                      ))}
                    </View>
                  )}
                  
                  {data.skills.languages && (
                    <View style={styles.skillCategory}>
                      <Text style={styles.skillTitle}>Languages</Text>
                      {formatSkills(data.skills.languages).map((lang, index) => (
                        <Text key={index} style={styles.skillItem}>• {lang}</Text>
                      ))}
                    </View>
                  )}
                </View>
              </View>
            )}
          </View>
        </Page>
      </Document>
    );
  }

  // Browser preview
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
