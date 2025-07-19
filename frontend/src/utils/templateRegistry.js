import MinimalTemplate from '../components/templates/MinimalTemplate';
import ModernTemplate from '../components/templates/ModernTemplate';

export const templates = [
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'Clean and simple design',
    component: MinimalTemplate,
    preview: '/templates/minimal-preview.jpg'
  },
  {
    id: 'modern',
    name: 'Modern',
    description: 'Contemporary professional layout',
    component: ModernTemplate,
    preview: '/templates/modern-preview.jpg'
  }
];

export const getTemplate = (templateId) => {
  return templates.find(template => template.id === templateId);
};
