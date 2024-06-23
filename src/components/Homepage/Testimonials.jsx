import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    { name: "John Maina", text: "Great service! Found my dream home in no time." },
    { name: "Sam Talavia", text: "Professional team and excellent properties." },
    { name: "Larry Nasiali", text: "Smooth process from start to finish. Highly recommended!" }
  ];

  return (
    <section className="testimonials">
      <h2>We Build Trust With Our Agents And Clients</h2>
      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p>{testimonial.text}</p>
            <h4>{testimonial.name}</h4>
            <div className="stars">★★★★★</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;