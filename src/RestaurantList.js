import React, { useState } from "react";

// Data Dummy
const restaurants = [
  {
    id: 1,
    name: "Sawasdee Restaurant",
    category: "Thai",
    price: "$$$",
    isOpen: true,
    rating: 4.5,
    image: "img/resto1.jpg",
  },
  {
    id: 2,
    name: "King Krab Restaurant",
    category: "Seafood",
    price: "$",
    isOpen: false,
    rating: 3.5,
    image: "img/resto2.jpg",
  },
  {
    id: 3,
    name: "Onigashima Restaurant",
    category: "Japanese",
    price: "$$",
    isOpen: true,
    rating: 4.8,
    image: "img/resto3.jpg",
  },
  {
    id: 4,
    name: "Riva del Gusto Restaurants",
    isOpen: true,
    price: "$$",
    category: "Italian",
    rating: 4.0,
  },
  {
    id: 5,
    name: "McDaniel Restaurants",
    isOpen: true,
    price: "$$",
    category: "Italian",
    rating: 3.0,
  },
  {
    id: 6,
    name: "Casa del Taco Restaurants",
    isOpen: true,
    price: "$$",
    category: "Italian",
    rating: 4.0,
  },
  {
    id: 7,
    name: "Beef Steak House",
    isOpen: true,
    price: "$$",
    category: "Italian",
    rating: 3.0,
  },
  {
    id: 8,
    name: "Terra del Tacos",
    isOpen: true,
    price: "$$",
    category: "Italian",
    rating: 3.0,
  },
  
];

function RestaurantList() {
  const [filters, setFilters] = useState({
    isOpen: false,
    price: "all",
    category: "all",
  });

  const filteredRestaurants = restaurants.filter((restaurant) => {
    // Filter Open/Closed
    if (filters.isOpen && !restaurant.isOpen) return false;

    // Filter Price
    if (filters.price !== "all" && restaurant.price !== filters.price)
      return false;

    // Filter Category
    if (filters.category !== "all" && restaurant.category !== filters.category)
      return false;

    return true;
  });

  return (
    <div className="restaurant-list">
      {filteredRestaurants.map((restaurant) => (
        <div className="card" key={restaurant.id}>
          <img
            src={restaurant.image}
            alt={`${restaurant.name} Image`}
            className="restaurant-image"
          />
          <h3>{restaurant.name}</h3>
          <div className="stars">
            {"★".repeat(Math.floor(restaurant.rating)) +
              "☆".repeat(5 - Math.floor(restaurant.rating))}
          </div>
          <p>
            {restaurant.category} - {restaurant.price}
          </p>
          <div className={`status ${restaurant.isOpen ? "open" : "closed"}`}>
            {restaurant.isOpen ? "Open Now" : "Closed"}
          </div>
          <button>Learn More</button>
        </div>
      ))}
    </div>
  );
}

export default RestaurantList;
