import RestaurantCard from "./RestaurantCard";
// import resList from "../../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmers";
import { Link } from "react-router-dom";

const Body=()=>{
    const [listOfRestaurants , setListOfRestaurants]=useState([]);
    const [filterdRestaurant , setFilteredRestaurant]=useState([]);
    const [searchText, setSearchText]=useState("");

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json=await data.json();

        
        setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }
    if(listOfRestaurants.length===0){
        return <Shimmer/>
    }
    return(
        <div className="body">
        <div className="filter">
            <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                }}></input>
                <button onClick={()=>{
                    const filteredListt=listOfRestaurants.filter((res)=>
                        res.info.name.includes(searchText)
                    )
                    setFilteredRestaurant(filteredListt);
                }}>Search</button>
            </div>
            <button 
            className="filter-btn"
            
            onClick={()=>{
                const filteredList=listOfRestaurants.filter((res)=> res.avgRating>4.5);
                setListOfRestaurants(filteredList);
            }}
            >
                Top Rated Restaurants</button>
            
        </div>
        <div className="res-container">
            {filterdRestaurant?.map((restaurant)=>(
                    < Link 
                    key={restaurant.info.id}
                    to={"/restaurants/" + restaurant.info.id}>
                    <RestaurantCard  resData={restaurant}/>
                    </Link>
                ))}
        </div>
    </div>
    )
    
}
export default Body;