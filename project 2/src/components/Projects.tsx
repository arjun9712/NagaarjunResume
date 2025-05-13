import React from 'react';
import { ProjectItem } from '../types/resume';
import { FileText } from 'lucide-react';

const projects: ProjectItem[] = [
  {
    title: 'Defining Product Outcomes',
    description: 'Market Analysis, Mapping outcomes',
    link: 'https://assets.nextleap.app/submissions/Nagaarjun-Casestudy1Spotify-922d38f1-431a-4c59-9692-8543e23d09b5.pdf',
    color: 'bg-blue-100 hover:bg-blue-200'
  },
  {
    title: 'Deriving Insights from Users',
    description: 'User Segmentation, User Research',
    link: 'https://assets.nextleap.app/submissions/Milestone2_DerivingInsightsfromUsers1-5ee7f594-aed3-471e-9aba-0d7b6df64b45.pdf',
    color: 'bg-green-100 hover:bg-green-200'
  },
  {
    title: 'Product Requirements Document',
    description: 'User Stories, System Design',
    link: 'https://assets.nextleap.app/submissions/EnhancingEngagementforSpotifyIndiasOccasionalListeners_ProductRequirementsDocument1-4fecc285-dd6e-419b-9617-0021cf69921c.pdf',
    color: 'bg-pink-100 hover:bg-pink-200'
  }
];

const Projects: React.FC = () => {
  return (
    <section className="mb-8">
      <h3 className="text-lg font-semibold text-gray-700 mb-4 text-center">Featured Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <a 
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${project.color} p-4 rounded-lg shadow hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex flex-col`}
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold text-gray-800">{project.title}</h4>
              <FileText size={18} className="text-gray-600" />
            </div>
            <p className="text-sm text-gray-600">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects