import React from 'react';
import '../styles/linkStyles.css';

function Header({ currentPage, handlePageChange }) {



  return (
    <header className='hstack gap-3 ' style={{ backgroundColor: "#5D6D7E", fontFamily: "serif", display: "flex", flexWrap: "wrap"}}>
    <h1 className='' style={{marginLeft: "20px", fontSize: "70px", color: "lightBlue"}}>William Seban</h1>
    <ul className="nav border ms-auto" style={{marginRight: "10px", backgroundColor: "lightBlue"}}>
      <li className="nav-item" style={{fontSize: "36px"}}>
        <a
          href="#about"
          onClick={() => handlePageChange('About Me')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item" style={{fontSize: "36px"}}>
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item" style={{fontSize: "36px"}}>
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact Me
        </a>
      </li>
      <li className="nav-item" style={{fontSize: "36px"}}>
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
    </header>
  );
}

export default Header;
