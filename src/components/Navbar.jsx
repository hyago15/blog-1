// src/components/Navbar.jsx

import "./css/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-item">
          <a href="/contact">Contato</a>
        </li>
        <li className="nav-item">
          <a href="/about">Sobre</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
