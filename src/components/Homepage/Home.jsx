import React from 'react';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import PropertySearch from './PropertySearch';
import HowWeCanHelp from './HowWeCanHelp'
import ListYourProperty from './ListYourProperty';
import TrustAndSafety from './TrustAndSafety';
import FeaturedProperties from './FeaturedProperties';
import Testimonials from './Testimonials';
import Blog from './Blog';
import Newsletter from './Newsletter';
import './Home.css';


function Homme() {
    return (
      <div className="app">
        <Navbar />
        <main>
        <PropertySearch />
        <HowWeCanHelp />
        <ListYourProperty />
        <TrustAndSafety />
        <FeaturedProperties />
        <Testimonials />
        <Blog />
        <Newsletter />

          
        </main>
        <Footer />
      </div>
    );
  }
  
  export default Homme;