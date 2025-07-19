export const formSections = [
  {
    id: 'personal',
    title: 'Personal Information',
    icon: '👤',
    fields: [
      { name: 'name', label: 'Full Name', type: 'text', required: true },
      { name: 'email', label: 'Email', type: 'email', required: true },
      { name: 'phone', label: 'Phone', type: 'tel', required: true },
      { name: 'address', label: 'Address', type: 'text', required: false },
      { name: 'linkedin', label: 'LinkedIn URL', type: 'url', required: false },
      { name: 'website', label: 'Website URL', type: 'url', required: false },
      { name: 'summary', label: 'Professional Summary', type: 'textarea', required: false, rows: 4 }
    ]
  },
  {
    id: 'experience',
    title: 'Work Experience',
    icon: '💼',
    isArray: true,
    fields: [
      { name: 'company', label: 'Company Name', type: 'text', required: true },
      { name: 'position', label: 'Job Title', type: 'text', required: true },
      { name: 'startDate', label: 'Start Date', type: 'text', placeholder: 'e.g., Jan 2023', required: true },
      { name: 'endDate', label: 'End Date', type: 'text', placeholder: 'e.g., Present', required: true },
      { name: 'description', label: 'Job Description', type: 'textarea', required: false, rows: 3 }
    ]
  },
  {
    id: 'education',
    title: 'Education',
    icon: '🎓',
    isArray: true,
    fields: [
      { name: 'school', label: 'School/University', type: 'text', required: true },
      { name: 'degree', label: 'Degree', type: 'text', required: true },
      { name: 'field', label: 'Field of Study', type: 'text', required: false },
      { name: 'year', label: 'Graduation Year', type: 'text', required: true },
      { name: 'gpa', label: 'GPA (optional)', type: 'text', required: false }
    ]
  },
  {
    id: 'skills',
    title: 'Skills',
    icon: '⚡',
    fields: [
      { name: 'technical', label: 'Technical Skills', type: 'textarea', placeholder: 'JavaScript, React, Node.js, Python...', required: false, rows: 3 },
      { name: 'languages', label: 'Languages', type: 'textarea', placeholder: 'English (Native), Spanish (Fluent)...', required: false, rows: 2 }
    ]
  }
];

export const initialResumeData = {
  personal: {
    name: '',
    email: '',
    phone: '',
    address: '',
    linkedin: '',
    website: '',
    summary: ''
  },
  experience: [
    {
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: ''
    }
  ],
  education: [
    {
      school: '',
      degree: '',
      field: '',
      year: '',
      gpa: ''
    }
  ],
  skills: {
    technical: '',
    languages: ''
  }
};
