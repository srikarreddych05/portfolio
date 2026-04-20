import React from 'react';

function Home() {
  return (
    <div className="home-page">
      <div className="profile-header">
        {/* Replace with your actual image path */}
        <img src="/profile-placeholder.jpg" alt="Srikar Reddy" className="profile-pic" />
        <h1>Srikar Reddy</h1>
      </div>

      <section>
        <h2>About Me</h2>
        <p>
          I am a 3rd-year Computer Science Engineering student enrolled in an Integrated M.Tech program at Mahindra University (Roll No: Se23umcs010). I thrive in dynamic environments and enjoy applying technical problem-solving to real-world challenges.
        </p>
      </section>

      <section>
        <h2>Research Interests</h2>
        <p>
          My academic and research focus lies in Artificial Intelligence, Machine Learning, and Natural Language Processing, with a specific emphasis on Agentic AI and building robust Retrieval-Augmented Generation (RAG) pipelines. I am also deeply engaged in advanced cryptography and privacy-preserving technologies, including Zero-Knowledge Proofs (ZKP) and Zero-Knowledge Machine Learning (ZKML).
        </p>
      </section>

      <section>
        <h2>Personal Details</h2>
        <ul className="details-list">
          <li><strong>Name:</strong> Srikar Reddy</li>
          <li><strong>Phone:</strong> (+91) 9032619775</li>
          <li><strong>Personal Email:</strong> srikarreddy.ch05@gmail.com</li>
          <li><strong>College Email:</strong> se23umcs010@mahindrauniversity.edu.in</li>
        </ul>
      </section>

      <section>
        <h2>Skills</h2>
        <ul className="skills-list">
          <li><strong>Programming:</strong> Python, SQL, C</li>
          <li><strong>AI & ML:</strong> Gen AI, OpenCV, Prompt Engineering</li>
          <li><strong>Data:</strong> Data Visualization, Model Evaluation</li>
          <li><strong>Tools:</strong> Git, Database Management Systems</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;