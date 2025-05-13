import React from 'react';
import { Github } from 'lucide-react';

interface AIProduct {
  name: string;
  liveLink: string;
  githubLink: string;
  description: string;
  techStack: string[];
}

const aiProducts: AIProduct[] = [
  {
    name: 'Spinning Mill ERP',
    liveLink: 'https://spinwise-erp.lovable.app',
    githubLink: 'https://github.com/username/spinwise-erp',
    description: 'A comprehensive Enterprise Resource Planning (ERP) system specifically designed for spinning mills in Tamil Nadu. The application provides an end-to-end solution for managing all aspects of spinning mill operations.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'TypeScript', 'Tailwind CSS']
  },
  {
    name: 'QA Manager',
    liveLink: 'https://qa-genius-assistant.lovable.app',
    githubLink: 'https://github.com/username/qa-genius',
    description: 'AI-powered assistant that streamlines quality assurance workflows. Generate test cases, identify edge scenarios, create detailed bug reports, and manage QA documentation.',
    techStack: ['Python', 'FastAPI', 'OpenAI API', 'React', 'PostgreSQL']
  },
  {
    name: 'DataForm',
    liveLink: 'https://userform-gallery.lovable.app',
    githubLink: 'https://github.com/username/userform',
    description: 'A modern web application for collecting, managing, and organizing user submissions. The application features a user-friendly form for data collection and a powerful admin panel to view, search, edit, share, and delete submissions.',
    techStack: ['Vue.js', 'Express.js', 'MongoDB', 'TypeScript', 'Tailwind CSS']
  }
];

const AIProducts: React.FC = () => {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-1">MY AI PRODUCTS</h2>
      <div className="space-y-6">
        {aiProducts.map((product, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
              <div className="flex items-center space-x-3">
                <a
                  href={product.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
                >
                  Visit
                </a>
                <a
                  href={product.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                  title="GitHub Repository"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="flex flex-wrap gap-2">
              {product.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AIProducts;