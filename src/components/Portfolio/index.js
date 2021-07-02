import React, { useState } from 'react';

function Portfolio() {
  return (
    <section>
      <h1 data-testid="h1tag">Contact me</h1>
      <form id="contact-form">
        <div>
          <label htmlFor="name">Name:</label>
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
        </div>
        <div>
          <label htmlFor="message">Message:</label>
        </div>
      </form>
    </section>
  );
        }

export default Portfolio;
