import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  // This creates the Netflix effect where the navbar turns black when you scroll down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HashRouter>
      <nav className={`navbar ${isScrolled ? 'nav-black' : ''}`}>
        <NavLink to="/" className="nav-brand">SRIKAR REDDY</NavLink>
        <div className="nav-links">
          <NavLink to="/" end className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? "active-link" : ""}>Projects</NavLink>
        </div>
      </nav>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;