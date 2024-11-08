import React from 'react'

function Contact() {
  return (
    <div id='contact'>
        <div id='contact-heading-container'>
            <h1 id='contact-h1'>Contact Me </h1>
            <h3 id='contact-h3'>Let's talk about anything!</h3>
        </div>

        <div id='contact-input-container'>
            <input className='contact-inputs' type="text" placeholder='Enter Your Name ' />
            <input className='contact-inputs' type="email" placeholder='Enter Your Email' />

            <textarea id='contact-texterea' rows={5} placeholder='Write Your message'></textarea>

            <button>send message</button>
        </div>
    </div>
  )
}

export default Contact
