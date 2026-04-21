import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      
      {/* Hero Banner Area */}
      <section className="section-wrapper">
        <div className="hero-card">
          <div className="hero-left">
            <span className="hero-tag">Computer Science Engineer</span>
            <h1 className="hero-title">
              Hi, I'm <br />
              <span className="hero-name">Srikar Reddy</span>
            </h1>
            <p className="hero-desc">
              Passionate about building verifiable intelligence and developing secure, scalable systems using Python, Advanced RAG pipelines, and AI frameworks.
            </p>
            <div className="btn-group">
              <button onClick={() => navigate('/projects')} className="btn btn-primary">View Projects</button>
              <a href="/Srikar_Resume.pdf" download className="btn btn-outline">View Resume</a>
            </div>
            <div className="social-links">
              <a href="https://linkedin.com/in/srikar-reddy-6a4a21280/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <span>•</span>
              <a href="https://github.com/srikarreddych05" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-stats-card">
              <div className="stats-header">M.TECH CSE • MAHINDRA UNIVERSITY • 2027</div>
              <div className="stats-grid">
                <div className="stat-box">
                  <div className="stat-label">CGPA</div>
                  <div className="stat-value">6.5</div>
                </div>
                <div className="stat-box">
                  <div className="stat-label">Specialty</div>
                  <div className="stat-value">Gen AI</div>
                </div>
                <div className="stat-box">
                  <div className="stat-label">Focus</div>
                  <div className="stat-value">ZKML</div>
                </div>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0, lineHeight: '1.5' }}>
                Enthusiastic AI researcher with hands-on experience in Retrieval-Augmented Generation, computer vision pipelines, and full-stack project development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="section-wrapper split-section">
        <div className="about-left">
          <h2 className="section-title">About Me</h2>
          <div className="about-text">
            <p>I enjoy tackling complex computational challenges with an analytical mindset, always focusing on logic, scalability, and robust architecture.</p>
            <p>I am a 3rd-year Integrated M.Tech student specializing in Computer Science at Mahindra University, Hyderabad. My interests span across Artificial Intelligence, Bioinformatics, and Cryptography, and I love turning theoretical models into practical solutions.</p>
            <p>I work primarily with Python, Node.js, and C++, and have a strong foundation in cutting-edge AI technologies such as Zero-Knowledge Machine Learning (ZKML) and deep learning frameworks.</p>
          </div>
        </div>
        
        <div className="about-right">
          <div className="education-card">
            <h3 style={{ marginTop: 0, marginBottom: '1.5rem', fontSize: '1.2rem' }}>Education</h3>
            <div className="edu-item">
              <h4>Integrated M.Tech, Computer Science</h4>
              <p>Mahindra University, Hyderabad</p>
              <p style={{ fontSize: '0.8rem', marginTop: '0.2rem' }}>CGPA: 6.5 • Expected Graduation: 2027</p>
            </div>
            <div className="edu-item">
              <h4>Senior Secondary (Class 12)</h4>
              <p>Excellencia College, Suchitra</p>
              <p style={{ fontSize: '0.8rem', marginTop: '0.2rem' }}>Percentage: 90.6%</p>
            </div>
            <div className="edu-item" style={{ marginBottom: 0 }}>
              <h4>Secondary Education (Class 10)</h4>
              <p>Pearson School (CBSE), Kompally</p>
              <p style={{ fontSize: '0.8rem', marginTop: '0.2rem' }}>Percentage: 80%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-wrapper">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">Feel free to reach out for opportunities, collaborations or ideas.</p>
        
        <div className="contact-container">
          <div className="contact-card">
            <div className="contact-item">
              <span className="contact-label">EMAIL</span>
              <span className="contact-value">srikarreddy.ch05@gmail.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">PHONE</span>
              <span className="contact-value">+91 9032619775</span>
            </div>
            <div className="contact-item" style={{ marginBottom: 0 }}>
              <span className="contact-label">LOCATION</span>
              <span className="contact-value">Alwal, Hyderabad, Telangana, India</span>
            </div>
          </div>
          
          <div className="contact-links" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1rem' }}>
            <a href="https://linkedin.com/in/srikar-reddy-6a4a21280/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-cyan)', textDecoration: 'none' }}>LinkedIn Profile</a>
            <a href="https://github.com/srikarreddych05" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-cyan)', textDecoration: 'none' }}>GitHub Profile</a>
            <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>
              I am always open to discussing internships, AI research projects, and hackathons that help me grow as an engineer.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;