import React from 'react';
import './FeaturedProperties.css';

const FeaturedProperties = () => {
  const properties = [
    { title: "Modern Apartment", price: "$250,000", location: "Upper Hill, Nairobi" },
    { title: "Cozy House", price: "$350,000", location: "Ongata-Rongai, Kajiado" },
    { title: "Classic Studio ", price: "$1,200,000", location: "Mamboleo, Kisumu" },
    { title: "Student Hostel", price: "$180,000", location: "Changamwe, Mombasa" },
    { title: "Suburban Home", price: "$420,000", location: "Langas, Eldoret" }
  ];

  return (
    <section className="featured-properties">
      <h2>Featured Listings</h2>
      <div className="property-grid">
        {properties.map((property, index) => (
          <div key={index} className="property-card">
            <img src={`src/assets/Apartamento studio_ 30 inspirações incríveis e modernas.jpeg`} alt={property.title} />
            <h3>{property.title}</h3>
            <p>{property.price}</p>
            <p>{property.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProperties;