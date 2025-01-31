import React from 'react'
import { useNavigate } from 'react-router-dom'

function Nav() {
    const navigate = useNavigate()
  return (
    <div>
        <ul>
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