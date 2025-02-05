import React from 'react'

function AboutMe() { /*This is the AboutMe component. It is a functional component that returns a div with a class name of AboutMe.*/
  return (
    <div className='AboutMe'>
      {/*This is a header that contains information about me.*/}
      <h1 style={{textAlign: "center", fontSize: "2em"}}>
    Hey there.  I'm a quick learner and always looking for ways to improve my skills.
    I grew up in New England, I love Dunkin Donuts coffee, reading, and hiking. I got into programming because I like command lines and technology.
      </h1>
    </div>
  )
}

export default AboutMe

   