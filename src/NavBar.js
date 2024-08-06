import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Añade esta importación
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css';
import logo from './img/logoDentalViscaya.png'; 

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#nosotros">Nosotros</a></li>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
      <div className="phone-btn">
        <button className="phone-button" onClick={() => window.location.href = 'tel:+52 618 144 1177'}>
          <FontAwesomeIcon icon={faPhone} className="icon-nav" />
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
//En las lineas 19-24 modifiicar el numero de teled