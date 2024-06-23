import React from 'react';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <Navbar />
      <main className="about-us-content">
        <section className="hero-section">
          <h1>About Us</h1>
          <p>Welcome to Makazi Hub, your go-to platform for finding the perfect accommodation.
             Whether you are a student embarking on a new academic journey, a job seeker
             relocating for new opportunities, or a family looking for a comfortable home, Makazi
             Hub is here to simplify your search and make your transition as smooth as possible.</p>
        </section>

        <section className="mission-section">
          <h2>Our Mission</h2>
          <p>At Makazi Hub, our mission is to connect individuals with their ideal living spaces through a user-friendly and
             reliable platform. We strive to provide comprehensive listings, advanced search options, and secure booking
             processes to ensure you find a home that meets your needs and preferences.</p>
        </section>

        <section className="offerings-section">
          <h2>What we Offer</h2>
          <div className="offerings-grid">
            <div className="offering-card">
              <i className="fas fa-home"></i>
              <h3>Extensive Listings</h3>
              <p>Explore a wide range of properties, from cozy student apartments to spacious family homes, all within your
                 desired location and budget.</p>
            </div>
            <div className="offering-card">
              <i className="fas fa-search"></i>
              <h3>Advanced Search and Filters</h3>
              <p>Use our intuitive search tools to filter properties based on your specific criteria, such as proximity to universities,
                 amenities, price range, and more.</p>
            </div>
            <div className="offering-card">
              <i className="fas fa-check-circle"></i>
              <h3>Verified Listings</h3>
              <p>We prioritize your safety and peace of mind by ensuring all properties are verified and managed by trusted
                 homeowners.</p>
            </div>
            <div className="offering-card">
              <i className="fas fa-star"></i>
              <h3>User Reviews and Ratings</h3>
              <p>Gain insights from previous tenants through detailed reviews and ratings, helping you make informed decisions.</p>
            </div>
            <div className="offering-card">
              <i className="fas fa-map-marked-alt"></i>
              <h3>Interactive Maps</h3>
              <p>Visualize property locations with interactive maps, highlighting nearby facilities, transport links, and points of interest.</p>
            </div>
            <div className="offering-card">
              <i className="fas fa-lock"></i>
              <h3>Secure Booking System</h3>
              <p>Enjoy a seamless and secure booking experience with our robust verification process and secure payment options.</p>
            </div>
          </div>
        </section>

        <section className="vision-section">
          <h2>Our Vision</h2>
          <p>We envision a world where finding accommodation is a stress-free and enjoyable
             process. By leveraging technology and community feedback, Makazi Hub aims to
             revolutionize the way people search for homes, making it easier and more efficient for
             everyone.</p>
          <button className="cta-button">Join Makazi Hub Today</button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;