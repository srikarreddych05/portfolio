import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-content">
      
      {/* 2. Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">Hi, I'm Srikar Reddy.</h1>
        <p className="hero-subtitle">
          Aspiring AI & ML Engineer | 3rd Year CSE Undergraduate at Mahindra University.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => navigate('/projects')}>
            View My Projects
          </button>
          {/* Ensure you put your actual resume PDF in the public folder to make this work */}
          <a href="/Srikar_Resume.pdf" download className="btn btn-secondary">
            Download Resume
          </a>
        </div>
      </section>

      {/* 3. About Me */}
      <section id="about" className="section-container">
        <h2 className="section-title">About Me</h2>
        <p className="about-text">
          I am an Integrated M.Tech student specializing in Computer Science, deeply interested in the intersection of Artificial Intelligence, Bioinformatics, and Cryptography. My current focus lies in developing verifiable intelligence through Zero-Knowledge Machine Learning (ZKML) and building robust RAG pipelines.
        </p>
      </section>

      {/* 4. Technical Skills */}
      <section id="skills" className="section-container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="grid-2-col">
          <div className="card">
            <h3>Languages</h3>
            <p>Python, R, C++, JavaScript (Node.js)</p>
          </div>
          <div className="card">
            <h3>Frameworks & Tools</h3>
            <p>Flutter, PostgreSQL, OpenCV, YOLO, PyTorch, TensorFlow</p>
          </div>
          <div className="card" style={{ gridColumn: '1 / -1' }}>
            <h3>Specializations</h3>
            <div className="tag-container">
              <span className="tag">Retrieval-Augmented Generation (RAG)</span>
              <span className="tag">Zero-Knowledge Proofs (ZKP)</span>
              <span className="tag">Computer Vision</span>
              <span className="tag">Agentic AI</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Research & Achievements */}
      <section id="research" className="section-container">
        <h2 className="section-title">Research & Achievements</h2>
        <div className="grid-2-col">
          <div className="card">
            <h3>Verifiable Intelligence (Poster)</h3>
            <p>
              Presented "Scaling Zero-Knowledge Proofs for Deep Learning Inference and Training" at the Cryptology Conclave, IIT Hyderabad (CCS IITH).
            </p>
          </div>
          <div className="card">
            <h3>LIANA+ Project</h3>
            <p>
              Developing a DNN Meta-Learner model for cell-cell communication inference methods to ensure robust bioinformatics analysis.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Professional Certifications */}
      <section id="certifications" className="section-container">
        <h2 className="section-title">Professional Certifications</h2>
        <div className="grid-2-col">
          <div className="card">
            <h3>Google Cloud Computing Foundations</h3>
            <p><strong>Issuer:</strong> Google</p>
            <p><strong>Issued:</strong> October 2025</p>
            <p style={{ fontSize: '0.8rem', color: '#6b7280' }}>Credential ID: 19482318</p>
          </div>
          <div className="card">
            <h3>Prompt Design in Vertex AI</h3>
            <p><strong>Issuer:</strong> Google</p>
            <p><strong>Issued:</strong> August 2025</p>
            <p style={{ fontSize: '0.8rem', color: '#6b7280' }}>Credential ID: 17264471</p>
          </div>
        </div>
      </section>

      {/* 7. Contact & Links */}
      <section id="contact" className="section-container" style={{ borderBottom: 'none' }}>
        <h2 className="section-title">Contact & Links</h2>
        <ul className="contact-list">
          <li><strong>Email:</strong> <a href="mailto:se23umcs010@mahindrauniversity.edu.in">se23umcs010@mahindrauniversity.edu.in</a></li>
          <li><strong>Personal Email:</strong> <a href="mailto:srikarreddy.ch05@gmail.com">srikarreddy.ch05@gmail.com</a></li>
          <li><strong>Location:</strong> Hyderabad, Telangana, India</li>
          <li><strong>GitHub:</strong> <a href="https://github.com/Srikarreddych05" target="_blank" rel="noopener noreferrer">github.com/Srikarreddych05</a></li>
          <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/srikar-reddy-6a4a21280/" target="_blank" rel="noopener noreferrer">linkedin.com/in/srikar-reddy-6a4a21280/</a></li>
        </ul>
      </section>

    </div>
  );
}

export default Home;