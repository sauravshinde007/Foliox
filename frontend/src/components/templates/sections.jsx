import React from 'react';
import { Text, View, Link as PdfLink } from '@react-pdf/renderer';

// Header Renderers - THESE WERE MISSING
export const renderMinimalHeader = (data, styles, isPdf) => {
  // This is handled directly in BaseTemplate now
  return null;
};

export const renderModernHeader = (data, styles, isPdf) => {
  // This is handled directly in BaseTemplate now  
  return null;
};

// Section Renderers with GPA and Horizontal Skills
export const summarySection = {
  title: 'Professional Summary',
  renderPdf: (data, styles) => (
    <Text style={styles.summaryText}>
      {data?.personal?.summary || 'Professional summary will appear here when filled out.'}
    </Text>
  ),
  renderWeb: (data, styles) => (
    <p className={styles.summaryText}>
      {data.personal.summary || 'Professional summary will appear here when filled out.'}
    </p>
  )
};

export const experienceSection = {
  title: 'Work Experience',
  renderPdf: (data, styles) => (
    <>
      {data?.experience && data.experience.length > 0 ? (
        data.experience.map((exp, index) => (
          <View key={index} style={styles.experienceItem}>
            <View style={styles.experienceHeader}>
              <View style={{ flex: 1 }}>
                <Text style={styles.jobTitle}>{exp?.position || 'Job Title'}</Text>
                <Text style={styles.company}>{exp?.company || 'Company Name'}</Text>
              </View>
              <Text style={styles.dateRange}>
                {exp?.startDate || 'Start'} - {exp?.endDate || 'End'}
              </Text>
            </View>
            {exp?.description && (
              <Text style={styles.description}>{exp.description}</Text>
            )}
          </View>
        ))
      ) : (
        <Text style={styles.description}>Work experience will appear here when added.</Text>
      )}
    </>
  ),
  renderWeb: (data, styles) => (
    <>
      {data.experience && data.experience.length > 0 ? (
        data.experience.map((exp, index) => (
          <div key={index} className={styles.experienceItem}>
            <div className={styles.experienceHeader}>
              <div>
                <h3 className={styles.jobTitle}>{exp.position || 'Job Title'}</h3>
                <p className={styles.company}>{exp.company || 'Company Name'}</p>
              </div>
              <span className={styles.dateRange}>
                {exp.startDate || 'Start'} - {exp.endDate || 'End'}
              </span>
            </div>
            {exp.description && (
              <p className={styles.description}>{exp.description}</p>
            )}
          </div>
        ))
      ) : (
        <p className={styles.description}>Work experience will appear here when added.</p>
      )}
    </>
  )
};

export const educationSection = {
  title: 'Education',
  renderPdf: (data, styles) => (
    <>
      {data?.education && data.education.length > 0 ? (
        data.education.map((edu, index) => (
          <View key={index} style={styles.educationItem}>
            <View style={styles.educationHeader}>
              <View style={{ flex: 1 }}>
                <Text style={styles.degree}>{edu?.degree || 'Degree'}</Text>
                <Text style={styles.school}>{edu?.school || 'School Name'}</Text>
                {edu?.field && <Text style={styles.field}>{edu.field}</Text>}
              </View>
              <View style={styles.yearGpa}>
                <Text style={styles.year}>{edu?.year || 'Year'}</Text>
                {edu?.gpa && <Text style={styles.gpa}>GPA: {edu.gpa}</Text>}
              </View>
            </View>
          </View>
        ))
      ) : (
        <Text style={styles.description}>Education details will appear here when added.</Text>
      )}
    </>
  ),
  renderWeb: (data, styles) => (
    <>
      {data.education && data.education.length > 0 ? (
        data.education.map((edu, index) => (
          <div key={index} className={styles.educationItem}>
            <div className={styles.educationHeader}>
              <div>
                <h3 className={styles.degree}>{edu.degree || 'Degree'}</h3>
                <p className={styles.school}>{edu.school || 'School Name'}</p>
                {edu.field && <p className={styles.field}>{edu.field}</p>}
              </div>
              <div className={styles.yearGpa}>
                <span className={styles.year}>{edu.year || 'Year'}</span>
                {edu.gpa && <div className={styles.gpa}>GPA: {edu.gpa}</div>}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className={styles.description}>Education details will appear here when added.</p>
      )}
    </>
  )
};

export const skillsSection = {
  title: 'Skills',
  renderPdf: (data, styles, formatSkills) => (
    <>
      {/* Technical Skills - Horizontal Layout */}
      <View style={styles.skillCategory}>
        <Text style={styles.skillTitle}>Technical Skills</Text>
        <View style={styles.skillsRow}>
          {data?.skills?.technical ? (
            formatSkills(data.skills.technical).map((skill, index) => (
              <Text key={index} style={styles.skillTag}>{skill}</Text>
            ))
          ) : (
            <Text style={styles.description}>Technical skills will appear here when added</Text>
          )}
        </View>
      </View>
      
      {/* Languages - Horizontal Layout */}
      <View style={styles.skillCategory}>
        <Text style={styles.skillTitle}>Languages</Text>
        <View style={styles.skillsRow}>
          {data?.skills?.languages ? (
            formatSkills(data.skills.languages).map((lang, index) => (
              <Text key={index} style={styles.skillTag}>{lang}</Text>
            ))
          ) : (
            <Text style={styles.description}>Languages will appear here when added</Text>
          )}
        </View>
      </View>
    </>
  ),
  renderWeb: (data, styles, formatSkills) => (
    <>
      {/* Technical Skills - Horizontal Layout */}
      <div className={styles.skillCategory}>
        <h3 className={styles.skillTitle}>Technical Skills</h3>
        <div className={styles.skillsRow}>
          {data.skills.technical ? (
            formatSkills(data.skills.technical).map((skill, index) => (
              <span key={index} className={styles.skillTag}>{skill}</span>
            ))
          ) : (
            <span className={styles.description}>Technical skills will appear here when added</span>
          )}
        </div>
      </div>
      
      {/* Languages - Horizontal Layout */}
      <div className={styles.skillCategory}>
        <h3 className={styles.skillTitle}>Languages</h3>
        <div className={styles.skillsRow}>
          {data.skills.languages ? (
            formatSkills(data.skills.languages).map((lang, index) => (
              <span key={index} className={styles.skillTag}>{lang}</span>
            ))
          ) : (
            <span className={styles.description}>Languages will appear here when added</span>
          )}
        </div>
      </div>
    </>
  )
};
