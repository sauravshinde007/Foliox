import React from 'react';
import { Mail, Phone, MapPin, Globe, Linkedin } from 'lucide-react';
import {
  Page, Text, Document, View, Link as PdfLink
} from '@react-pdf/renderer';

const BaseTemplate = ({ data, templateConfig, isPdf = false }) => {
  const formatSkills = (skillsText) => {
    if (!skillsText) return [];
    return skillsText.split(',').map(skill => skill.trim()).filter(skill => skill);
  };

  // DEBUG: Log data in both modes
  console.log('BaseTemplate - isPdf:', isPdf);
  console.log('BaseTemplate - data:', data);
  console.log('BaseTemplate - personal data:', data?.personal);

  if (isPdf) {
    const { pdfStyles } = templateConfig;
    
    // DEBUG: Specific PDF logging
    console.log('PDF Mode - Email:', data?.personal?.email);
    console.log('PDF Mode - Phone:', data?.personal?.phone);
    console.log('PDF Mode - Address:', data?.personal?.address);
    
    return (
      <Document>
        <Page size="A4" style={pdfStyles.page}>
          <View style={pdfStyles.personalSection}>
            <Text style={pdfStyles.name}>
              {data?.personal?.name || 'Your Name'}
            </Text>
            
            {/* FORCE RENDER ALL CONTACT INFO - NO CONDITIONALS */}
            <Text style={pdfStyles.contactInfo}>
              Email: {data?.personal?.email || 'Email not provided'}
            </Text>
            <Text style={pdfStyles.contactInfo}>
              Phone: {data?.personal?.phone || 'Phone not provided'}
            </Text>
            <Text style={pdfStyles.contactInfo}>
              Address: {data?.personal?.address || 'Address not provided'}
            </Text>
            
            {/* Links with fallbacks */}
            {data?.personal?.linkedin ? (
              <PdfLink src={data.personal.linkedin}>
                <Text style={pdfStyles.linkText}>LinkedIn: {data.personal.linkedin}</Text>
              </PdfLink>
            ) : (
              <Text style={pdfStyles.linkText}>LinkedIn: Not provided</Text>
            )}
            
            {data?.personal?.website ? (
              <PdfLink src={data.personal.website}>
                <Text style={pdfStyles.linkText}>Website: {data.personal.website}</Text>
              </PdfLink>
            ) : (
              <Text style={pdfStyles.linkText}>Website: Not provided</Text>
            )}
          </View>

          {/* Dynamic Sections */}
          {templateConfig.sections.map((section, index) => (
            <View key={index} style={pdfStyles.section}>
              <Text style={pdfStyles.sectionTitle}>{section.title}</Text>
              {section.renderPdf(data, pdfStyles, formatSkills)}
            </View>
          ))}
        </Page>
      </Document>
    );
  }

  // Web Preview - Also add debugging
  const { webClasses } = templateConfig;
  console.log('Web Mode - Email:', data?.personal?.email);
  console.log('Web Mode - Phone:', data?.personal?.phone);
  console.log('Web Mode - Address:', data?.personal?.address);
  
  return (
    <div className={webClasses.container}>
      <div className={webClasses.content}>
        <div className={webClasses.personalSection}>
          <h1 className={webClasses.name}>
            {data.personal.name || 'Your Name'}
          </h1>
          
          {/* FORCE RENDER ALL CONTACT INFO - NO CONDITIONALS */}
          <div className={webClasses.contactContainer}>
            <div>Email: {data?.personal?.email || 'Email not provided'}</div>
            <div>Phone: {data?.personal?.phone || 'Phone not provided'}</div>
            <div>Address: {data?.personal?.address || 'Address not provided'}</div>
          </div>
          
          <div className={webClasses.linkContainer}>
            {data.personal.linkedin ? (
              <a href={data.personal.linkedin} className={webClasses.linkText} target="_blank" rel="noopener noreferrer">
                LinkedIn: {data.personal.linkedin}
              </a>
            ) : (
              <div className={webClasses.linkText}>LinkedIn: Not provided</div>
            )}
            {data.personal.website ? (
              <a href={data.personal.website} className={webClasses.linkText} target="_blank" rel="noopener noreferrer">
                Website: {data.personal.website}
              </a>
            ) : (
              <div className={webClasses.linkText}>Website: Not provided</div>
            )}
          </div>
        </div>

        {/* Dynamic Sections */}
        {templateConfig.sections.map((section, index) => (
          <div key={index} className={webClasses.section}>
            <h2 className={webClasses.sectionTitle}>{section.title}</h2>
            {section.renderWeb(data, webClasses, formatSkills)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BaseTemplate;
