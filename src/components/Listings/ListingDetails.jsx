import React, { useState, useEffect } from 'react';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';

const mockListing = {
  id: 1,
  title: 'Cozy Studio Apartment',
  description: 'This cozy studio apartment is located in the heart of the city. It offers a comfortable living space with modern amenities.',
  price: '$1200 per night',
  images: ['/images/listing1.jpg', '/images/listing2.jpg'],
};

const ListingDetails = ({ id }) => {
  const [listing, setListing] = useState(null);

  useEffect(() => {
    setListing(mockListing); /* Use mock data */
  }, [id]);

  return (
    <div>
      <Navbar />
      <div className="listing-details-container">
        {listing ? (
          <div>
            <h2>{listing.title}</h2>
            <p>{listing.description}</p>
            <p>Price: {listing.price}</p>
            {/* Display other listing details */}
          </div>
        ) : (
          <div>No listing found.</div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ListingDetails;