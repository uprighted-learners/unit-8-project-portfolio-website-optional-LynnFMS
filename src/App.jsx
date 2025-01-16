import './App.css';
import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom";
import "./App.css"
import React from 'react'
import Home from './components/Home.jsx';
import About from './components/aboutMe';
import Projects from './components/projects';
import Hobbies from './components/Hobbies';
import Work from './components/work';



function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>Link One</li>
          <li>Link Two</li>
          <li>Link Three</li>
        </ul>
      </nav>
      <h1>Lynn Smollin</h1>
      <p>Welcome to my portfolio, fully of code projects!</p>
      <p></p>
      <figure>
        <picture>
          <souce srcset="https://www.fillmurray.com/g/300/400" />
          <img src="https://www.fillmurray.com/g/300/400" />"
        </picture>
        <figcaption>
          Source: <a href="https://www.fillmurray.com/">www.fillmurray.com/</a>
        </figcaption>
      </figure>
      <>
      <Routes>
        <Routes path="/" element={<Home />} />
        <Routes path="/about" element={<About />} />
        <Routes path="/projects" element={<Projects />} />
        <Routes path="/hobbies" element={<Hobbies />} />
        <Routes path="/work" element={<Work />} />
        </Routes>
      </>
    </div>
 
  );
}

export default App;
