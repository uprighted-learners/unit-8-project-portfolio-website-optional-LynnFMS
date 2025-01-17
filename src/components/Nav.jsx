import React from 'react'
import { useNavigate } from 'react-router-dom'

function Nav() {
    const navigate = useNavigate()
  return (
    <div>
        <ul>
              <li onClick={()=> navigate("/about")}>about</li>
              <li onClick={()=> navigate("/projects")}>home</li>
              <li onClick={()=> navigate("/work")}>work</li>
        </ul>
    </div>
  )
}

export default Nav