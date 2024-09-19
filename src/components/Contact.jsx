import React from 'react'
import "../styles/Contact.scss"
import image from "../assets/contact.png"
const Contact = () => {
  return (
    <div id="contact">
        
      <section>
         
        <form>
        <h2>Contact Me</h2>
            <input type="text" placeholder='Your name' required/>
            <input type="text" placeholder='Your email' required/>
            <input type="text" placeholder='Your message' required/>
            <button type='submit'>Send</button>
        </form>
      </section>
      <aside>
        <img src={image} alt='Graphics'/>
      </aside>
    </div>
  )
}

export default Contact
