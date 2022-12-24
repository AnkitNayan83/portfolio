import React, { useRef, useState } from "react";
import "./contact.scss";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        "service_2cmvo28",
        "template_y7tkugb",
        form.current,
        "D70TRtXT1wKHaEUaO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/contact.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Your Name"
            name="user_name"
            required
          />
          <input type="text" placeholder="Email" name="user_email" required />
          <textarea placeholder="Message" name="message" required></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
};
