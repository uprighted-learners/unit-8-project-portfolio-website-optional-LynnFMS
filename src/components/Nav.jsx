import React from 'react'
import { useNavigate } from 'react-router-dom'

function Nav() {
    const navigate = useNavigate()
  return (
    <div>
        <ul>
              <button onClick={()=> navigate("/home")}>home</button>
              <button onClick={()=> navigate("/about")}>about</button>
              <button onClick={()=> navigate("/projects")}>projects</button>
              <button onClick={()=> navigate("/work")}>work</button>
              <button onClick={()=> navigate("/hobbies")}>hobbies</button>
        </ul>
    </div>
  )
}

export default Nav