import React from 'react';

function Projects() {
  return (
    <div className="projects-page" style={{ paddingTop: '100px' }}>
      <div className="row-section">
        <h2 className="row-title">Top Picks for You (Featured Projects)</h2>
        <div className="row-posters">
          
          <div className="poster-card" style={{ minWidth: '350px' }}>
            <p className="match-score">New Release</p>
            <h3>Smart Parking Management</h3>
            <p>A cross-platform system utilizing real-time computer vision for vehicle detection and automated parking management.</p>
            <p className="tags">Flutter • Node.js • OpenCV • YOLO</p>
            <a href="https://github.com/Srikarreddych05/smart-parking" target="_blank" rel="noopener noreferrer" style={{ color: 'white', display: 'block', marginTop: '10px' }}>Watch Repository ➔</a>
          </div>

          <div className="poster-card" style={{ minWidth: '350px' }}>
            <p className="match-score">Trending Now</p>
            <h3>LIANA+ Cell-Cell Communication</h3>
            <p>Developing a DNN Meta-Learner model for cell-cell communication inference methods to ensure robust bioinformatics analysis.</p>
            <p className="tags">Python • Deep Learning • Bioinformatics</p>
            {/* Update the link if your repository name is different */}
            <a href="https://github.com/Srikarreddych05/liana-plus" target="_blank" rel="noopener noreferrer" style={{ color: 'white', display: 'block', marginTop: '10px' }}>Watch Repository ➔</a>
          </div>

          <div className="poster-card" style={{ minWidth: '350px' }}>
            <p className="match-score">Top 10 in India</p>
            <h3>Sign Language Recognition</h3>
            <p>A real-time CV application designed to classify and detect sign language gestures.</p>
            <p className="tags">Python • OpenCV</p>
            <a href="https://github.com/Srikarreddych05" target="_blank" rel="noopener noreferrer" style={{ color: 'white', display: 'block', marginTop: '10px' }}>Watch Repository ➔</a>
          </div>

        </div>
      </div>

      <div className="row-section">
        <h2 className="row-title">Because You Watched "Google Cloud" (Certifications)</h2>
        <div className="row-posters">
          <div className="poster-card">
            <h3>Google Cloud Computing</h3>
            <p>Issued: Oct 2025</p>
            <p className="tags">Credential ID: 19482318</p>
          </div>
          <div className="poster-card">
            <h3>Prompt Design in Vertex AI</h3>
            <p>Issued: Aug 2025</p>
            <p className="tags">Credential ID: 17264471</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;