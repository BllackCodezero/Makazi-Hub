import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './Common.css';

const SearchBar = () => {
  const [searchType, setSearchType] = useState('buy');
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSearchTypeChange = (newType) => {
    setSearchType(newType);
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handlePropertyTypeChange = (event) => {
    setPropertyType(event.target.value);
  };

  const handlePriceRangeChange = (event) => {
    const { name, value } = event.target;
    if (name === 'minPrice') {
      setMinPrice(value);
    } else if (name === 'maxPrice') {
      setMaxPrice(value);
    }
  };

  return (
    <div className="search-bar">
      <div className="search-bar-buttons">
        {/* ... Existing buttons ... */}
      </div>
      <div className="search-bar-input">
        <div className="search-input">
          <select value={location} onChange={handleLocationChange}>
            <option value="">Location</option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            {/* Add more locations ... */}
          </select>
        </div>
        <div className="search-input">
          <select value={propertyType} onChange={handlePropertyTypeChange}>
            <option value="">Property Type</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            {/* Add more property types ... */}
          </select>
        </div>
        <div className="search-input">
          <input
            type="number"
            placeholder="Min Price"
            name="minPrice"
            value={minPrice}
            onChange={handlePriceRangeChange}
          />
          <input
            type="number"
            placeholder="Max Price"
            name="maxPrice"
            value={maxPrice}
            onChange={handlePriceRangeChange}
          />
        </div>
        <div className="search-input">
          <button className="advanced">
            Advanced <FontAwesomeIcon icon={faAngleDown} />
          </button>
        </div>
        <button className="search">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
