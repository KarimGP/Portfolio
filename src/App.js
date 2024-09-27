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
      </div>
      <div id="projects" className="section">
        <h1>Projects</h1>
        <div className="project-container">
          <div className="project-wrapper">
          <div className="project-card">
            <img src="project1.jpg" alt="Project 1" className="project-image" />
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
            <h2>Project Title 1</h2>
            <p>A brief description of the project goes here.</p>
          </div>
        </div>
        <div className="project-container">
          <div className="project-wrapper">
            <div className="project-card">
              <img src="project1.jpg" alt="Project 1" className="project-image" />
              <div className="project-links">
                <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="fas fa-globe"></i>  {/* Ícono del globo terráqueo */}
                </a>
                <a href="https://github.com/yourrepo" target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>  
          <div className="project-description">
            <h2>Project Title 1</h2>
            <p>A brief description of the project goes here.</p>
          </div>
        </div>
        <div className="project-container">
          <div className="project-wrapper">
            <div className="project-card">
              <img src="project1.jpg" alt="Project 1" className="project-image" />
              <div className="project-links">
                <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="fas fa-globe"></i>  {/* Ícono del globo terráqueo */}
                </a>
                <a href="https://github.com/yourrepo" target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>  
          <div className="project-description">
            <h2>Project Title 1</h2>
            <p>A brief description of the project goes here.</p>
          </div>
        </div>
      </div>
      <div id="data" className="section">
        <h1>Data</h1>
        <div className="data-container">
          <div className="project-wrapper">
            <div className="project-card">
              <img src="project1.jpg" alt="Project 1" className="project-image" />
              <div className="project-links">
                <a href="https://app.powerbi.com/view?r=eyJrIjoiNmFiMTE5ODYtMmEzMi00MmIyLWExNTUtZTU3ZDdhNzAwMjQ1IiwidCI6IjE2MDMzYWMxLTJiNWMtNDMzMC1hYjM1LTM3YTY5OGIyZmQ0MSIsImMiOjl9" target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="fas fa-globe"></i>  {/* Ícono del globo terráqueo */}
                </a>
              </div>
            </div>
          </div>  
          <div className="project-description">
            <h2>Project Title 1</h2>
            <p>A brief description of the project goes here.</p>
          </div>
        </div>
        <div className="data-container">
          <div className="project-wrapper">
            <div className="project-card">
              <img src="project1.jpg" alt="Project 1" className="project-image" />
              <div className="project-links">
                <a href="https://app.powerbi.com/view?r=eyJrIjoiN2FlMjFmYTMtNTUwNC00OGI5LThlMTgtZTRkZmNjZGRmM2VkIiwidCI6IjE2MDMzYWMxLTJiNWMtNDMzMC1hYjM1LTM3YTY5OGIyZmQ0MSIsImMiOjl9" target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="fas fa-globe"></i>  {/* Ícono del globo terráqueo */}
                </a>
              </div>
            </div>
          </div>  
          <div className="project-description">
            <h2>Project Title 1</h2>
            <p>A brief description of the project goes here.</p>
          </div>
        </div>
        <div className="data-container">
          <div className="project-wrapper">
            <div className="project-card">
              <img src="project1.jpg" alt="Project 1" className="project-image" />
              <div className="project-links">
                <a href="https://app.powerbi.com/view?r=eyJrIjoiOWMyZjM5OTctNzAxNi00ZmZjLWJhY2ItYTY1YjFlODRmZGIzIiwidCI6IjE2MDMzYWMxLTJiNWMtNDMzMC1hYjM1LTM3YTY5OGIyZmQ0MSIsImMiOjl9" target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="fas fa-globe"></i>  {/* Ícono del globo terráqueo */}
                </a>
              </div>
            </div>
          </div>  
          <div className="project-description">
            <h2>Project Title 1</h2>
            <p>A brief description of the project goes here.</p>
          </div>
        </div>
      </div>
      <div id="contact" className="section">
        <h3> Contact </h3>
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
