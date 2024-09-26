import './App.css';
import React, { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  useEffect(() => {
    const projectWrappers = document.querySelectorAll('.project-wrapper');

    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateX(0)';
          entry.target.style.transition = 'all 1s ease-out'; // Trigger animation
          observer.unobserve(entry.target); // Once animated, stop observing
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // Trigger when at least 10% is in view
    });

    // Observe each project wrapper
    projectWrappers.forEach(wrapper => {
      observer.observe(wrapper);

      // Immediate check if already in view (on load)
      const rect = wrapper.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        wrapper.style.opacity = '1';
        wrapper.style.transform = 'translateX(0)';
      }
    });

    return () => observer.disconnect(); // Clean up the observer when unmounting
  }, []);

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
          <div className="project-description">
            <h2>Project Title 1</h2>
            <p>A brief description of the project goes here.</p>
          </div>
        </div>
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
          <div className="project-description">
            <h2>Project Title 2</h2>
            <p>A brief description of the project goes here.</p>
          </div>
        </div>
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
          <div className="project-description">
            <h2>Project Title 3</h2>
            <p>A brief description of the project goes here.</p>
          </div>
        </div>
      </div>
      <div id="data" className="section">
        <h1>Data</h1>
        <div className="project-wrapper">
          <div className="project-card">
            <img src="data-image.jpg" alt="Data Project" className="project-image" />
            <div className="project-links">
              <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" className="project-link">
                <i className="fas fa-globe"></i>  {/* Ícono del globo terráqueo */}
              </a>
            </div>
          </div>
          <div className="project-description">
            <h2>Data Project Title</h2>
            <p>A brief description of the data project goes here.</p>
          </div>
        </div>
        <div className="project-wrapper">
          <div className="project-card">
            <img src="project1.jpg" alt="Project 1" className="project-image" />
            <div className="project-links">
            <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" className="project-link">
              <i className="fas fa-globe"></i>  {/* Ícono del globo terráqueo */}
            </a>
            </div>
          </div>
          <div className="project-description">
            <h2>Project Title 2</h2>
            <p>A brief description of the project goes here.</p>
          </div>
        </div>
        <div className="project-wrapper">
          <div className="project-card">
            <img src="project1.jpg" alt="Project 1" className="project-image" />
            <div className="project-links">
            <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" className="project-link">
              <i className="fas fa-globe"></i>  {/* Ícono del globo terráqueo */}
            </a>
            </div>
          </div>
          <div className="project-description">
            <h2>Project Title 3</h2>
            <p>A brief description of the project goes here.</p>
          </div>
        </div>
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
