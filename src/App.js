import React from "react";
import RestaurantFilters from "./components/RestaurantFilters";
import RestaurantList from "./components/RestaurantList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Restaurants</h1>
        <p>
          Find the best restaurants around you! Filter by open hours, price, or
          category to discover your next meal.
        </p>
      </header>
      <main>
        <RestaurantFilters />
        <RestaurantList />
      </main>
    </div>
  );
}

export default App;
