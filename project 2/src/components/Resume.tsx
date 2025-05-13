import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';
import { Download } from 'lucide-react';
import Header from './Header';
import Summary from './Summary';
import Experience from './Experience';
import Projects from './Projects';
import AIProducts from './AIProducts';
import Education from './Education';

const Resume: React.FC = () => {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleExportPDF = () => {
    if (!resumeRef.current) return;
    
    const element = resumeRef.current;
    const opt = {
      margin: 10,
      filename: 'nagaarjun_tsn_resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Hide button during export
    const exportBtn = document.getElementById('export-button');
    if (exportBtn) exportBtn.style.display = 'none';
    
    html2pdf().set(opt).from(element).save().then(() => {
      // Show button after export
      if (exportBtn) exportBtn.style.display = 'flex';
    });
  };

  return (
    <div className="container mx-auto max-w-4xl">
      <button 
        id="export-button"
        onClick={handleExportPDF} 
        className="fixed top-4 right-4 z-10 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out flex items-center space-x-2"
      >
        <Download size={18} />
        <span>Export PDF</span>
      </button>
      
      <div 
        ref={resumeRef}
        className="bg-white shadow-xl rounded-lg overflow-hidden mx-4 print:shadow-none"
      >
        <Header />
        <div className="px-8 py-6">
          <Summary />
          <Experience />
          <Projects />
          <AIProducts />
          <Education />
        </div>
      </div>
    </div>
  );
};

export default Resume;