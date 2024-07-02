import RestaurantCardComp from "./RestaurantCardComp";
import reslist from "../utils/data";
import { useState } from "react";

const Body=()=>{
  // console.log(reslist);
  //State variable
 // This line initializes a state variable named listOfRestaurant with a default value of an array containing an object.
// setlistOfRestaurant is a function that allows us to update the value of listOfRestaurant.
// while useState(reslist) in this reslist is the default value for listOfRestaurant variable
  const [listOfRestaurant,setlistOfRestaurant]=useState(reslist);


  return(
    <div className="body">
      <button className="sort" 
      onClick={()=>{
        let filteredList= listOfRestaurant.filter(
            (restau)=>restau.info.avgRating>4
      )
      setlistOfRestaurant(filteredList)
    }}
      >
        sort acc to rating
      </button>

      <button className="anotSort"
      //so what we're gonna do here is first we'll filter the cards on the basis of deliveryTime & then we'll convert the name of every restaurant to eeee
      onClick={()=>{
        
        let flist = listOfRestaurant.filter((res)=>res.info.sla.deliveryTime<=30);

        let updatedList=flist.map(
          res=>{
            // let updatedRes = {...res};
            res.info.name = 'eeee';
            return res;
          });
      setlistOfRestaurant(updatedList);
      }
  }
      >Sort according to deliveryTime</button>

      <div className="restaurantCard">
        {listOfRestaurant.map(
          (restaurant)=>(
          <RestaurantCardComp key={restaurant.info.id} resData={restaurant}/>
          ))}
        {/* key very important */}
      </div>
    </div>
  )
}

export default Body ;