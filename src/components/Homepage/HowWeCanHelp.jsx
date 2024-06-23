import React from 'react';
import './HowWeCanHelp.css';

const HowWeCanHelp = () => {
  const services = [
    { title: "Find Your Home", icon: "🏠" },
    { title: "Sell Property", icon: "💰" },
    { title: "Rent Home", icon: "🔑" },
    { title: "Free Valuation", icon: "📊" }
  ];

  return (
    <section className="how-we-can-help">
      <h2>How We Can Help</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWeCanHelp;