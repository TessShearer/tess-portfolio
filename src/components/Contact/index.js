import React, {useState} from 'react';
import {validateEmail} from '../../utils/helpers';

function Contact() {

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };


// JSX for Contact Form
  return (
    <section className="my-5 contact">
      <div className="contact-form">
        <h3>Get in Contact with me Here!</h3>
        <form>
          <label for="name">Name:</label>
          <input type="text" placeholder="name..." name="name" id="name" onBlur={handleChange}></input>

          <label for="email">Email:</label>
          <input type="text" placeholder="email..." name="email" id="email" onBlur={handleChange}></input>

          <label for="message">What would you like to say?:</label>
          <input type="text" placeholder="message..." name="message" id="message" onBlur={handleChange}></input>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit">This Button is Inactive For Now</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;