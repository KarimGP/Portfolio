import './App.css';
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useTranslation } from 'react-i18next'; 
import i18n from './i18n'; 
import fpImage from './img/fp.png';
import bpfImage from './img/bpf.png';
import whapImage from './img/whap.png';
import wplasticImage from './img/wplastic.png';
import primeImage from './img/prime.png';
import polyregImage from './img/polyreg.png';
import hierclustImage from './img/hierclust.png';
import normiaImage from './img/normia.png';

function App() {
  const [language, setLanguage] = useState('en');
  const { t } = useTranslation();
  
  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language); // Change the language
    setLanguage(language); // Actualizar el estado de language
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:karimkgp@gmail.com';
  };

  return (
    <div>
      <nav className="navbar">
        <ul>
          <li><a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')}>Home</a></li>
          <li><a href="#projects" onClick={(e) => handleSmoothScroll(e, '#projects')}>Projects</a></li>
          <li><a href="#data" onClick={(e) => handleSmoothScroll(e, '#data')}>Data</a></li>
          <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}>Contact</a></li>
        </ul>
      </nav>

      <div className="language-selector-vertical">
        <a href="#!" onClick={() => changeLanguage('en')} className={language === 'en' ? 'active' : ''}>EN</a>
        <a href="#!" onClick={() => changeLanguage('ca')} className={language === 'ca' ? 'active' : ''}>CA</a>
        <a href="#!" onClick={() => changeLanguage('es')} className={language === 'es' ? 'active' : ''}>ES</a>
      </div>

      {/* Secciones envueltas en el borde negro */}
      <div className="black-border"></div>
      <div id="home" className="section">
        <h1>{t('home.title')}</h1>
        <h2>{t('home.subtitle')}</h2>
        <h3>{t('home.description')}</h3>
      </div>
      <div id="projects" className="section">
        <h1>{t('projects.title')}</h1>
        <h2>{t('projects.subtitle')}</h2>
        <div className="project-container">
          <div className="project-wrapper">
          <div className="project-card">
            <img src={fpImage} alt="Project 1" className="project-image" />
            <div className="project-links">
              <a href="https://p01-findpoint.onrender.com" target="_blank" rel="noopener noreferrer" className="project-link">
                <i className="fas fa-globe"></i>  {/* Icon */}
              </a>
              <a href="https://github.com/KarimGP/P01-FindPoint" target="_blank" rel="noopener noreferrer" className="project-link">
                <i className="fab fa-github"></i>  {/* GitHub Icon */}
              </a>
            </div>
          </div>
          </div>  
          <div className="project-description">
            <h2>{t('projects.findPointTitle')}</h2>
            <p>{t('projects.findPointDescription')}</p>
          </div>
        </div>
        <div className="project-container">
          <div className="project-wrapper">
            <div className="project-card">
              <img src={normiaImage} alt="Project 1" className="project-image" />
              <div className="project-links">
                <a href="https://normia.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="fas fa-globe"></i>  {/* Ícono del globo terráqueo */}
                </a>
                <a href="https://github.com/KarimGP/Normia" target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>  
          <div className="project-description">
          <h2>{t('projects.normasTitle')}</h2>
          <p>{t('projects.normasDescription')}</p>
          </div>
        </div>
        <div className="project-container">
          <div className="project-wrapper">
            <div className="project-card">
              <img src={bpfImage} alt="Project 1" className="project-image" />
              <div className="project-links">
                <a href="https://github.com/KarimGP" target="_blank" rel="noopener noreferrer" className="project-link">
                  {/*<i className="fas fa-globe"></i> 
                </a>
                <a href="https://github.com/KarimGP" target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="fab fa-github"></i>*/}
                </a>
              </div>
            </div>
          </div>  
          <div className="project-description">
            <h2>{t('projects.bpfTitle')}</h2>
            <p>{t('projects.bpfDescription')}</p>
          </div>
        </div>
      </div>
      <div id="data" className="section">
        <h1>{t('data.title')}</h1>
        <h2>{t('data.subtitle')}</h2>
        <div className="data-container">
          <div className="project-wrapper">
            <div className="project-card">
              <img src={whapImage} alt="Project 1" className="project-image" />
              <div className="project-links">
                <a href="https://app.powerbi.com/view?r=eyJrIjoiNmFiMTE5ODYtMmEzMi00MmIyLWExNTUtZTU3ZDdhNzAwMjQ1IiwidCI6IjE2MDMzYWMxLTJiNWMtNDMzMC1hYjM1LTM3YTY5OGIyZmQ0MSIsImMiOjl9" target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="fas fa-globe"></i>  {/* Ícono del globo terráqueo */}
                </a>
              </div>
            </div>
          </div>  
          <div className="project-description">
            <h2>{t('projects.worldHappinessTitle')}</h2>
            <p>{t('projects.worldHappinessDescription')}</p>
          </div>
        </div>
        <div className="data-container">
          <div className="project-wrapper">
            <div className="project-card">
              <img src={wplasticImage} alt="Project 1" className="project-image" />
              <div className="project-links">
                <a href="https://app.powerbi.com/view?r=eyJrIjoiOWMyZjM5OTctNzAxNi00ZmZjLWJhY2ItYTY1YjFlODRmZGIzIiwidCI6IjE2MDMzYWMxLTJiNWMtNDMzMC1hYjM1LTM3YTY5OGIyZmQ0MSIsImMiOjl9" target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="fas fa-globe"></i>  {/* Ícono del globo terráqueo */}
                </a>
              </div>
            </div>
          </div>  
          <div className="project-description">
            <h2>{t('projects.worldPlasticTitle')}</h2>
            <p>{t('projects.worldPlasticDescription')}</p>
          </div>
        </div>
        <div className="data-container">
          <div className="project-wrapper">
            <div className="project-card">
              <img src={primeImage} alt="Project 1" className="project-image" />
              <div className="project-links">
                <a href="https://app.powerbi.com/view?r=eyJrIjoiN2FlMjFmYTMtNTUwNC00OGI5LThlMTgtZTRkZmNjZGRmM2VkIiwidCI6IjE2MDMzYWMxLTJiNWMtNDMzMC1hYjM1LTM3YTY5OGIyZmQ0MSIsImMiOjl9" target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="fas fa-globe"></i>  {/* Ícono del globo terráqueo */}
                </a>
              </div>
            </div>
          </div>  
          <div className="project-description">
            <h2>{t('projects.primeTitle')}</h2>
            <p>{t('projects.primeDescription')}</p>
          </div>
        </div>
        <div className="data-container">
          <div className="project-wrapper">
            <div className="project-card">
              <img src={polyregImage} alt="Project 1" className="project-image" />
              <div className="project-links">
                <a href={`${process.env.PUBLIC_URL}/resources/polynomial_regression.html`} target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="fas fa-globe"></i>  {/* Ícono del globo terráqueo */}
                </a>
              </div>
            </div>
          </div>  
          <div className="project-description">
            <h2>{t('projects.polynomialRegressionTitle')}</h2>
            <p>{t('projects.polynomialRegressionDescription')}</p>
          </div>
        </div>
        <div className="data-container">
          <div className="project-wrapper">
            <div className="project-card">
              <img src={hierclustImage} alt="Project 1" className="project-image" />
              <div className="project-links">
                <a href={`${process.env.PUBLIC_URL}/resources/hierarchical_clustering.html`} target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="fas fa-globe"></i>  {/* Ícono del globo terráqueo */}
                </a>
              </div>
            </div>
          </div>  
          <div className="project-description">
            <h2>{t('projects.hierarchicalClusteringTitle')}</h2>
            <p>{t('projects.hierarchicalClusteringDescription')}</p>
          </div>
        </div>
      </div>
      <div id="contact" className="section">
        <h3>  </h3>
        <p>
        <span onClick={handleEmailClick} className="email-link">
          <i className="fas fa-envelope" style={{ marginRight: '8px' }}></i>
          {t('contact.sendEmail')}
        </span>
      </p>
      </div>
      
      <div className="copyright">
          &copy; 2024 website developed by Karim G.P.
      </div>

      <div className="icon-container">
        <a href="https://github.com/KarimGP" target="_blank" rel="noopener noreferrer" className="icon">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/karim-ghazal-pando-6437ab118" target="_blank" rel="noopener noreferrer" className="icon">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>

      <div className="red-border"></div>
    </div>
  );
}

export default App;
