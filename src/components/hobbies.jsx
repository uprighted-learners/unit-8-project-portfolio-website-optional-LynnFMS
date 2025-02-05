import React from 'react'

function Hobbies() { /*This is the Hobbies component. It is a functional component that returns a div with a class name of Hobbies.*/
  return (
    <div className='HobbiesPage'> 
    {/*This is a header that contains information about my hobbies.*/}
      <h1 style={{textAlign: "center", fontSize: "2em"}}>
    I have a few hobbies. I play the flute, crochet and I'm the DRE at my church. I also volunteer on my condo board.
    </h1>
    </div>
  )
}

export default Hobbies;

