import React from 'react';
import './PropertySearch.css';

const PropertySearch = () => {
  return (
    <section className="property-search">
      <h1>Find Your Dream Home</h1>
      <div className="search-bar">
        <input type="text" placeholder="Enter location" />
        <button>Search</button>
      </div>
      <div className="property-types">
        {['Apartment', 'House', 'Hostel', 'Home', 'Studio'].map((type, index) => (
          <div key={index} className="property-type">
            <img src={`https://via.placeholder.com/50`} alt={type} />
            <span>{type}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertySearch;