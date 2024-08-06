import DOMPurify from 'dompurify';
import React from 'react';
import './App.css';
import NavBar from './NavBar';


// Imagenes 
import inicioImage from './img/fit-inicio.png';
import infoImage from './img/info-ini.png'; 
import extraImage from './img/fot-prom.png'; 
import servicesImage from './img/tar-cred.png';
import logologo from './img/logoDentalViscaya.png'; 

// Imagenes de las cards
import cardUno from './img/5D7982.png';
import cardDos from './img/5D9599.png'; 
import cardTres from './img/97BDBF.png';
import cardCuatro from './img/778E7C.png';
import cardCinco from './img/C6B7C2.png'; 
import cardSeis from './img/EADCAC.png'; 
import cardSiete from './img/F5D0D0.png'; 
import cardOcho from './img/FEE1FF.png';

// Iconos para cards
import iconUno from './img/implantes.png';  
import iconDos from './img/canal-raiz.png';
import iconTres from './img/ortodoncia.png';
import iconCuatro from './img/carillas-dentales.png';
import iconCinco from './img/cirugia-dental.png';
import iconSeis from './img/periodoncia.png';
import iconSiete from './img/carilla-dental.png';
import iconOcho from './img/implante-dental.png';

// Modulos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Icono de WhatsApp
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function App() {
  const services = [
    { title: "Prótesis", description: "Tratamiento integral para la mejora anatómica, posición y color de los dientes mediante prótesis dentales.", image: cardUno, icon: iconUno },
    { title: "Endodoncia", description: "Se realiza en piezas dentales con caries profundas u otras condiciones.", image: cardDos, icon: iconDos },
    { title: "Ortodoncia", description: "Prevención y tratamiento de las anomalías de las estructuras dentomaxilofaciales.", image: cardTres, icon: iconTres },
    { title: "Carillas", description: "Estética mediante carillas, que incluye ajustes anatómicos, posicionales y de color para una sonrisa más armoniosa y atractiva.", image: cardCuatro, icon: iconCuatro },
    { title: "Cirugías", description: "Contamos con equipos y personal capacitado para realizar diferentes tipos de cirugías dentales.", image: cardCinco, icon: iconCinco },
    { title: "Periodoncia", description: "Tratamiento de las enfermedades que afectan los tejidos que dan soporte a los órganos dentarios.", image: cardSeis, icon: iconSeis },
    { title: "Diseño de Sonrisa", description: "Tratamiento integral para la mejora anatómica, posición y color de los dientes a tratar.", image: cardSiete, icon: iconSiete },
    { title: "Implantes Dentales", description: "Sustituto artificial de la raíz natural del órgano dentario. Se coloca en una cirugía.", image: cardOcho, icon: iconOcho },
  ];
  const sanitizedDescription = (description) => DOMPurify.sanitize(description);

  return (
    <div className="App">
      <NavBar />
      <section id="inicio" className="section">
        <img src={inicioImage} alt="Inicio" className="inicio-image" />
      </section>

      <section id="nosotros" className="section">
        <div className="nosotros-content">
          <div className="nosotros-info">
            <div className="nosotros-image-container">
              <img src={infoImage} alt="Información" className="nosotros-image" />
              <div className="nosotros-gradient"></div>
            </div>
            
            <div className="contact-buttons">
              <button className="contact-btn" onClick={() => window.location.href = 'tel:+526181441177'}>
                <FontAwesomeIcon icon={faPhone} className="icon-btn" />
                L l á m a n o s
              </button>
            </div>
          </div>
          <div className="nosotros-extra">
            <img src={extraImage} alt="Extra" className="extra-image" />
            <div className="more-info-container">
               <button className="contact-btn-w" onClick={() => window.location.href = 'https://wa.me/526181441177'}>
                <FontAwesomeIcon icon={faWhatsapp} size="lg" className="icon-btn-w"/>
                W h a t s A p p 
              </button>
            {/*   <button className="more-info-btn" onClick={() => window.location.href = '/more-info'}>
                <FontAwesomeIcon icon={faPhone} />
                Estética Dental  
              </button> */}
            </div>
          </div>
        </div>
      </section>
  
      <section id="servicios" className="section">
        <h2 class="section-title">Nuestros Servicios</h2>
        <h3 class="section-subtitle">¿En qué podemos ayudarte?</h3>
        <div className="servicios-cards">
          {services.map((service, index) => (
            <div className="card" key={index}>
              <img src={service.image} alt={service.title} className="card-image" />
              <div className="card-overlay">
                <img src={service.icon} alt={`${service.title} icon`} className="card-icon" />
                <h2 className="card-title">{service.title}</h2>
                <p className="card-description">{sanitizedDescription(service.description)}</p>
{/*                 <button className="card-button">Ver más</button>*/}   
            </div>
          </div>
          ))}
        </div>
      </section>

      <section id="contacto" className="section">
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-rectangle">
              <h2 className="contacto-title">¡ ¡ C o n t a c t a n o s ! !</h2>
              <p className="contacto-description">Haz clic en cualquier botón que aparece a continuación para pedir información o agendar una cita.</p>
              <div className="contact-buttons-s">
                <button className="contact-btn-s" onClick={() => window.location.href = 'tel:+526183290704'}>
                  <FontAwesomeIcon icon={faPhone} />
                </button>
                <button className="contact-btn-s" onClick={() => window.location.href = 'https://wa.me/526181441177'}>
                  <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>



      <div className="contact-columns">
        <div className="contact-column">
          <h3 class="contacto-contacto-title">UBICACIÓN</h3>
          <img src={logologo} alt="Información" className="contact-column-image" />
          <p class="contacto-contacto-description">Clinica Dental Vizcaya</p>
          <p class="contacto-contacto-description">Telefono: 52-618-144-11-77</p>
          <p class="contacto-contacto-description">Calle Benito Crespo 233 entre Fúnez</p>
          <p class="contacto-contacto-description">Vásquez de Mercado,Colonia Nueva</p>
          <p class="contacto-contacto-description">Vizcaya, 34080 Durango, Dgo.</p>
        </div>
        <div className="contact-column">
          <h3 class="contacto-contacto-title">MÉTODO DE PAGO</h3>
          <img src={servicesImage} alt="Servicios" className="contact-column-image-mp" />
          <p class="contacto-contacto-description">Pagos con tarjetas de  débito/crédito.</p>
          <p class="contacto-contacto-description">U otras facilidades.</p>
        </div>
        <div className="contact-column">
          <h3 class="contacto-contacto-title">NAVEGACIÓN</h3>
          <ul class="contacto-navigation-list">
            <li><a href="#inicio" class="contacto-navigation-link">Inicio</a></li>
            <li><a href="#nosotros" class="contacto-navigation-link">Nosotros</a></li>
            <li><a href="#servicios" class="contacto-navigation-link">Servicios</a></li>
            <li><a href="#contacto" class="contacto-navigation-link">Contacto</a></li>
          </ul>
        </div>
      </div>

      <div className="author-info">
        <p>© Mayo 2024 JRG & JCV</p>
      </div>
    </div>
  );
}

export default App;
