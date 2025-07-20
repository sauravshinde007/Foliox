import { StyleSheet } from '@react-pdf/renderer';
import { 
  summarySection, 
  experienceSection, 
  educationSection, 
  skillsSection 
} from './sections';

// Fixed Minimal Template Config
export const minimalConfig = {
  id: 'minimal',
  name: 'Minimal',
  description: 'Clean black and white professional design',
  
  sections: [summarySection, experienceSection, educationSection, skillsSection],
  
  pdfStyles: StyleSheet.create({
    page: { 
      padding: 40, 
      fontFamily: 'Helvetica', 
      backgroundColor: '#FFFFFF', 
      color: '#000000'
    },
    
    // Personal Information Section WITHOUT TITLE
    personalSection: { 
      marginBottom: 30, 
      borderBottomWidth: 1, 
      borderBottomColor: '#000000', 
      paddingBottom: 20,
      alignItems: 'center'
    },
    name: { 
      fontSize: 24, 
      fontWeight: 'bold', 
      color: '#000000', 
      marginBottom: 15, 
      textAlign: 'center' 
    },
    // FIXED: Ensure all contact info renders
    contactInfo: { 
      fontSize: 10, 
      color: '#000000', 
      marginBottom: 4, 
      textAlign: 'center' 
    },
    linkText: { 
      fontSize: 10, 
      color: '#000000', 
      textAlign: 'center', 
      marginBottom: 4
    },
    
    // Rest of your existing styles...
    section: { marginBottom: 25 },
    sectionTitle: { 
      fontSize: 14, 
      fontWeight: 'bold', 
      color: '#000000', 
      marginBottom: 12, 
      borderBottomWidth: 1, 
      borderBottomColor: '#000000', 
      paddingBottom: 3
    },
    summaryText: { 
      fontSize: 10, 
      lineHeight: 1.4, 
      color: '#000000', 
      textAlign: 'justify'
    },
    experienceItem: { marginBottom: 15 },
    experienceHeader: { 
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      marginBottom: 5
    },
    jobTitle: { fontSize: 11, fontWeight: 'bold', color: '#000000' },
    company: { fontSize: 10, color: '#000000' },
    dateRange: { fontSize: 9, color: '#000000' },
    description: { 
      fontSize: 10, 
      color: '#000000', 
      lineHeight: 1.3, 
      marginTop: 3
    },
    educationItem: { marginBottom: 12 },
    educationHeader: { 
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      marginBottom: 3
    },
    degree: { fontSize: 11, fontWeight: 'bold', color: '#000000' },
    school: { fontSize: 10, color: '#000000' },
    field: { fontSize: 9, color: '#000000' },
    yearGpa: { textAlign: 'right' },
    year: { fontSize: 9, color: '#000000' },
    gpa: { fontSize: 9, color: '#000000', marginTop: 2 },
    skillCategory: { marginBottom: 12 },
    skillTitle: { 
      fontSize: 11, 
      fontWeight: 'bold', 
      color: '#000000', 
      marginBottom: 8
    },
    skillsRow: { flexDirection: 'row', flexWrap: 'wrap' },
    skillTag: { 
      backgroundColor: '#FFFFFF', 
      color: '#000000', 
      fontSize: 9, 
      paddingHorizontal: 8, 
      paddingVertical: 3, 
      marginRight: 6, 
      marginBottom: 4,
      borderWidth: 1,
      borderColor: '#000000'
    }
  }),
  
  webClasses: {
    container: 'bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto border border-black',
    content: 'p-10',
    
    // Personal Information WITHOUT TITLE
    personalSection: 'mb-8 border-b border-black pb-5 text-center',
    name: 'text-2xl font-bold text-black mb-4',
    contactContainer: 'space-y-1 text-xs text-black mb-2',
    linkContainer: 'space-y-1 text-xs mt-2',
    linkText: 'text-black hover:underline',
    
    // Rest of your existing web classes...
    section: 'mb-6',
    sectionTitle: 'text-sm font-bold text-black mb-3 border-b border-black pb-1',
    summaryText: 'text-xs text-black leading-relaxed text-justify',
    experienceItem: 'mb-4',
    experienceHeader: 'flex justify-between items-start mb-1',
    jobTitle: 'text-xs font-bold text-black',
    company: 'text-xs text-black',
    dateRange: 'text-xs text-black',
    description: 'text-xs text-black leading-relaxed mt-1',
    educationItem: 'mb-3',
    educationHeader: 'flex justify-between items-start',
    degree: 'text-xs font-bold text-black',
    school: 'text-xs text-black',
    field: 'text-xs text-black',
    yearGpa: 'text-right',
    year: 'text-xs text-black',
    gpa: 'text-xs text-black mt-1',
    skillCategory: 'mb-3',
    skillTitle: 'text-xs font-bold text-black mb-2',
    skillsRow: 'flex flex-wrap gap-1',
    skillTag: 'px-2 py-1 bg-white text-black text-xs border border-black'
  }
};


// Fixed Modern Template Config
export const modernConfig = {
  id: 'modern',
  name: 'Modern',
  description: 'Professional blue theme with simple styling',
  
  sections: [summarySection, experienceSection, educationSection, skillsSection],
  
  pdfStyles: StyleSheet.create({
    page: {
      padding: 0,
      fontFamily: 'Helvetica',
      backgroundColor: '#FFFFFF',
      color: '#000000'
    },
    
    // Simple Blue Header
    personalSection: {
      backgroundColor: '#1E40AF', // Simple blue
      padding: 30,
      marginBottom: 25
    },
    personalTitle: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#FFFFFF',
      marginBottom: 12,
      textAlign: 'center'
    },
    name: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#FFFFFF',
      marginBottom: 15,
      textAlign: 'center'
    },
    contactInfo: { 
      fontSize: 11, 
      color: '#FFFFFF', 
      marginBottom: 4, 
      textAlign: 'center'
    },
    linkText: { 
      fontSize: 11, 
      color: '#FFFFFF', 
      textAlign: 'center', 
      marginBottom: 4
    },
    
    // Simple Sections
    section: { 
      marginBottom: 25, 
      paddingHorizontal: 30
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#1E40AF',
      marginBottom: 15,
      borderBottomWidth: 2,
      borderBottomColor: '#1E40AF',
      paddingBottom: 5
    },
    summaryText: { 
      fontSize: 11, 
      lineHeight: 1.5, 
      color: '#000000',
      textAlign: 'justify'
    },
    
    // Simple Experience
    experienceItem: { 
      marginBottom: 18,
      paddingBottom: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#E5E7EB'
    },
    experienceHeader: { 
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      marginBottom: 6
    },
    jobTitle: { 
      fontSize: 13, 
      fontWeight: 'bold', 
      color: '#000000'
    },
    company: { 
      fontSize: 12, 
      color: '#1E40AF', 
      fontWeight: 'bold'
    },
    dateRange: { 
      fontSize: 10, 
      color: '#000000',
      backgroundColor: '#F3F4F6',
      paddingHorizontal: 8,
      paddingVertical: 3
    },
    description: { 
      fontSize: 11, 
      color: '#000000', 
      lineHeight: 1.4, 
      marginTop: 4
    },
    
    // Simple Education
    educationItem: { 
      marginBottom: 15,
      paddingBottom: 12,
      borderBottomWidth: 1,
      borderBottomColor: '#F3F4F6'
    },
    educationHeader: { 
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      marginBottom: 4
    },
    degree: { 
      fontSize: 12, 
      fontWeight: 'bold', 
      color: '#000000'
    },
    school: { 
      fontSize: 11, 
      color: '#1E40AF'
    },
    field: { 
      fontSize: 10, 
      color: '#000000'
    },
    yearGpa: { 
      textAlign: 'right' 
    },
    year: { 
      fontSize: 10, 
      color: '#000000',
      backgroundColor: '#F3F4F6',
      paddingHorizontal: 6,
      paddingVertical: 2
    },
    gpa: { 
      fontSize: 9, 
      color: '#000000', 
      marginTop: 2
    },
    
    // Simple Skills
    skillCategory: { 
      marginBottom: 15
    },
    skillTitle: { 
      fontSize: 13, 
      fontWeight: 'bold', 
      color: '#1E40AF', 
      marginBottom: 10
    },
    skillsRow: { 
      flexDirection: 'row', 
      flexWrap: 'wrap'
    },
    skillTag: { 
      backgroundColor: '#F3F4F6', 
      color: '#1E40AF', 
      fontSize: 10, 
      paddingHorizontal: 10, 
      paddingVertical: 4, 
      marginRight: 6, 
      marginBottom: 6,
      borderWidth: 1,
      borderColor: '#1E40AF'
    }
  }),
  
  webClasses: {
    container: 'bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto',
    content: '',
    
    // Simple Blue Header
    personalSection: 'bg-blue-800 text-white p-8 text-center',
    personalTitle: 'text-sm font-bold mb-3 uppercase',
    name: 'text-3xl font-bold mb-4',
    contactContainer: 'space-y-1 text-sm mb-2',
    linkContainer: 'space-y-1 text-sm mt-2',
    linkText: 'hover:underline',
    
    // Simple Sections
    section: 'mb-6 px-8',
    sectionTitle: 'text-base font-bold text-blue-800 mb-4 border-b-2 border-blue-800 pb-1',
    summaryText: 'text-sm text-black leading-relaxed text-justify',
    
    // Simple Experience
    experienceItem: 'mb-5 pb-4 border-b border-gray-200',
    experienceHeader: 'flex justify-between items-start mb-2',
    jobTitle: 'text-sm font-bold text-black',
    company: 'text-sm text-blue-800 font-bold',
    dateRange: 'text-xs text-black bg-gray-100 px-2 py-1',
    description: 'text-sm text-black leading-relaxed mt-1',
    
    // Simple Education
    educationItem: 'mb-4 pb-3 border-b border-gray-100',
    educationHeader: 'flex justify-between items-start',
    degree: 'text-sm font-bold text-black',
    school: 'text-sm text-blue-800',
    field: 'text-xs text-black',
    yearGpa: 'text-right',
    year: 'text-xs text-black bg-gray-100 px-2 py-1',
    gpa: 'text-xs text-black mt-1',
    
    // Simple Skills
    skillCategory: 'mb-4',
    skillTitle: 'text-sm font-bold text-blue-800 mb-3',
    skillsRow: 'flex flex-wrap gap-2',
    skillTag: 'px-3 py-1 bg-gray-100 text-blue-800 text-xs border border-blue-800'
  }
};

export const creativeConfig = {
  id: 'creative',
  name: 'Creative',
  description: 'Simple colorful professional design',
  
  sections: [summarySection, experienceSection, educationSection, skillsSection],
  
  pdfStyles: StyleSheet.create({
    page: {
      padding: 35,
      fontFamily: 'Helvetica',
      backgroundColor: '#FFFFFF',
      color: '#000000'
    },
    
    // Simple Purple Header
    personalSection: {
      backgroundColor: '#7C2D92', // Simple purple
      padding: 25,
      marginBottom: 25
    },
    personalTitle: {
      fontSize: 13,
      fontWeight: 'bold',
      color: '#FFFFFF',
      marginBottom: 10,
      textAlign: 'center'
    },
    name: {
      fontSize: 26,
      fontWeight: 'bold',
      color: '#FFFFFF',
      marginBottom: 12,
      textAlign: 'center'
    },
    contactInfo: { 
      fontSize: 10, 
      color: '#FFFFFF', 
      marginBottom: 3, 
      textAlign: 'center'
    },
    linkText: { 
      fontSize: 10, 
      color: '#FFFFFF', 
      textAlign: 'center', 
      marginBottom: 3
    },
    
    // Simple Sections
    section: { 
      marginBottom: 22
    },
    sectionTitle: {
      fontSize: 15,
      fontWeight: 'bold',
      color: '#7C2D92',
      marginBottom: 12,
      borderBottomWidth: 2,
      borderBottomColor: '#7C2D92',
      paddingBottom: 4
    },
    summaryText: { 
      fontSize: 10, 
      lineHeight: 1.4, 
      color: '#000000',
      textAlign: 'justify'
    },
    
    // Simple Experience
    experienceItem: { 
      marginBottom: 16,
      paddingBottom: 12,
      borderBottomWidth: 1,
      borderBottomColor: '#E5E7EB'
    },
    experienceHeader: { 
      marginBottom: 5
    },
    jobTitle: { 
      fontSize: 12, 
      fontWeight: 'bold', 
      color: '#7C2D92'
    },
    company: { 
      fontSize: 11, 
      color: '#059669', 
      fontWeight: 'bold'
    },
    dateRange: { 
      fontSize: 9, 
      color: '#DC2626',
      backgroundColor: '#FEF2F2',
      paddingHorizontal: 6,
      paddingVertical: 2
    },
    description: { 
      fontSize: 10, 
      color: '#000000', 
      lineHeight: 1.3,
      marginTop: 3
    },
    
    // Simple Education
    educationItem: { 
      marginBottom: 14,
      paddingBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#F3F4F6'
    },
    educationHeader: { 
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      marginBottom: 3
    },
    degree: { 
      fontSize: 11, 
      fontWeight: 'bold', 
      color: '#7C2D92'
    },
    school: { 
      fontSize: 10, 
      color: '#059669'
    },
    field: { 
      fontSize: 9, 
      color: '#000000'
    },
    yearGpa: { 
      textAlign: 'right' 
    },
    year: { 
      fontSize: 9, 
      color: '#DC2626',
      backgroundColor: '#FEF2F2',
      paddingHorizontal: 5,
      paddingVertical: 2
    },
    gpa: { 
      fontSize: 8, 
      color: '#000000', 
      marginTop: 2
    },
    
    // Simple Skills
    skillCategory: { 
      marginBottom: 12
    },
    skillTitle: { 
      fontSize: 12, 
      fontWeight: 'bold', 
      color: '#7C2D92', 
      marginBottom: 8
    },
    skillsRow: { 
      flexDirection: 'row', 
      flexWrap: 'wrap'
    },
    skillTag: { 
      backgroundColor: '#F0FDF4', 
      color: '#059669', 
      fontSize: 9, 
      paddingHorizontal: 8, 
      paddingVertical: 3, 
      marginRight: 5, 
      marginBottom: 5,
      borderWidth: 1,
      borderColor: '#059669'
    }
  }),
  
  webClasses: {
    container: 'bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto',
    content: 'p-8',
    
    // Simple Purple Header
    personalSection: 'text-center mb-6 bg-purple-700 text-white p-6',
    personalTitle: 'text-sm font-bold mb-3 uppercase',
    name: 'text-3xl font-bold mb-3',
    contactContainer: 'space-y-1 text-sm mb-2',
    linkContainer: 'space-y-1 text-sm mt-2',
    linkText: 'hover:underline',
    
    // Simple Sections
    section: 'mb-6',
    sectionTitle: 'text-base font-bold text-purple-700 mb-3 border-b-2 border-purple-700 pb-1',
    summaryText: 'text-sm text-black leading-relaxed text-justify',
    
    // Simple Experience
    experienceItem: 'mb-4 pb-3 border-b border-gray-200',
    experienceHeader: 'mb-1',
    jobTitle: 'text-sm font-bold text-purple-700',
    company: 'text-sm text-green-600 font-bold',
    dateRange: 'text-xs text-red-600 bg-red-50 px-2 py-1',
    description: 'text-sm text-black leading-relaxed',
    
    // Simple Education
    educationItem: 'mb-4 pb-3 border-b border-gray-100',
    educationHeader: 'flex justify-between items-start',
    degree: 'text-sm font-bold text-purple-700',
    school: 'text-sm text-green-600',
    field: 'text-xs text-black',
    yearGpa: 'text-right',
    year: 'text-xs text-red-600 bg-red-50 px-2 py-1',
    gpa: 'text-xs text-black mt-1',
    
    // Simple Skills
    skillCategory: 'mb-3',
    skillTitle: 'text-sm font-bold text-purple-700 mb-2',
    skillsRow: 'flex flex-wrap gap-1',
    skillTag: 'px-2 py-1 bg-green-50 text-green-700 text-xs border border-green-600'
  }
};




