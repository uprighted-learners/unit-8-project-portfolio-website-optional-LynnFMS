import React from 'react'
import resume from '../assets/LYNN.SMOLLIN_Resume_1.21.2025.pdf';
import ResPic from '../assets/resumeclip.jpg';

function Work() {
  return (
    <div className='WorkPage'>
       <a href= {resume} download>
  <img className='Picture' src={ResPic} alt="My Personal Resume Screenshot" style={{width: "10em", height: "10em"}}/>
  </a>

<p style={{textAlign: "center", fontSize: "2em"}}> Career Goals: I plan on using my experience from the Upright bootcamp to 
    Enhance my knowledge in Sales, DevOps, Engineering, and Project Management 
    through additional courses, workshops, or on-the-job experiences.</p>

<p style={{textAlign: "left", fontSize: "1.5em"}}>
Experience: <br></br>
October 2024 – present
Cloud Operations Coordinator, Cloud Business • Precisely – CBO
Cloud Business Operations 
<p></p>
June 2022 – September 2024 
Data Engineer, Quality Assurance • Precisely – Enrich 

<br></br>February 2016 – June 2022 
Data Engineer, Data Precisely – Enrich 
<p></p>Certifications:
<br></br>February 2021: 
Scrum Master</p>    

</div>

   
  )
}

export default Work;