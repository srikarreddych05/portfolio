import React from 'react';

function Projects() {
  return (
    <div className="projects-wrapper">
      
      {/* Skills Section */}
      <section className="section-wrapper">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">A blend of advanced programming, AI frameworks, and development fundamentals.</p>
        
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Programming</h3>
            <div className="pill-container">
              <span className="skill-pill">Python</span>
              <span className="skill-pill">C / C++</span>
              <span className="skill-pill">SQL</span>
              <span className="skill-pill">JavaScript</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>AI & ML</h3>
            <div className="pill-container">
              <span className="skill-pill">Gen AI</span>
              <span className="skill-pill">OpenCV</span>
              <span className="skill-pill">Prompt Engineering</span>
              <span className="skill-pill">PyTorch / TensorFlow</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Domains & Tools</h3>
            <div className="pill-container">
              <span className="skill-pill">RAG Pipelines</span>
              <span className="skill-pill">Zero-Knowledge Proofs</span>
              <span className="skill-pill">Flutter & Node.js</span>
              <span className="skill-pill">Git & DBMS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-wrapper">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Real-world academic work showcasing architecture, AI, and scalability.</p>

        <div className="project-card">
          <span className="project-featured">FEATURED</span>
          <h3>Smart Parking Management System</h3>
          <p>Developed a cross-platform application to optimize parking traffic utilizing real-time computer vision.</p>
          <ul className="project-list">
            <li>Integrated a Computer Vision pipeline using OpenCV and YOLO for real-time vehicle detection.</li>
            <li>Built for production scalability utilizing a robust Node.js backend.</li>
            <li>Created a cross-platform user experience using the Flutter framework.</li>
            <li>Automated parking slot state classification and tracking for administrative failsafes.</li>
          </ul>
          <div className="pill-container" style={{ marginBottom: '1.5rem' }}>
            <span className="skill-pill">Flutter</span>
            <span className="skill-pill">Node.js</span>
            <span className="skill-pill">OpenCV</span>
            <span className="skill-pill">YOLO</span>
            <span className="skill-pill">PostgreSQL</span>
          </div>
          <a href="https://github.com/Srikarreddych05/smart-parking" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-cyan)', textDecoration: 'none', fontSize: '0.9rem' }}>View Source Code</a>
        </div>

        <div className="project-card">
          <h3>LIANA+ Cell-Cell Communication</h3>
          <p>A bioinformatics project focusing on Deep Neural Network architectures for biological data analysis.</p>
          <ul className="project-list">
            <li>Developed a DNN Meta-Learner model for cell-cell communication inference methods.</li>
            <li>Utilized an ensemble neural network architecture to ensure robust bioinformatics analysis.</li>
            <li>Processed and classified complex biological datasets.</li>
          </ul>
          <div className="pill-container" style={{ marginBottom: '1.5rem' }}>
            <span className="skill-pill">Python</span>
            <span className="skill-pill">Deep Learning</span>
            <span className="skill-pill">Bioinformatics</span>
          </div>
          <a href="https://github.com/Srikarreddych05/liana-plus" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-cyan)', textDecoration: 'none', fontSize: '0.9rem' }}>View Source Code</a>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-wrapper">
        <h2 className="section-title">Certifications & Achievements</h2>
        <p className="section-subtitle">Validating my skills in cloud platforms, AI, and verifiable intelligence.</p>
        
        <div className="cert-grid">
          <div className="cert-card">
            <h3>Verifiable Intelligence Poster Presentation</h3>
            <p style={{ marginBottom: '1rem' }}>Presented at Cryptology Conclave, IIT Hyderabad (CCS IITH) • Jan 2026</p>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>
              Showcased research on "Scaling Zero-Knowledge Proofs for Deep Learning Inference and Training", exploring the intersection of advanced cryptography and machine learning models.
            </p>
          </div>

          <div className="cert-card">
            <h3>Google Cloud Computing Foundations</h3>
            <p style={{ marginBottom: '1rem' }}>Issued by Google Cloud • Oct 2025</p>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>
              Completed foundational coursework in Google Cloud platforms, understanding core services, compute, storage, and networking concepts. Credential ID: 19482318.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Projects;