import React, { useState } from "react";
import "../styles/navBar.scss";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav
      id="mainNavbar"
      className="navbar navbar-light navbar-expand-lg bg-primary py-0 fixed-top"
    >
      <div className="container-fluid">
        <img className="logo" src={logo} />
        <button
          className="custom-toggler navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapseNavMenu"
          aria-controls="collapseNavMenu"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse `}
          id="collapseNavMenu"
        >
          <ul className="navbar-nav justify-content-between">
           
            <li className="nav-item li-header">
              <a className="nav-link" href="#requisitos">
                Requisitos
              </a>
            </li>

            <li className="nav-item li-header">
              <a className="nav-link" href="#servicios">
                Servicios
              </a>
            </li>
            <li className="nav-item li-header">
              <a className="nav-link" href="#preguntas">
                Preguntas frecuentes
              </a>
            </li>
            <li className="nav-item li-header ">
              <a className="nav-link" href="/avisoprivacidad">
                Aviso de privacidad
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
