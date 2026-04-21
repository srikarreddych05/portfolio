import React from 'react';
import { HashRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import './App.css';

function App() {
  return (
    <HashRouter>
      <nav className="navbar">
        <NavLink to="/" className="nav-brand">SRIKAR<span>.</span></NavLink>
        <div className="nav-links">
          <NavLink to="/" end className={({ isActive }) => isActive ? "active-link" : ""}>About</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? "active-link" : ""}>Projects & Skills</NavLink>
        </div>
      </nav>
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;