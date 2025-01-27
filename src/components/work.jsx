import React from 'react'
import resume from '../assets/LYNN.SMOLLIN_Resume_1.21.2025.pdf';


function Work() {
  return (
    <div className='WorkPage'>
       <a href= {resume} download>
  <img className='Picture' src="/assets/resumeclip.jpg" alt="My Personal Resume Screenshot"/>
  </a>

<p style={{textAlign: "center", fontSize: "2em"}}> Career Goals: I plan on using my experience from the Upright bootcamp to 
    Enhance my knowledge in Sales, DevOps, Engineering, and Project Management 
    through additional courses, workshops, or on-the-job experiences.</p>

    </div>

   
  )
}

export default Work;