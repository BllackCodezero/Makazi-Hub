import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import ListingCard from './ListingCard';
import SearchFilters from './SearchFilters';
import Pagination from './Pagination';


const Listings = () => {
  // Placeholder data
  const listings = [
    {
      id: 1,
      title: 'Cozy Apartment',
      description: 'A nice place to stay',
      price: '$500',
      imageUrl: 'https://example.com/apartment.jpg',
    },
    {
      id: 2,
      title: 'Modern Studio',
      description: 'Stylish and convenient',
      price: '$700',
      imageUrl: 'https://example.com/studio.jpg',
    },
    // More listings...
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Replace with the actual total number of pages

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Fetch data for the new page or update the list of listings accordingly
  };

  return (
    <div className="listings">
      <Navbar />
      <main>
        <div className="hero">
          <h1>Available Accommodations</h1>
          <SearchFilters />
        </div>
          
      
      <div className="listing-cards">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      </main>
      
      <Footer />
    </div>
  );
};

export default Listings;