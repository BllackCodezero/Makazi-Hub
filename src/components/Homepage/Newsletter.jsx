import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <section className="newsletter">
      <h2>Stay Updated</h2>
      <p>Subscribe to our newsletter for the latest property news and updates.</p>
      <form className="newsletter-form">
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
};

export default Newsletter;