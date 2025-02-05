import React from 'react'
import resume from '../assets/LYNN.SMOLLIN_Resume_1.21.2025.pdf';
import ResPic from '../assets/resumeclip.jpg';

function Work() {/*This is the Work component. It is a functional component that returns a div with a class name of WorkPage.*/
  return (
    <div className='WorkPage'> 
     {/*This is a link to my resume. It is a download link that will download the resume when clicked.*/}
  <a href= {resume} download> 
  <img className='Picture' src={ResPic} alt="My Personal Resume Screenshot" style={{width: "10em", height: "10em"}}/>
  </a>

{/*This is a paragraph that contains information about my career goals and experience.*/}
<p style={{textAlign: "center", fontSize: "2em"}}> Career Goals: I plan on using my experience from the Upright bootcamp to 
    Enhance my knowledge in Sales, DevOps, Engineering, and Project Management 
    through additional courses, workshops, or on-the-job experiences.</p>

{/*This is a paragraph that contains information about my work experience.*/}
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