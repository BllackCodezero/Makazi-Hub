import React from 'react';
import { Link } from 'react-router-dom';
import './Listings.css';

const ListingCard = ({ listing }) => {
  return (
    <div className="listing-card">
      <img src={'src/assets/27 Studio Apartment Ideas That Will Draw Your Attention And Capture Your Heart.jpeg'} alt={listing.title} />
      <div className="listing-details">
        <h3>{listing.title}</h3>
        <p>{listing.description}</p>
        <p>{listing.price}</p>
        <Link to={`/listing/${listing.id}`} className="view-details">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ListingCard;