// src/components/Header.jsx

import Navbar from "./Navbar";
import "./css/header.css";

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-logo">
        <h1>BLOG Rick and Morty</h1>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
