import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Projects from './Projects';
import About from './About';
import Resume from './Resume';
import Contact from './Contact'

function Portfolio() {
  const [currentPage, handlePageChange] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Projects':
        return <Projects />;
      case 'Resume':
        return <Resume />;
      case 'Contact':
        return <Contact />;
        default:
          return <About />;
    }
  };

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>{renderPage(currentPage)}</div>
    </div>
  );
}

export default Portfolio;
