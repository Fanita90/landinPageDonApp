import React from "react";
import "../styles/privacity.scss";
import logoIcon from "../assets/logo-icon.png";

const NavbarPdf = () => {
  return (
    <nav
      id="mainNavbar1"
      className="navbar navbar-light navbar-expand-lg bg-primary py-0 fixed-top"
    >
      <div className="container-fluid">
        <img className="logo-icon" alt="logo" src={logoIcon} />

        <ul className="navbar-nav justify-content-between ">
          <li className="nav-item li-header">
            <button  href="/landinPageDonApp/src/components/PdfTicket.js">
              Ver PDF
            </button>
          </li>
          <li className="nav-item li-header">
            <button  href="">
              Imprimir PDF
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarPdf;
