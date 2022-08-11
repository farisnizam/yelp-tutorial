import React, { useState, createContext } from "react";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = (props) => {
  // Set state for home
  const [restaurants, setRestaurants] = useState([]);

  // Set state for selected restaurant
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const addRestaurants = (restaurant) => {
    setRestaurants([...restaurants, restaurant]);
  };

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        setRestaurants,
        addRestaurants,
        selectedRestaurant,
        setSelectedRestaurant,
      }}
    >
      {props.children}
    </RestaurantsContext.Provider>
  );
};
