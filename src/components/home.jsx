import React from 'react'
import MyPic from '../assets/pic_of_me.png';

function Home() {
  return (
    <div className='ImageLynn'>
    
    <img src= {MyPic} alt="My Picture" style={{width: "20em", height: "20em"}} />

    <h1 style={{textAlign: "center", fontSize: "2em"}}>
    Hi! I'm Lynn. I'm a full-stack web developer and scrum master. 
    I have a passion for learning and creating. I enjoy working with others and I'm excited to bring my skills to a new team. 
    </h1>
    </div>
  )
}

export default Home
