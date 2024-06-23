import React, { useState, useEffect } from 'react';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import './ListingDetails.css';

const mockListing = {
  id: 1,
  title: 'Ram Ham House, Ongata-Rongai',
  description: 'Group bookings are available! Contact our friendly staff team to arrange your group booking.\n\nLocated just a short distance from Daystar Private University, Ram Ham House offers all-inclusive student rooms for girls, all rooms include a shared bathroom and all necessary amenities.',
  price: 'Ksh 23k /month',
  images: ['/images/main-image.jpg', '/images/thumbnail1.jpg', '/images/thumbnail2.jpg'],
  agency: 'Happy Realtors Agency',
  sharedAmenities: ['Common areas', 'Social Spaces', 'Study room/library', 'Wi-Fi'],
  billsIncluded: ['Water', 'Laundry room', 'Wi-Fi', 'TV room'],
  roomOptions: [
    { type: '2 Single bed', kitchen: 'Shared Kitchen', bathroom: 'Private Bathroom', price: 'Ksh 23k' },
    { type: 'Double bed', kitchen: 'Shared Kitchen', bathroom: 'Private Bathroom', price: 'Ksh 30k' },
    { type: 'Double bed', kitchen: 'Shared Kitchen', bathroom: 'Private Bathroom', price: 'Ksh 22k' },
    { type: '2 Single bed', kitchen: 'Shared Kitchen', bathroom: 'Private Bathroom', price: 'Ksh 24k' },
  ]
};

const ListingDetails = ({ id }) => {
  const [listing, setListing] = useState(null);
  const [selectedYear, setSelectedYear] = useState('2023-2024');

  useEffect(() => {
    setListing(mockListing); // Use mock data
  }, [id]);

  return (
    <div>
      <Navbar />
      <div className="listing-details-container">
        {listing ? (
          <div>
            <div className="image-gallery">
              <div className="main-image" style={{backgroundImage: `url(${listing.images[0]})`}}></div>
              <div className="thumbnail-images">
                {listing.images.slice(1).map((img, index) => (
                  <div key={index} className="thumbnail" style={{backgroundImage: `url(${'src/assets/27 Studio Apartment Ideas That Will Draw Your Attention And Capture Your Heart.jpeg'})`}}></div>
                ))}
              </div>
            </div>

            <h1>{listing.title}</h1>
            <p>{listing.agency}</p>

            <section className="property-details">
              <p>{listing.description}</p>
            </section>

            <section className="amenities">
              <h2>Shared Amenities</h2>
              <ul>
                {listing.sharedAmenities.map((amenity, index) => (
                  <li key={index}>{amenity}</li>
                ))}
              </ul>
            </section>

            <section className="bills-included">
              <h2>Bills Included</h2>
              <ul>
                {listing.billsIncluded.map((bill, index) => (
                  <li key={index}>{bill}</li>
                ))}
              </ul>
            </section>

            <section className="room-options">
              <h2>Room Options</h2>
              <div className="date-selector">
                <button 
                  className={selectedYear === '2023-2024' ? 'active' : ''} 
                  onClick={() => setSelectedYear('2023-2024')}
                >
                  2023-2024
                </button>
                <button 
                  className={selectedYear === '2024-2025' ? 'active' : ''} 
                  onClick={() => setSelectedYear('2024-2025')}
                >
                  2024-2025
                </button>
              </div>
              
              {listing.roomOptions.map((room, index) => (
                <div key={index} className="room-option">
                  <div className="room-image"></div>
                  <div className="room-details">
                    <h3>{room.type}</h3>
                    <p>{room.kitchen}</p>
                    <p>{room.bathroom}</p>
                    <p>All inclusive utility</p>
                    <select>
                      <option>12 months: Sept {selectedYear.split('-')[0]}-Aug {selectedYear.split('-')[1]}</option>
                    </select>
                    <p className="price">{room.price} <span>/month</span></p>
                    <button className="book-now">Book Now</button>
                  </div>
                </div>
              ))}
            </section>

            <section className="location">
              <h2>Location</h2>
              <div className="map-placeholder"></div>
            </section>
          </div>
        ) : (
          <div>Loading listing details...</div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ListingDetails;