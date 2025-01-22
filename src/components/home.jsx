import React from 'react'
import MyPic from '../assets/pic_of_me.png';

function Home() {
  return (
    <div>
      {/* <h1 style={{textAlign: "center", fontSize: "2em"}}>
    Hi! I'm Lynn. I'm a full-stack web developer and a scrum master. 
    I have a passion for learning and creating. I enjoy working with others and I'm excited to bring my skills to a new team. 
    I'm a quick learner and I'm always looking for ways to improve my skills.
    I grew up in New England and I love Dunkin Donuts coffee, reading, and hiking. I got into programming because I like command lines and technology.
    </h1>
     */}
    <img src= {MyPic} alt="My Picture" style={{width: "20em", height: "20em"}} />

    <h1 style={{textAlign: "center", fontSize: "2em"}}>
    Hi! I'm Lynn. I'm a full-stack web developer and scrum master. 
    I have a passion for learning and creating. I enjoy working with others and I'm excited to bring my skills to a new team. 
    </h1>
    </div>
  )
}

export default Home
