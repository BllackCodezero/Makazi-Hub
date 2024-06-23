import React from 'react';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import SearchBar from '../Common/SearchBar';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <main>
        <div className="hero">
          <h1>Find the perfect place to Live with your family</h1>
          <p>Let's find a home that's perfect for you</p>
          <SearchBar />

          <div className="categories">
            <button><i className="fas fa-house"></i> Houses</button>
            <button><i className="fas fa-building"></i> Apartments</button>
            <button><i className="fas fa-briefcase"></i> Office</button>
            <button><i className="fas fa-hotel"></i> Villa</button>
          </div>
        </div>
        <div className="features">
          <div className="feature">
            <i className="fas fa-search"></i>
            <h3>Search Your Dream Home</h3>
            <p>Get ready to launch your real estate website without</p>
          </div>
          <div className="feature">
            <i className="fas fa-heart"></i>
            <h3>Choose The House You Like</h3>
            <p>Get ready to launch your real estate website without</p>
          </div>
          <div className="feature">
            <i className="fas fa-comment"></i>
            <h3>The New Way To Find Your Home</h3>
            <p>From as low as $10 per day with limited time offer discounts.</p>
          </div>
        </div>

        {/* Newsletter Signup */}
        <section className="newsletter">
          <h2>Subscribe to Our Newsletter</h2>
          <p>Stay updated with the latest listings, market trends, and real estate news.</p>
          <form>
            <input type="email" placeholder="Enter your email address" />
            <button type="submit">Subscribe</button>
          </form>
        </section>

        {/* Value Proposition */}
        <section className="value-proposition">
          <h2>Why Choose MakaziHub?</h2>
          <p>MakaziHub is your ultimate solution for finding and booking accommodations. We offer:</p>
          <ul>
            <li>Detailed listings of available hostels and accommodations</li>
            <li>Advanced search and filter options</li>
            <li>User reviews and ratings</li>
            <li>Interactive maps showing nearby facilities</li>
          </ul>
        </section>

        {/* Customer Testimonials */}
        <section className="testimonials">
          <h2>What Our Customers Say</h2>
          <div className="testimonial">
            <p>"MakaziHub helped me find the perfect apartment in a great neighborhood. Highly recommended!"</p>
            <p>- John Maina</p>
          </div>
          <div className="testimonial">
            <p>"The search features on MakaziHub are so easy to use. I found my dream home in just a few clicks!"</p>
            <p>- Larry Nasiali</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
