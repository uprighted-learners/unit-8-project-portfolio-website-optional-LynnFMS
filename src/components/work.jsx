import React from 'react'
import resume from '../assets/LYNN.SMOLLIN_Resume_1.21.2025.pdf';


function Work() {
  return (
    <div className='WorkPage'>
       <a href= {resume} download>
  <img className='Picture' src="/assets/resumeclip.jpg" alt="My Personal Resume Screenshot"/>
  </a>

<p>Click on the image to download my resume.</p>

    </div>
  )
}

export default Work;