import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

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
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section class="contact">
            <ul>
              <li>
              <p>Business inquiries / Contact: 
              <a href="mailto:chrispruiz@att.net">Chrispruiz@att.net</a>
              </p>
              </li>
              <li>
                <p>Check out my Github at:
                <a href="https://github.com/Chrispruiz">Chrispruiz</a>
                </p>
              </li>
              <li>
                <p>Connect with me on
                <a href="https://linkedin.com/in/chrispruiz">Linkedin</a>
                </p>
              </li>
            </ul>
    </section>
  );
}

export default ContactForm;
