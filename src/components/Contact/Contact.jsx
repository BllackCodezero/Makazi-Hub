import React from 'react';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <Navbar />
      <main className="contact-content">
        <h1>Contact Us</h1>
        <div className="contact-wrapper">
          <section className="contact-info">
            <h2>Get in Touch</h2>
            <p>Have questions or need assistance? We're here to help!</p>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <p>43 Ronald Ngala Street, Nairobi, Kenya</p>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <p>+254 722 333 000</p>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <p>info@makazihub.com</p>
              </div>
            </div>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </section>
          <section className="contact-form">
            <h2>Send Us a Message</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;