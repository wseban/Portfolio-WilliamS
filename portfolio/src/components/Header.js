import React from 'react';


function Header({ currentPage, handlePageChange }) {
  return (
    <header className='hstack gap-3 ' style={{height: "100px", backgroundColor: "#5D6D7E"}}>
    <h1 className='' style={{marginLeft: "20px", color: "aqua"}}>William Seban</h1>
    <ul className="nav border ms-auto" style={{marginRight: "10px", backgroundColor: "aqua", textDecoration: 'none'}}>
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
