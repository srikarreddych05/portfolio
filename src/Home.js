import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <header className="hero-billboard">
        <h1 className="hero-title">Hi, I'm Srikar.</h1>
        <p className="hero-subtitle">
          Aspiring AI & ML Engineer | 3rd Year CSE Undergraduate at Mahindra University specializing in Computer Science, Bioinformatics, and Cryptography.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-play" onClick={() => navigate('/projects')}>
            ▶ Play Projects
          </button>
          <a href="/Srikar_Resume.pdf" download className="btn btn-info">
            ⓘ Download Resume
          </a>
        </div>
      </header>

      <div className="row-section">
        <h2 className="row-title">About Me & Research</h2>
        <div className="row-posters">
          <div className="poster-card" style={{ minWidth: '400px' }}>
            <p className="match-score">99% Match</p>
            <h3>Current Focus</h3>
            <p>Developing verifiable intelligence through Zero-Knowledge Machine Learning (ZKML) and building robust RAG pipelines.</p>
          </div>
          <div className="poster-card" style={{ minWidth: '400px' }}>
            <p className="match-score">Trending</p>
            <h3>LIANA+ Project</h3>
            <p>Developing a DNN Meta-Learner model for cell-cell communication inference methods to ensure robust bioinformatics analysis.</p>
          </div>
          <div className="poster-card" style={{ minWidth: '400px' }}>
            <p className="match-score">Award Winning</p>
            <h3>Verifiable Intelligence</h3>
            <p>Presented "Scaling Zero-Knowledge Proofs for Deep Learning Inference and Training" at the Cryptology Conclave, IIT Hyderabad.</p>
          </div>
        </div>
      </div>

      <div className="row-section">
        <h2 className="row-title">My Toolkit</h2>
        <div className="row-posters">
          <div className="poster-card">
            <h3>Languages</h3>
            <p>Python, R, C++, JavaScript (Node.js)</p>
          </div>
          <div className="poster-card">
            <h3>Frameworks</h3>
            <p>Flutter, PostgreSQL, OpenCV, YOLO, PyTorch, TensorFlow</p>
          </div>
          <div className="poster-card">
            <h3>Specializations</h3>
            <p>RAG, ZKP, Computer Vision, Agentic AI</p>
          </div>
          <div className="poster-card">
            <h3>Contact Info</h3>
            <p>Email: srikarreddy.ch05@gmail.com</p>
            <p>Phone: (+91) 9032619775</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;