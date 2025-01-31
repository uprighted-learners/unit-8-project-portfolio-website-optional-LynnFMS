import './App.css';
import { HashRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css"
import React from 'react'
import Home from './components/Home';
import About from './components/AboutMe';
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';
import Work from './components/Work';
import Contact from './components/Contact';
import Nav from './components/Nav';




function App() {
  return (
    <div className='Everything'>
<div className="App"> 
<Router className="Router">
<h1>Lynn Smollin</h1>
      <Nav />
      <Routes>
        <Route path="/aboutme" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/work" element={<Work />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
</Router>
    </div>  
<div>
</div>
    


<div className="footer">
<div className="footer">
  <div className="footer-item">lynn1312@gmail.com</div>
  <div className="footer-item"><a href="https://www.linkedin.com/in/lynn-smollin-psmi-68412910b/">LinkedIn</a></div>
  <div className="footer-item"><a href="http://localhost:5174/home">Home</a></div>
  <div className="footer-item"><a href="http://localhost:5174/about#/aboutme">About</a></div>
  <div className="footer-item"><a href="http://localhost:5174/about#/projects">Projects</a></div>
  <div className="footer-item"><a href="http://localhost:5174/about#/work">Work</a></div>
  <div className="footer-item"><a href="http://localhost:5174/about#/hobbies">Hobbies</a></div>
  <div className="footer-item"><a href="http://localhost:5174/about#/Contact">Contact</a></div>
  <div className="footer-item">© 2025</div>
</div>
  
</div>
<div className="footer-item"> 
 </div>

</div>
 
  );
}

export default App;
