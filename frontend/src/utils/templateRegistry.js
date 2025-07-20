import MinimalTemplate from '../components/templates/MinimalTemplate';
import ModernTemplate from '../components/templates/ModernTemplate';
import CreativeTemplate from '../components/templates/CreativeTemplate';

export const templates = [
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'Clean and simple design',
    component: MinimalTemplate,
  },
  {
    id: 'modern',
    name: 'Modern',
    description: 'Contemporary professional layout',
    component: ModernTemplate,
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Colorful and artistic design',
    component: CreativeTemplate,
  },
];

export const getTemplate = (templateId) => {
  return templates.find(template => template.id === templateId);
};
