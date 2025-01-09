import React, { useState } from 'react';

const RestaurantFilter = () => {
  // State untuk filter
  const [openNow, setOpenNow] = useState(false);
  const [price, setPrice] = useState('all');
  const [category, setCategory] = useState('all');

  // Fungsi untuk mereset semua filter
  const handleClearFilters = () => {
    setOpenNow(false);
    setPrice('all');
    setCategory('all');
  };

  // Fungsi untuk menangani perubahan filter "Open Now"
  const handleOpenNowChange = (e) => {
    setOpenNow(e.target.checked);
  };

  // Fungsi untuk menangani perubahan filter "Price"
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  // Fungsi untuk menangani perubahan filter "Categories"
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="filters">
      <div>
        <label htmlFor="filter-open-now">Filter By:</label>
        <input
          className="form-check-input"
          type="checkbox"
          id="flexRadioDefault1"
          checked={openNow}
          onChange={handleOpenNowChange}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Open Now
        </label>
      </div>

      <div>
        <label htmlFor="filter-price">Price:</label>
        <select
          id="filter-price"
          value={price}
          onChange={handlePriceChange}
        >
          <option value="all">All</option>
          <option value="1">$</option>
          <option value="2">$$</option>
          <option value="3">$$$</option>
          <option value="4">$$$$</option>
        </select>
      </div>

      <div>
        <label htmlFor="filter-category">Categories:</label>
        <select
          id="filter-category"
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="all">All Categories</option>
          <option value="1">Thai</option>
          <option value="2">Seafood</option>
          <option value="3">Japanese</option>
          <option value="4">Italian</option>
          <option value="5">American</option>
          <option value="6">Mexican</option>
          <option value="7">SteakHouse</option>
        </select>
      </div>

      <button onClick={handleClearFilters}>Clear All</button>

      {/* Displaying current filter values for debugging */}
      <div>
        <p>Current Filters:</p>
        <p>Open Now: {openNow ? 'Yes' : 'No'}</p>
        <p>Price: {price}</p>
        <p>Category: {category}</p>
      </div>
    </div>
  );
};

export default RestaurantFilter;
