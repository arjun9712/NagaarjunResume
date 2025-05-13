import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8 px-8">
      <h1 className="text-3xl font-bold mb-1 text-center">NAGAARJUN TSN</h1>
      <div className="text-center text-gray-300 mb-2">
        <span>Chennai</span> | <span>8220110347</span> | <span className="hover:text-blue-300 transition-colors duration-300">nagaarjuntsn@gmail.com</span>
      </div>
      <div className="text-center text-gray-300">
        <span>LinkedIn: </span>
        <a 
          href="https://linkedin.com/in/naga-arjun-654210110" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-300 hover:text-blue-200 hover:underline transition-colors duration-300"
        >
          linkedin.com/in/naga-arjun-654210110
        </a>
      </div>
    </header>
  );
};

export default Header;