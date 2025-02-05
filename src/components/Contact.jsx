import React from 'react'

function Contact() { /*This is the Contact component. It is a functional component that returns a div with a class name of Contact.*/
  return (
    <div className='Contact'>
      <h1 style={{textAlign: "center", fontSize: "2em", margin: "1em"}}>
    lynn1312@gmail.com
      </h1>
{/*This is a header that contains a link to my LinkedIn page.*/}
<h2 style={{textAlign: "center", fontSize: "2.5em"}}><a href="https://www.linkedin.com/in/lynn-smollin-psmi-68412910b/">LinkedIn</a></h2>
{/*This is a header that contains my phone number.*/}
<h3 style={{textAlign: "center", fontSize: "2em"}}>802-299-7880</h3>
    </div>
  )
}

export default Contact
