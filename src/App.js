import './App.css';
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    section.scrollIntoView({ behavior: 'smooth' });
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

      {/* Secciones envueltas en el borde negro */}
      <div className="black-border"></div>
      <div id="home" className="section">
        <h1>Karim Ghazal Pando</h1>
        <h2>Diving into big data and web development</h2> 
        <h3>With a quite extensive experience in the construction sector, I have decided in recent years to diversify my professional profile by venturing into the field of web development, data analytics and machine learning exploring the use of different tools and libraries. My goal is to apply these cutting-edge knowledge both in architecture and other dynamic sectors, in order to contribute with innovative solutions and staying updated into the digital transformation.</h3> 
        {/* SVG mesh-like cables/roots */}
        <svg className="svg-mesh" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
          <path className="path" d="M0,1000 L1000,0" />
          <path className="path" d="M200,1000 L1000,200" />
          <path className="path" d="M400,1000 L1000,400" />
          <path className="path" d="M600,1000 L1000,600" />
          <path className="path" d="M800,1000 L1000,800" />
          <path className="path" d="M0,800 L800,0" />
          <path className="path" d="M0,600 L600,0" />
          <path className="path" d="M0,400 L400,0" />
        </svg>
      </div>
      <div id="projects" className="section">
        <h1>Projects</h1>
      </div>
      <div id="data" className="section">
        <h1>Data</h1>
      </div>
      <div id="contact" className="section">
        <h1>Contact</h1>
      </div>
      
      {/* Texto de copyright */}
      <div className="copyright">
          &copy; 2024 Made by Karim G.P.
      </div>

      {/* Iconos de redes sociales */}
      <div className="icon-container">
        <a href="https://github.com/KarimGP" target="_blank" rel="noopener noreferrer" className="icon">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/karim-ghazal-pando-6437ab118" target="_blank" rel="noopener noreferrer" className="icon">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>

      {/* Marco rojo fijo */}
      <div className="red-border"></div>
    </div>
  );
}

export default App;
