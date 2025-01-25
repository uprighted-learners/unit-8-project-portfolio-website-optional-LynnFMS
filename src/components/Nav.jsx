import React from 'react'
import { useNavigate } from 'react-router-dom'

function Nav() {
    const navigate = useNavigate()
  return (
    <div>
        <ul>
              <button onClick={()=> navigate("/Home")}>home</button>
              <button onClick={()=> navigate("/AboutMe")}>about</button>
              <button onClick={()=> navigate("/Projects")}>projects</button>
              <button onClick={()=> navigate("/Work")}>work</button>
              <button onClick={()=> navigate("/Hobbies")}>hobbies</button>
        </ul>

      
    
    </div>
  )
}

export default Nav