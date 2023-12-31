import RestaurantCard,{withPromtedLabel} from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState(null);
  const [filteredRestaurant, setFilteredRestaurant] = useState(null);

  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted=withPromtedLabel(RestaurantCard);

  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  console.log("Body Rendered",listOfRestaurants );

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // Optional Chaining
    setListOfRestraunt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );

  return listOfRestaurants==null ? (
    <Shimmer />
  ) : (
    <div className="body ">
      <div className="filter flex ">
        <div className="search m-4 p-4 ">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="px-4 py-2 bg-green-300 m-4 rounded-lg"
            onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
        <button 
          className="px-4 py-2 bg-green-300 m-4 rounded-lg"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfRestraunt(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        </div>
        
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {
              restaurant.info.promoted? <RestaurantCardPromoted resData={restaurant}/>:<RestaurantCard resData={restaurant} />
            }
            
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;