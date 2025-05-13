import React from 'react';
import { ExperienceItem } from '../types/resume';

const experiences: ExperienceItem[] = [
  {
    title: 'Product Fellow, NextLeap',
    location: 'Chennai, IN',
    period: 'Jan 2025 - Present',
    responsibilities: [
      'Developed comprehensive product strategy using market research, user interviews, and competitive analysis.',
      'Led survey design and analysis for a 200+ respondent study on Spotify user behavior.',
      'Synthesized user feedback into product requirements, prioritizing features for MVP deliverables.',
      'Collaborated with UX, engineering, and marketing teams to integrate research insights into development sprints.'
    ]
  },
  {
    title: 'Software Engineer in Test | Entropik Tech',
    location: 'Chennai, IN',
    period: 'June 2022 - Present',
    responsibilities: [
      'Built scalable automation frameworks and CI/CD pipelines using Jenkins to speed up releases.',
      'Joined product design reviews to analyze requirements and identify risks.',
      'Led post-launch analysis and market research to track feature impact and adoption.',
      'Oversaw defect resolution to maintain quality and reduce production issues.',
      'Delivered product demos and benchmarks to highlight value and gather feedback.'
    ]
  },
  {
    title: 'QA Engineer, PhotoGAUGE',
    location: 'Chennai, IN',
    period: 'Feb 2020 - Jan 2021',
    responsibilities: [
      'Owned QA across Android, iOS, and Web platforms to ensure end-to-end software quality.',
      'Created test plans and release strategies to meet delivery timelines.',
      'Verified backend changes and created test cases in collaboration with DevOps and web teams.',
      'Performed production-level testing of Docker deployments.',
      'Analyzed app performance against business goals to drive strategic decisions.'
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-1">WORK EXPERIENCE</h2>
      
      {experiences.map((exp, index) => (
        <div key={index} className={`mb-6 ${index !== experiences.length - 1 ? 'border-b border-gray-200 pb-6' : ''}`}>
          <div className="flex flex-col md:flex-row md:justify-between mb-1">
            <h3 className="text-lg font-bold text-gray-700">{exp.title}</h3>
            <span className="text-gray-600">{exp.period}</span>
          </div>
          <div className="text-gray-600 mb-2">{exp.location}</div>
          <ul className="list-disc pl-5">
            {exp.responsibilities.map((resp, idx) => (
              <li key={idx} className="text-gray-700 mb-1">{resp}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;