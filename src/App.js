import React from 'react';

function Projects() {
  return (
    <div className="projects-content" style={{ padding: '4rem 5%' }}>
      <h1 className="section-title">Featured Projects</h1>
      
      <div className="grid-2-col">
        <div className="card">
          <h2>Smart Parking Management System</h2>
          <p>
            A cross-platform system utilizing real-time computer vision for vehicle detection and automated parking management.
          </p>
          <div className="tag-container" style={{ marginBottom: '1.5rem' }}>
            <span className="tag">Flutter</span>
            <span className="tag">Node.js</span>
            <span className="tag">PostgreSQL</span>
            <span className="tag">OpenCV</span>
            <span className="tag">YOLO</span>
          </div>
          <a href="https://github.com/Srikarreddych05/smart-parking" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ display: 'inline-block', padding: '0.5rem 1rem' }}>
            View Repository
          </a>
        </div>

        <div className="card">
          <h2>Sign Language Recognition</h2>
          <p>
            A real-time CV application designed to classify and detect sign language gestures to improve accessibility communication.
          </p>
          <div className="tag-container" style={{ marginBottom: '1.5rem' }}>
            <span className="tag">Python</span>
            <span className="tag">OpenCV</span>
          </div>
          {/* Update this link if you have a specific repository for this project */}
          <a href="https://github.com/Srikarreddych05" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ display: 'inline-block', padding: '0.5rem 1rem' }}>
            View Repository
          </a>
        </div>
      </div>
      
    </div>
  );
}

export default Projects;