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

  if (isPdf) {
    const { pdfStyles } = templateConfig;
    
    return (
      <Document>
        <Page size="A4" style={pdfStyles.page}>
          <View style={pdfStyles.personalSection}>
            <Text style={pdfStyles.name}>
              {data?.personal?.name || 'Your Name'}
            </Text>
            
            {/* Only render contact info if it exists */}
            {data?.personal?.email && (
              <Text style={pdfStyles.contactInfo}>Email: {data.personal.email}</Text>
            )}
            {data?.personal?.phone && (
              <Text style={pdfStyles.contactInfo}>Phone: {data.personal.phone}</Text>
            )}
            {data?.personal?.address && (
              <Text style={pdfStyles.contactInfo}>Address: {data.personal.address}</Text>
            )}
            
            {/* Links */}
            {data?.personal?.linkedin && (
              <PdfLink src={data.personal.linkedin}>
                <Text style={pdfStyles.linkText}>LinkedIn: {data.personal.linkedin}</Text>
              </PdfLink>
            )}
            {data?.personal?.website && (
              <PdfLink src={data.personal.website}>
                <Text style={pdfStyles.linkText}>Website: {data.personal.website}</Text>
              </PdfLink>
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

  // Web Preview - Fixed container rendering
  const { webClasses } = templateConfig;
  
  return (
    <div className={webClasses.container}>
      <div className={webClasses.content}>
        <div className={webClasses.personalSection}>
          <h1 className={webClasses.name}>
            {data?.personal?.name || 'Your Name'}
          </h1>
          
          {/* Always render containers, conditionally render content */}
          {(data?.personal?.email || data?.personal?.phone || data?.personal?.address) && (
            <div className={webClasses.contactContainer}>
              {data.personal.email && <div>Email: {data.personal.email}</div>}
              {data.personal.phone && <div>Phone: {data.personal.phone}</div>}
              {data.personal.address && <div>Address: {data.personal.address}</div>}
            </div>
          )}
          
          {(data?.personal?.linkedin || data?.personal?.website) && (
            <div className={webClasses.linkContainer}>
              {data.personal.linkedin && (
                <a href={data.personal.linkedin} className={webClasses.linkText} target="_blank" rel="noopener noreferrer">
                  LinkedIn: {data.personal.linkedin}
                </a>
              )}
              {data.personal.website && (
                <a href={data.personal.website} className={webClasses.linkText} target="_blank" rel="noopener noreferrer">
                  Website: {data.personal.website}
                </a>
              )}
            </div>
          )}
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
