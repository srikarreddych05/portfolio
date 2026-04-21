import React from 'react';

function Projects() {
  return (
    <div className="projects-page">
      <h1 style={{ marginTop: '2rem' }}>TV Shows & Movies? No, Just Code.</h1>
      
      <h2 className="row-title">Trending Now</h2>
      <div className="project-row">
        
        <div className="project-card">
          <h2>Smart Parking Management System</h2>
          <p className="match-score" style={{ color: '#46d369', fontWeight: 'bold', margin: '0.5rem 0' }}>98% Match</p>
          <p>
             A Smart Park assistant built for production scalability using a Node.js backend and a Flutter frontend, integrated with a Computer Vision pipeline using OpenCV and YOLO for real-time vehicle detection.
          </p>
          <a href="https://github.com/Srikarreddych05/smart-parking" target="_blank" rel="noopener noreferrer" className="github-link">
            Watch Repository ➔
          </a>
        </div>

        <div className="project-card">
          <h2>LIANA+ Cell-Cell Communication</h2>
          <p className="match-score" style={{ color: '#46d369', fontWeight: 'bold', margin: '0.5rem 0' }}>95% Match</p>
          <p>
            A bioinformatics project focusing on a DNN Meta-Learner for robust Cell-Cell Communication inference. Utilizes an ensemble neural network architecture to accurately process complex CCC datasets.
          </p>
          <a href="https://github.com/Srikarreddych05/liana-plus" target="_blank" rel="noopener noreferrer" className="github-link">
            Watch Repository ➔
          </a>
        </div>

      </div>

      <h2 className="row-title">My List (Upcoming)</h2>
      <div className="project-row">
        <div className="project-card" style={{ borderStyle: 'dashed' }}>
          <h2>Zero-Knowledge Machine Learning</h2>
          <p>Research and implementation of scaling Zero-Knowledge Proofs for Deep Learning Inference and Training.</p>
          <span className="github-link" style={{ color: '#808080' }}>Coming Soon...</span>
        </div>
      </div>

    </div>
  );
}

export default Projects;