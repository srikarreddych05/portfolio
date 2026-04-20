import React from 'react';

function Projects() {
  return (
    <div className="projects-page">
      <h1>My Projects</h1>
      
      <div className="project-card">
        <h2>Smart Parking Management System</h2>
        <p>
          A Smart Park assistant designed to optimize parking traffic and ensure organized parking facilities. The architecture prioritizes a "manual-first" failsafe layout for administrators, ensuring robust system control. It is built for production scalability using a Node.js backend and a Flutter frontend.
        </p>
        <a href="https://github.com/Srikarreddych05/smart-parking" target="_blank" rel="noopener noreferrer" className="github-link">
          View on GitHub
        </a>
      </div>

      <div className="project-card">
        <h2>LIANA+ Cell-Cell Communication</h2>
        <p>
          A bioinformatics project focusing on a DNN Meta-Learner for robust Cell-Cell Communication (CCC) inference. The project utilizes a streamlined ANN (Artificial Neural Network) architecture to accurately process and model complex CCC datasets.
        </p>
        <a href="https://github.com/Srikarreddych05/liana-plus" target="_blank" rel="noopener noreferrer" className="github-link">
          View on GitHub
        </a>
      </div>
    </div>
  );
}

export default Projects;