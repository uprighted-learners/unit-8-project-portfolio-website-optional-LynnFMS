import './App.css';
import { HashRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css"
import React from 'react'
import Home from './components/Home';
import About from './components/AboutMe';
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';
import Work from './components/Work';
import Nav from './components/Nav';




function App() {
  // const navigate = useNavigate();
  return (
    <div>
    {/* // <div className="App">
    //   <nav>
    //     <ul>
    //       <li onClick={()=> navigate("/about")}>Link One</li>
    //       <li>Link Two</li>
    //       <li>Link Three</li>
    //     </ul>
    //   </nav>
    //   <h1>Lynn Smollin</h1> */}
      {/* <p>Welcome to my portfolio, fully of code projects!</p>
      <p></p>
      <figure>
        <picture>
          <souce srcset="https://www.fillmurray.com/g/300/400" />
          <img src="https://www.fillmurray.com/g/300/400" />"
        </picture>
        <figcaption>
          Source: <a href="https://www.fillmurray.com/">www.fillmurray.com/</a>
        </figcaption>
      </figure> */}

    
      
    
<Router>
<div className="App">
<h1>Lynn Smollin</h1>
      <Nav />
      {/* <h1>Lynn Smollin</h1> */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/work" element={<Work />} />
        <Route path="/" element={<Home />} />
        </Routes>
        </div>
</Router>

<div>
  
</div>
    


<div className="footer">
<div className="footer">
  <div className="footer-item">lynn1312@gmail.com</div>
  <div className="footer-item"><a href="https://www.linkedin.com/in/lynn-smollin-psmi-68412910b/">LinkedIn</a></div>
  <div className="footer-item"><a href="https://www.linkedin.com/in/lynn-smollin-psmi-68412910b/">Home</a></div>
  <div className="footer-item"><a href="https://www.linkedin.com/in/lynn-smollin-psmi-68412910b/">About</a></div>
  <div className="footer-item"><a href="https://www.linkedin.com/in/lynn-smollin-psmi-68412910b/">Projects</a></div>
  <div className="footer-item"><a href="https://www.linkedin.com/in/lynn-smollin-psmi-68412910b/">Work</a></div>
  <div className="footer-item"><a href="https://www.linkedin.com/in/lynn-smollin-psmi-68412910b/">Hobbies</a></div>
  <div className="footer-item">© 2025</div>
</div>
  
</div>
<div className="footer-item"> 
 </div>

</div>
 
  );
}

export default App;
