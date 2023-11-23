import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  
  // Local State Variable - Superpower

  const [listofRestaurants, setListofRestaurants] = useState(resList);

  // Normal JS Variable

  // let listofRestaurants2 = [];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            filterdata = listofRestaurants.filter((res) => res.data.avgRating > 4)
            setListofRestaurants(filterdata)
          }}
          >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listofRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
