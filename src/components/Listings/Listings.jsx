import React from 'react';
import { Link } from 'react-router-dom';

const Listings = () => {
  // Placeholder data
  const listings = [
    { id: 1, title: 'Cozy Apartment', description: 'A nice place to stay', price: '$500' },
    { id: 2, title: 'Modern Studio', description: 'Stylish and convenient', price: '$700' },
    // More listings...
  ];

  return (
    <div className="listings">
      <h1>Available Accommodations</h1>
      <div className="list">
        {listings.map((listing) => (
          <div key={listing.id} className="listing">
            <h2>{listing.title}</h2>
            <p>{listing.description}</p>
            <p>{listing.price}</p>
            <Link to={`/property/${listing.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listings;
