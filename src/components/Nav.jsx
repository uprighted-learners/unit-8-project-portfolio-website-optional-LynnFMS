import React from 'react'
import { useNavigate } from 'react-router-dom'

function Nav() { //This is the Nav component. It is a functional component that returns a div.
    const navigate = useNavigate()
  return (
    <div>
        <ul>
          {/*This is the persistent navigation bar.*/}
              <button onClick={()=> navigate("/")}>home</button>
              <button onClick={()=> navigate("/AboutMe")}>about</button>
              <button onClick={()=> navigate("/Projects")}>projects</button>
              <button onClick={()=> navigate("/Work")}>work</button>
              <button onClick={()=> navigate("/Hobbies")}>hobbies</button>
              <button onClick={()=> navigate("/Contact")}>Contact</button>
        </ul>
    </div>
  )
}

export default Nav