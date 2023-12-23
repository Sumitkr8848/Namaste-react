import { useState,useEffect } from "react";
import Shimmer from "./Shimmers";
import { useParams } from "react-router-dom";
import { MENU_API } from "../../utils/constants";

const RestaurantMenu=()=>{

    const [resInfo, setResInfo]=useState([]);
    const {resId}=useParams();
    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu=async()=>{
        const data=await fetch(MENU_API+resId);
    
        const json=await data.json();
    
        
        setResInfo(json);
        console.log(json);
    }
        if(resInfo.length==0){
            return <Shimmer/>;
        }
        const{name, cuisines, costForTwoMessage }=resInfo?.data?.cards[0]?.card?.card?.info;

        const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card;
    
        

    

    return(
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}- {costForTwoMessage}</h2>
            <ul>
                {itemCards.map((item)=>(
                    
                    <li key={item.card.info.id}>
                        {item.card.info.name}
                        </li>
                    ))}
            </ul>
        </div>
    )
}
export default RestaurantMenu;