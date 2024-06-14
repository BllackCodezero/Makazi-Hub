import React from 'react';
import './Listings.css';

const SearchFilters = () => {
  return (
    <div className="search-filters">
      <div className="filter-group">
        <label htmlFor="location">Location:</label>
        <input type="text" id="location" placeholder="Enter location" />
      </div>
      <div className="filter-group">
        <label htmlFor="price-range">Price Range:</label>
        <input type="range" id="price-range" min="1000" max="500000" step="10" />
        <span className="price-range-values">
          <span>Ksh.1000</span>
          <span>Ksh.500000</span>
        </span>
      </div>
      <div className="filter-group">
        <label>Property Type:</label>
        <div className="checkbox-group">
          <label>
            <input type="checkbox" name="property-type" value="apartment" /> Apartment
          </label>
          <label>
            <input type="checkbox" name="property-type" value="house" /> House
          </label>
          <label>
            <input type="checkbox" name="property-type" value="condo" /> Condo
          </label>
        </div>
      </div>
      <button className="apply-filters">Apply Filters</button>
    </div>
  );
};

export default SearchFilters;