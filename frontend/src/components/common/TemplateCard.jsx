import React from 'react';
import { ArrowRight, Clock, Star } from 'lucide-react';

const TemplateCard = ({ template, onClick, disabled = false }) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
        disabled ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer hover:scale-105'
      }`}
      onClick={disabled ? undefined : onClick}
    >
      {/* Template Preview */}
      <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
        <div className="text-center p-6">
          <div className={`w-20 h-20 rounded-xl mx-auto mb-4 flex items-center justify-center ${
            template.type === 'resume' 
              ? 'bg-blue-500 text-white' 
              : 'bg-purple-500 text-white'
          }`}>
            <span className="text-2xl font-bold">
              {template.name.charAt(0)}
            </span>
          </div>
          <p className="text-gray-600 text-sm font-medium">
            {template.type === 'resume' ? 'Resume Template' : 'Portfolio Template'}
          </p>
        </div>
        
        {/* Coming Soon Badge */}
        {template.comingSoon && (
          <div className="absolute top-3 right-3 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
            <Clock size={12} />
            Coming Soon
          </div>
        )}
        
        {/* Type Badge */}
        <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium ${
          template.type === 'resume' 
            ? 'bg-blue-100 text-blue-800' 
            : 'bg-purple-100 text-purple-800'
        }`}>
          {template.type}
        </div>
      </div>

      {/* Template Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{template.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{template.description}</p>
        
        {/* Features */}
        {template.features && (
          <div className="flex flex-wrap gap-2 mb-4">
            {template.features.map((feature, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>
        )}
        
        <button 
          className={`w-full py-2 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors ${
            disabled 
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
              : template.type === 'resume'
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-purple-600 text-white hover:bg-purple-700'
          }`}
          disabled={disabled}
        >
          {disabled ? (
            <>
              <Star size={16} />
              Coming Soon
            </>
          ) : (
            <>
              Create {template.type === 'resume' ? 'Resume' : 'Portfolio'}
              <ArrowRight size={16} />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default TemplateCard;
