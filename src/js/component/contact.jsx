import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../../styles/contact.css";

export const Contact = () => {
  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_dga9o5e", "template_99wkc9v", form.current, {
        publicKey: "C9n5VExVOU7tlAzn6",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Email sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="text-center">
        <h1 id="Contacto" style={{ marginBottom: '20px', marginTop:"40px" }}>¿Tienes alguna idea? </h1>
        <h2 style={{color: "#ff7b00"}} >Contacta conmigo para plasmarlo en un boceto y entrar en detalles!</h2>
        <div className="content-wrapper">
         
          <div className="content-form">
            <form ref={form} onSubmit={sendEmail} className="simple-form">
              <div className="form-group">
                <label htmlFor="user_name">Nombre</label>
                <input type="text" name="user_name" id="user_name" />
              </div>
              <div className="form-group">
                <label htmlFor="user_email">Email</label>
                <input type="email" name="user_email" id="user_email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <div className="form-group">
                <input type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </div>
  );
};
