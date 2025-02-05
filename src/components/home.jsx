import React from 'react'
import MyPic from '../assets/pic_of_me.png';

function Home() { /*This is the Home component. It is a functional component that returns a div with a class name of ImageLynn.*/
  return (
    <div className='ImageLynn'>
    {/*This is an image of me. It is a picture of me that is displayed on the home page.*/}
    <img src= {MyPic} alt="My Picture" style={{width: "20em", height: "20em"}} />
    {/*This is a header that contains information about me.*/}
    <h1 style={{textAlign: "center", fontSize: "2em"}}>
    Hi! I'm Lynn. I'm a full-stack web developer and scrum master. 
    I have a passion for learning and creating. I enjoy working with others and I'm excited to bring my skills to a new team. 
    </h1>
    </div>
  )
}

export default Home
