import React from 'react';
import { EducationItem } from '../types/resume';

const educationItems: EducationItem[] = [
  {
    degree: 'Product Manager Fellowship',
    institution: 'NextLeap',
    period: 'Feb 2025 - Present'
  },
  {
    degree: 'BE Electronics and communication',
    institution: 'PSG College Of Technology',
    period: 'Jun 2016 - Apr 2019'
  },
  {
    degree: 'Diploma Electronics and communication',
    institution: 'Bharath polytechnic college',
    period: 'Jun 2013 - Apr 2016'
  }
];

const Education: React.FC = () => {
  return (
    <section>
      <h2 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-1">EDUCATION</h2>
      
      {educationItems.map((edu, index) => (
        <div key={index} className={`mb-4 ${index !== educationItems.length - 1 ? 'border-b border-gray-200 pb-4' : ''}`}>
          <div className="flex flex-col md:flex-row md:justify-between mb-1">
            <h3 className="text-lg font-bold text-gray-700">{edu.degree}</h3>
            <span className="text-gray-600">{edu.period}</span>
          </div>
          <div className="text-gray-600">{edu.institution}</div>
        </div>
      ))}
    </section>
  );
};

export default Education;