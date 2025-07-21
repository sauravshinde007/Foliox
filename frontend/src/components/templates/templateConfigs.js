import { StyleSheet } from '@react-pdf/renderer';
import { 
  renderMinimalHeader, 
  renderModernHeader, 
  summarySection, 
  experienceSection, 
  educationSection, 
  skillsSection 
} from './sections';

// Minimal Template Config
export const minimalConfig = {
  id: 'minimal',
  name: 'Minimal',
  description: 'Clean and simple design',
  
  renderHeader: (data, styles, isPdf) => renderMinimalHeader(data, styles, isPdf),
  
  sections: [summarySection, experienceSection, educationSection, skillsSection],
  
  pdfStyles: StyleSheet.create({
    page: {
      padding: 32,
      fontFamily: 'Helvetica',
      backgroundColor: '#FFFFFF',
      color: '#374151'
    },
    header: {
      alignItems: 'center',
      marginBottom: 24,
      borderBottomWidth: 2,
      borderBottomColor: '#E5E7EB',
      paddingBottom: 16
    },
    headerName: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: 12,
      textAlign: 'center'
    },
    contactRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 12,
      marginBottom: 6
    },
    contactItem: { fontSize: 10, color: '#6B7280' },
    linkItem: { fontSize: 10, color: '#2563EB' },
    section: { marginBottom: 20 },
    sectionTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#E5E7EB',
      paddingBottom: 3
    },
    summaryText: { fontSize: 10, lineHeight: 1.5, color: '#374151' },
    experienceItem: { marginBottom: 14 },
    experienceHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 },
    jobTitle: { fontSize: 12, fontWeight: 'bold', color: '#111827' },
    company: { fontSize: 11, color: '#6B7280', fontWeight: 'bold' },
    dateRange: { fontSize: 9, color: '#9CA3AF' },
    description: { fontSize: 10, color: '#374151', lineHeight: 1.4 },
    educationItem: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
    educationContent: { flex: 1 },
    degree: { fontSize: 12, fontWeight: 'bold', color: '#111827' },
    school: { fontSize: 10, color: '#6B7280' },
    year: { fontSize: 9, color: '#9CA3AF' },
    skillCategory: { marginBottom: 10 },
    skillTitle: { fontSize: 12, fontWeight: 'bold', color: '#111827', marginBottom: 6 },
    skillItem: { fontSize: 10, color: '#374151', marginBottom: 2 }
  }),
  
  webClasses: {
    container: 'bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto',
    content: 'p-8',
    header: 'text-center mb-8 border-b-2 border-gray-200 pb-4',
    headerName: 'text-3xl font-bold text-gray-900 mb-4',
    contactRow: 'flex flex-wrap justify-center gap-4 text-sm text-gray-600 mb-2',
    linkItem: 'text-blue-600 hover:underline',
    section: 'mb-8',
    sectionTitle: 'text-xl font-semibold text-gray-900 mb-3 border-b-2 border-gray-200 pb-1',
    summaryText: 'text-gray-700 leading-relaxed',
    experienceItem: 'mb-6',
    experienceHeader: 'flex justify-between items-start mb-2',
    jobTitle: 'text-lg font-medium text-gray-900',
    company: 'text-gray-600 font-medium',
    dateRange: 'text-sm text-gray-500',
    description: 'text-gray-700 leading-relaxed',
    educationItem: 'mb-4 flex justify-between items-start',
    degree: 'text-lg font-medium text-gray-900',
    school: 'text-gray-600',
    year: 'text-sm text-gray-500',
    skillCategory: 'mb-4',
    skillTitle: 'text-lg font-medium text-gray-900 mb-2',
    skillsContainer: 'flex flex-wrap gap-2',
    skillTag: 'px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm'
  }
};

// Modern Template Config
export const modernConfig = {
  id: 'modern',
  name: 'Modern',
  description: 'Contemporary professional layout',
  
  renderHeader: (data, styles, isPdf) => renderModernHeader(data, styles, isPdf),
  
  sections: [summarySection, experienceSection, educationSection, skillsSection],
  
  pdfStyles: StyleSheet.create({
    page: {
      padding: 0,
      fontFamily: 'Helvetica',
      backgroundColor: '#FFFFFF',
      color: '#374151'
    },
    header: { marginBottom: 0 },
    modernHeaderBg: {
      backgroundColor: '#2563EB',
      padding: 32,
      marginBottom: 24
    },
    headerName: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#FFFFFF',
      marginBottom: 16
    },
    modernContactGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 12
    },
    contactItem: { fontSize: 11, color: '#FFFFFF', opacity: 0.9 },
    linkItem: { fontSize: 11, color: '#FFFFFF' },
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
    dateRange: { fontSize: 10, backgroundColor: '#F3F4F6', padding: '4 8', borderRadius: 12 },
    description: { fontSize: 11, color: '#374151', lineHeight: 1.5 },
    educationItem: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12, paddingLeft: 12 },
    educationContent: { flex: 1 },
    degree: { fontSize: 14, fontWeight: 'bold', color: '#111827' },
    school: { fontSize: 12, color: '#2563EB' },
    year: { fontSize: 10, backgroundColor: '#F3F4F6', padding: '4 8', borderRadius: 12 },
    skillCategory: { marginBottom: 12, paddingLeft: 12 },
    skillTitle: { fontSize: 14, fontWeight: 'bold', color: '#111827', marginBottom: 8 },
    skillItem: { fontSize: 10, color: '#374151', marginBottom: 2 }
  }),
  
  webClasses: {
    container: 'bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto',
    content: '',
    header: '',
    modernHeaderBg: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8',
    headerName: 'text-4xl font-bold mb-4',
    modernContactGrid: 'grid grid-cols-1 md:grid-cols-2 gap-4 text-sm opacity-90',
    linkItem: 'hover:underline',
    section: 'mb-8 px-8',
    sectionTitle: 'text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-3',
    summaryText: 'text-gray-700 leading-relaxed pl-3',
    experienceItem: 'mb-6 pl-4 border-l-2 border-gray-100',
    experienceHeader: 'flex justify-between items-start mb-2',
    jobTitle: 'text-xl font-semibold text-gray-900',
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
    skillTag: 'px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800 rounded-lg text-sm font-medium'
  }
};

// Creative Template Config
export const creativeConfig = {
  id: 'creative',
  name: 'Creative',
  description: 'Colorful and artistic design',
  
  renderHeader: (data, styles, isPdf) => renderMinimalHeader(data, styles, isPdf),
  
  sections: [summarySection, experienceSection, educationSection, skillsSection],
  
  pdfStyles: StyleSheet.create({
    page: {
      padding: 32,
      fontFamily: 'Helvetica',
      backgroundColor: '#FEF7FF',
      color: '#374151'
    },
    header: {
      alignItems: 'center',
      marginBottom: 24,
      backgroundColor: '#7C3AED',
      padding: 20,
      borderRadius: 12,
      marginHorizontal: -12
    },
    headerName: {
      fontSize: 26,
      fontWeight: 'bold',
      color: '#FFFFFF',
      marginBottom: 12,
      textAlign: 'center'
    },
    contactRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 12,
      marginBottom: 6
    },
    contactItem: { fontSize: 10, color: '#E9D5FF' },
    linkItem: { fontSize: 10, color: '#FFFFFF' },
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
    container: 'bg-gradient-to-br from-purple-50 to-pink-50 shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto',
    content: 'p-8',
    header: 'text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-lg -mx-2',
    headerName: 'text-3xl font-bold mb-4',
    contactRow: 'flex flex-wrap justify-center gap-4 text-sm mb-2 opacity-90',
    linkItem: 'hover:underline',
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
    skillTag: 'px-3 py-1 bg-gradient-to-r from-purple-200 to-pink-200 text-purple-800 rounded-full text-sm font-medium'
  }
};

// Professional Template Config  
export const professionalConfig = {
  id: 'professional',
  name: 'Professional',
  description: 'Corporate and formal layout',
  
  renderHeader: (data, styles, isPdf) => renderMinimalHeader(data, styles, isPdf),
  
  sections: [summarySection, experienceSection, educationSection, skillsSection],
  
  pdfStyles: StyleSheet.create({
    page: {
      padding: 40,
      fontFamily: 'Helvetica',
      backgroundColor: '#FFFFFF',
      color: '#1F2937'
    },
    header: {
      alignItems: 'flex-start',
      marginBottom: 30,
      borderBottomWidth: 3,
      borderBottomColor: '#1F2937',
      paddingBottom: 20
    },
    headerName: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#1F2937',
      marginBottom: 8
    },
    contactRow: {
      flexDirection: 'column',
      gap: 4,
      marginBottom: 8
    },
    contactItem: { fontSize: 11, color: '#4B5563' },
    linkItem: { fontSize: 11, color: '#1F2937', textDecoration: 'underline' },
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
    header: 'mb-8 border-b-4 border-gray-800 pb-6',
    headerName: 'text-4xl font-bold text-gray-800 mb-2',
    contactRow: 'flex flex-col gap-1 text-sm text-gray-600',
    linkItem: 'text-gray-800 underline hover:text-gray-600',
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
