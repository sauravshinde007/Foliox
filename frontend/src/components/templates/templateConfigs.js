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
    // Personal Information Section - ADDED
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
    // Regular sections
    section: { marginBottom: 20 },
    sectionTitle: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#000000',
      marginBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#000000',
      paddingBottom: 3
    },
    summaryText: { fontSize: 10, lineHeight: 1.4, color: '#000000', textAlign: 'justify' },
    experienceItem: { marginBottom: 14 },
    experienceHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 },
    jobTitle: { fontSize: 12, fontWeight: 'bold', color: '#000000' },
    company: { fontSize: 11, color: '#000000', fontWeight: 'bold' },
    dateRange: { fontSize: 9, color: '#000000' },
    description: { fontSize: 10, color: '#000000', lineHeight: 1.4 },
    educationItem: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
    educationContent: { flex: 1 },
    degree: { fontSize: 12, fontWeight: 'bold', color: '#000000' },
    school: { fontSize: 10, color: '#000000' },
    year: { fontSize: 9, color: '#000000' },
    skillCategory: { marginBottom: 10 },
    skillTitle: { fontSize: 12, fontWeight: 'bold', color: '#000000', marginBottom: 6 },
    skillItem: { fontSize: 10, color: '#000000', marginBottom: 2 }
  }),
  
  webClasses: {
    container: 'bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto border border-black',
    content: 'p-8',
    // Personal Information - ADDED
    personalSection: 'mb-8 border-b border-black pb-5 text-center',
    name: 'text-2xl font-bold text-black mb-4',
    contactContainer: 'space-y-1 text-xs text-black mb-2',
    linkContainer: 'space-y-1 text-xs mt-2',
    linkText: 'text-black hover:underline',
    // Regular sections
    section: 'mb-6',
    sectionTitle: 'text-sm font-bold text-black mb-3 border-b border-black pb-1',
    summaryText: 'text-xs text-black leading-relaxed text-justify',
    experienceItem: 'mb-4',
    experienceHeader: 'flex justify-between items-start mb-1',
    jobTitle: 'text-xs font-bold text-black',
    company: 'text-xs text-black',
    dateRange: 'text-xs text-black',
    description: 'text-xs text-black leading-relaxed mt-1',
    educationItem: 'mb-3 flex justify-between items-start',
    degree: 'text-xs font-bold text-black',
    school: 'text-xs text-black',
    year: 'text-xs text-black',
    skillCategory: 'mb-3',
    skillTitle: 'text-xs font-bold text-black mb-2',
    skillsContainer: 'flex flex-wrap gap-1',
    skillTag: 'px-2 py-1 bg-white text-black text-xs border border-black'
  }
};

// Fixed Modern Template Config
export const modernConfig = {
  id: 'modern',
  name: 'Modern',
  description: 'Contemporary professional layout',
  
  sections: [summarySection, experienceSection, educationSection, skillsSection],
  
  pdfStyles: StyleSheet.create({
    page: {
      padding: 0,
      fontFamily: 'Helvetica',
      backgroundColor: '#FFFFFF',
      color: '#374151'
    },
    // Personal Information Section - ADDED
    personalSection: {
      backgroundColor: '#2563EB',
      padding: 32,
      marginBottom: 24
    },
    name: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#FFFFFF',
      marginBottom: 16,
      textAlign: 'center'
    },
    contactInfo: {
      fontSize: 11,
      color: '#FFFFFF',
      opacity: 0.9,
      marginBottom: 4,
      textAlign: 'center'
    },
    linkText: {
      fontSize: 11,
      color: '#FFFFFF',
      textAlign: 'center',
      marginBottom: 4
    },
    // Regular sections
    section: { marginBottom: 24, paddingHorizontal: 32 },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: 12,
      borderLeftWidth: 4,
      borderLeftColor: '#2563EB',
      paddingLeft: 12
    },
    summaryText: { fontSize: 11, lineHeight: 1.6, paddingLeft: 12 },
    experienceItem: { marginBottom: 16, paddingLeft: 12, borderLeftWidth: 2, borderLeftColor: '#E5E7EB' },
    experienceHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 },
    jobTitle: { fontSize: 14, fontWeight: 'bold', color: '#111827' },
    company: { fontSize: 12, color: '#2563EB', fontWeight: 'bold' },
    dateRange: { fontSize: 10, backgroundColor: '#F3F4F6', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 12 },
    description: { fontSize: 11, color: '#374151', lineHeight: 1.5 },
    educationItem: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12, paddingLeft: 12 },
    educationContent: { flex: 1 },
    degree: { fontSize: 14, fontWeight: 'bold', color: '#111827' },
    school: { fontSize: 12, color: '#2563EB' },
    year: { fontSize: 10, backgroundColor: '#F3F4F6', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 12 },
    skillCategory: { marginBottom: 12, paddingLeft: 12 },
    skillTitle: { fontSize: 14, fontWeight: 'bold', color: '#111827', marginBottom: 8 },
    skillItem: { fontSize: 10, color: '#374151', marginBottom: 2 }
  }),
  
  webClasses: {
    container: 'bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto',
    content: '',
    // Personal Information - ADDED (NO GRADIENT)
    personalSection: 'bg-blue-600 text-white p-8 text-center',
    name: 'text-3xl font-bold mb-4',
    contactContainer: 'space-y-1 text-sm opacity-90 mb-2',
    linkContainer: 'space-y-1 text-sm mt-2',
    linkText: 'hover:underline',
    // Regular sections
    section: 'mb-8 px-8',
    sectionTitle: 'text-xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-3',
    summaryText: 'text-gray-700 leading-relaxed pl-3',
    experienceItem: 'mb-6 pl-4 border-l-2 border-gray-100',
    experienceHeader: 'flex justify-between items-start mb-2',
    jobTitle: 'text-lg font-semibold text-gray-900',
    company: 'text-blue-600 font-medium',
    dateRange: 'text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-600',
    description: 'text-gray-700 leading-relaxed mt-3',
    educationItem: 'mb-4 flex justify-between items-start pl-3',
    degree: 'text-lg font-semibold text-gray-900',
    school: 'text-blue-600',
    year: 'text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-600',
    skillCategory: 'mb-4 pl-3',
    skillTitle: 'text-lg font-semibold text-gray-900 mb-3',
    skillsContainer: 'flex flex-wrap gap-2',
    skillTag: 'px-4 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium'
  }
};

// Fixed Creative Template Config
export const creativeConfig = {
  id: 'creative',
  name: 'Creative',
  description: 'Colorful and artistic design',
  
  sections: [summarySection, experienceSection, educationSection, skillsSection],
  
  pdfStyles: StyleSheet.create({
    page: {
      padding: 32,
      fontFamily: 'Helvetica',
      backgroundColor: '#FEF7FF',
      color: '#374151'
    },
    // Personal Information Section - ADDED
    personalSection: {
      backgroundColor: '#7C3AED',
      padding: 24,
      borderRadius: 12,
      marginBottom: 24
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
      color: '#E9D5FF',
      marginBottom: 3,
      textAlign: 'center'
    },
    linkText: {
      fontSize: 10,
      color: '#FFFFFF',
      textAlign: 'center',
      marginBottom: 3
    },
    // Regular sections
    section: { marginBottom: 20 },
    sectionTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#7C3AED',
      marginBottom: 10,
      backgroundColor: '#F3E8FF',
      padding: 8,
      borderRadius: 6
    },
    summaryText: { fontSize: 10, lineHeight: 1.5, color: '#374151' },
    experienceItem: { marginBottom: 14, backgroundColor: '#FFFFFF', padding: 12, borderRadius: 8 },
    experienceHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 },
    jobTitle: { fontSize: 12, fontWeight: 'bold', color: '#7C3AED' },
    company: { fontSize: 11, color: '#10B981', fontWeight: 'bold' },
    dateRange: { fontSize: 9, color: '#F59E0B', fontWeight: 'bold' },
    description: { fontSize: 10, color: '#374151', lineHeight: 1.4 },
    educationItem: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12, backgroundColor: '#FFFFFF', padding: 10, borderRadius: 8 },
    educationContent: { flex: 1 },
    degree: { fontSize: 12, fontWeight: 'bold', color: '#7C3AED' },
    school: { fontSize: 10, color: '#10B981' },
    year: { fontSize: 9, color: '#F59E0B', fontWeight: 'bold' },
    skillCategory: { marginBottom: 10 },
    skillTitle: { fontSize: 12, fontWeight: 'bold', color: '#7C3AED', marginBottom: 6 },
    skillItem: { fontSize: 10, color: '#374151', marginBottom: 2 }
  }),
  
  webClasses: {
    container: 'bg-purple-50 shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto',
    content: 'p-8',
    // Personal Information - ADDED (NO GRADIENT)
    personalSection: 'text-center mb-8 bg-purple-600 text-white p-6 rounded-lg',
    name: 'text-3xl font-bold mb-4',
    contactContainer: 'space-y-1 text-sm opacity-90 mb-2',
    linkContainer: 'space-y-1 text-sm mt-2',
    linkText: 'hover:underline',
    // Regular sections
    section: 'mb-8',
    sectionTitle: 'text-xl font-semibold text-purple-700 mb-3 bg-purple-100 px-4 py-2 rounded-lg',
    summaryText: 'text-gray-700 leading-relaxed',
    experienceItem: 'mb-6 bg-white p-4 rounded-lg shadow-sm',
    experienceHeader: 'flex justify-between items-start mb-2',
    jobTitle: 'text-lg font-medium text-purple-700',
    company: 'text-green-600 font-medium',
    dateRange: 'text-sm text-yellow-600 font-semibold',
    description: 'text-gray-700 leading-relaxed',
    educationItem: 'mb-4 flex justify-between items-start bg-white p-3 rounded-lg shadow-sm',
    degree: 'text-lg font-medium text-purple-700',
    school: 'text-green-600',
    year: 'text-sm text-yellow-600 font-semibold',
    skillCategory: 'mb-4',
    skillTitle: 'text-lg font-medium text-purple-700 mb-2',
    skillsContainer: 'flex flex-wrap gap-2',
    skillTag: 'px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-sm font-medium'
  }
};

// Fixed Professional Template Config
export const professionalConfig = {
  id: 'professional',
  name: 'Professional',
  description: 'Corporate and formal layout',
  
  sections: [summarySection, experienceSection, educationSection, skillsSection],
  
  pdfStyles: StyleSheet.create({
    page: {
      padding: 40,
      fontFamily: 'Helvetica',
      backgroundColor: '#FFFFFF',
      color: '#1F2937'
    },
    // Personal Information Section - ADDED
    personalSection: {
      marginBottom: 30,
      borderBottomWidth: 3,
      borderBottomColor: '#1F2937',
      paddingBottom: 20
    },
    name: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#1F2937',
      marginBottom: 8,
      textAlign: 'left'
    },
    contactInfo: {
      fontSize: 11,
      color: '#4B5563',
      marginBottom: 4
    },
    linkText: {
      fontSize: 11,
      color: '#1F2937',
      marginBottom: 4
    },
    // Regular sections
    section: { marginBottom: 25 },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#1F2937',
      marginBottom: 12,
      textTransform: 'uppercase',
      letterSpacing: 1
    },
    summaryText: { fontSize: 11, lineHeight: 1.6, color: '#374151', textAlign: 'justify' },
    experienceItem: { marginBottom: 18 },
    experienceHeader: { marginBottom: 6 },
    jobTitle: { fontSize: 14, fontWeight: 'bold', color: '#1F2937', marginBottom: 2 },
    company: { fontSize: 12, color: '#4B5563', fontWeight: 'bold', marginBottom: 2 },
    dateRange: { fontSize: 10, color: '#6B7280', fontStyle: 'italic' },
    description: { fontSize: 11, color: '#374151', lineHeight: 1.5, marginTop: 4 },
    educationItem: { marginBottom: 15 },
    educationContent: { marginBottom: 4 },
    degree: { fontSize: 14, fontWeight: 'bold', color: '#1F2937', marginBottom: 2 },
    school: { fontSize: 12, color: '#4B5563', marginBottom: 2 },
    year: { fontSize: 10, color: '#6B7280', fontStyle: 'italic' },
    skillCategory: { marginBottom: 12 },
    skillTitle: { fontSize: 14, fontWeight: 'bold', color: '#1F2937', marginBottom: 8, textTransform: 'uppercase' },
    skillItem: { fontSize: 11, color: '#374151', marginBottom: 3 }
  }),
  
  webClasses: {
    container: 'bg-white shadow-xl rounded-lg overflow-hidden max-w-4xl mx-auto border-2 border-gray-200',
    content: 'p-10',
    // Personal Information - ADDED
    personalSection: 'mb-8 border-b-4 border-gray-800 pb-6',
    name: 'text-3xl font-bold text-gray-800 mb-2',
    contactContainer: 'flex flex-col gap-1 text-sm text-gray-600',
    linkContainer: 'flex flex-col gap-1 text-sm text-gray-600 mt-2',
    linkText: 'text-gray-800 underline hover:text-gray-600',
    // Regular sections
    section: 'mb-10',
    sectionTitle: 'text-xl font-bold text-gray-800 mb-4 uppercase tracking-wider',
    summaryText: 'text-gray-700 leading-relaxed text-justify',
    experienceItem: 'mb-8',
    experienceHeader: 'mb-3',
    jobTitle: 'text-lg font-bold text-gray-800',
    company: 'text-gray-600 font-semibold mb-1',
    dateRange: 'text-sm text-gray-500 italic',
    description: 'text-gray-700 leading-relaxed mt-2',
    educationItem: 'mb-6',
    degree: 'text-lg font-bold text-gray-800',
    school: 'text-gray-600 mb-1',
    year: 'text-sm text-gray-500 italic',
    skillCategory: 'mb-4',
    skillTitle: 'text-lg font-semibold text-gray-800 mb-3 uppercase tracking-wide',
    skillsContainer: 'flex flex-wrap gap-2',
    skillTag: 'px-4 py-2 bg-gray-200 text-gray-800 text-sm font-medium border border-gray-300'
  }
};
