import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Resume from './pages/Resume';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About Me');

  const renderPage = () => {
    if (currentPage === 'About Me') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div style={{backgroundColor: "lightBlue"}}>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}
