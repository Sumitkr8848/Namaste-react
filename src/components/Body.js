import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockData";
import { useEffect, useState } from "react";

const Body=()=>{
    const [listOfRestaurants , setListOfRestaurants]=useState(resList);
    const [filterdRestaurant , setFilteredRestaurant]=useState(resList);
    const [searchText, setSearchText]=useState("");

    // useEffect(()=>{
    //     fetchData();
    // },[]);

    // const fetchData=async()=>{
    //     const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    //     const json=await data.json();

    //     console.log(json);
    //     // setListOfRestaurants(json?.cards[3]?.card?.gridElements?.data);

    // }
    return(
        <div className="body">
        <div className="filter">
            <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                }}></input>
                <button onClick={()=>{
                    const filteredListt=listOfRestaurants.filter((res)=>
                        res.card.card.info.name.includes(searchText)
                    )
                    setFilteredRestaurant(filteredListt);
                }}>Search</button>
            </div>
            <button 
            className="filter-btn"
            
            onClick={()=>{
                const filteredList=listOfRestaurants.filter((res)=> res.card.card.info.avgRating>4.2);
                setListOfRestaurants(filteredList);
            }}
            >
                Top Rated Restaurants</button>
            
        </div>
        <div className="res-container">
            {filterdRestaurant?.map((restaurant)=>(
                    <RestaurantCard key={restaurant.card.card.info.id} resData={restaurant}/>
                ))}
        </div>
    </div>
    )
    
}
export default Body;