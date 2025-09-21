import React from 'react'
// import { FaGithub, FaLinkedin, FaBars } from 'react-icons/fa';
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">L</div>

      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#sobre">Sobre Min</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
      </nav>

      {/* <div className="menu-icon">
        <FaBars />
      </div> */}
    </header>
  );
}

export default Header;