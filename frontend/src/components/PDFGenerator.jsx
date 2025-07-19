import React from 'react';
import { Document, Page, Text, View, StyleSheet, Link, PDFDownloadLink } from '@react-pdf/renderer';
import { Download } from 'lucide-react';
import { useResumeContext } from '../context/ResumeContext';

// PDF Styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 30,
    fontFamily: 'Helvetica'
  },
  header: {
    marginBottom: 20,
    textAlign: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#3B82F6',
    paddingBottom: 15
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#1F2937'
  },
  contactInfo: {
    fontSize: 10,
    color: '#6B7280',
    marginBottom: 2
  },
  section: {
    marginBottom: 15
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#1F2937',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    paddingBottom: 3
  },
  experienceItem: {
    marginBottom: 10
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1F2937'
  },
  company: {
    fontSize: 11,
    color: '#3B82F6',
    marginBottom: 2
  },
  dateRange: {
    fontSize: 9,
    color: '#6B7280',
    marginBottom: 3
  },
  description: {
    fontSize: 10,
    color: '#4B5563',
    lineHeight: 1.4
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  skill: {
    fontSize: 9,
    backgroundColor: '#F3F4F6',
    color: '#374151',
    padding: '3 8',
    marginRight: 5,
    marginBottom: 3,
    borderRadius: 3
  },
  summary: {
    fontSize: 10,
    color: '#4B5563',
    lineHeight: 1.5,
    textAlign: 'justify'
  }
});

// PDF Document Component
const ResumePDF = ({ data }) => {
  const formatSkills = (skillsText) => {
    if (!skillsText) return [];
    return skillsText.split(',').map(skill => skill.trim()).filter(skill => skill);
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{data.personal.name || 'Your Name'}</Text>
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
            <Link src={data.personal.linkedin}>
              <Text style={[styles.contactInfo, { color: '#3B82F6' }]}>
                LinkedIn: {data.personal.linkedin}
              </Text>
            </Link>
          )}
          {data.personal.website && (
            <Link src={data.personal.website}>
              <Text style={[styles.contactInfo, { color: '#3B82F6' }]}>
                Website: {data.personal.website}
              </Text>
            </Link>
          )}
        </View>

        {/* Summary */}
        {data.personal.summary && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Professional Summary</Text>
            <Text style={styles.summary}>{data.personal.summary}</Text>
          </View>
        )}

        {/* Experience */}
        {data.experience && data.experience.some(exp => exp.company) && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Work Experience</Text>
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
            <Text style={styles.sectionTitle}>Education</Text>
            {data.education.map((edu, index) => (
              edu.school && (
                <View key={index} style={styles.experienceItem}>
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
        )}

        {/* Skills */}
        {(data.skills.technical || data.skills.languages) && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            
            {data.skills.technical && (
              <View style={{ marginBottom: 8 }}>
                <Text style={[styles.description, { fontWeight: 'bold', marginBottom: 4 }]}>
                  Technical Skills:
                </Text>
                <View style={styles.skillsContainer}>
                  {formatSkills(data.skills.technical).map((skill, index) => (
                    <Text key={index} style={styles.skill}>{skill}</Text>
                  ))}
                </View>
              </View>
            )}
            
            {data.skills.languages && (
              <View>
                <Text style={[styles.description, { fontWeight: 'bold', marginBottom: 4 }]}>
                  Languages:
                </Text>
                <View style={styles.skillsContainer}>
                  {formatSkills(data.skills.languages).map((lang, index) => (
                    <Text key={index} style={styles.skill}>{lang}</Text>
                  ))}
                </View>
              </View>
            )}
          </View>
        )}
      </Page>
    </Document>
  );
};

const PDFGenerator = () => {
  const { resumeData } = useResumeContext();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <PDFDownloadLink
        document={<ResumePDF data={resumeData} />}
        fileName={`${resumeData.personal.name || 'resume'}.pdf`}
      >
        {({ loading }) => (
          <button
            className="btn-primary flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            disabled={loading}
          >
            <Download size={20} />
            {loading ? 'Generating...' : 'Download PDF'}
          </button>
        )}
      </PDFDownloadLink>
    </div>
  );
};

export default PDFGenerator;
