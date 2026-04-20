import React from 'react';
import { HashRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import './App.css';

function App() {
  return (
    <HashRouter>
      <nav className="navbar">
        <NavLink to="/" end className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "active-link" : ""}>Projects</NavLink>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;