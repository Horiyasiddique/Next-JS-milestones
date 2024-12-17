import React from "react";

function Contact() {
  return (
    <div id="contact">
      <div id="contact-card">
        <h2>Lets Work together on your next project</h2>
        <button id="button">Contact Me</button>
      </div>

      <div id="contact-input-container">
        <input
          className="contact-inputs"
          type="text"
          placeholder="Enter Your Name "
        />
        <input
          className="contact-inputs"
          type="email"
          placeholder="Enter Your Email"
        />

        <textarea
          id="contact-texterea"
          rows={5}
          placeholder="Write Your message"
        ></textarea>

        <button id="button">send message</button>
      </div>
    </div>
  );
}

export default Contact;
