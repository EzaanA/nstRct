import { CDN_RestaurantCards } from "../utils/constants";

// console.log("how");

const RestaurantCardComp = (props)=>{
  // const{resName,cuisine,rating,minTime}=props
  // console.log(props);
    const {resData} = props;
    // console.log( `type of resdata is : ${resData.info.cuisines}`);
  const {name,cuisines,costForTwo,areaName,avgRating}=resData.info;
  //by this we made the cluttered code simple where we dont need to wwrite resDatya.info again & again
  // console.log(`type of resdata is : ${typeof(resData)}`);
  const {deliveryTime}=resData.info.sla;
  return(
    <div className="rescard">
      <img className="biryani"
       src={CDN_RestaurantCards+resData.info.cloudinaryImageId}
      />
      <h3>{name}</h3>
       <h4>{cuisines.join(", ")}</h4>
      <p>{costForTwo}</p>
      <p>{areaName}</p>
      <div className="rating">
      <p className="avg">{`⭐️`+avgRating}</p>
      </div>
      <p className="lastMileTravel">{deliveryTime}</p>
      {/* <p className="deliveryTime">{resData.info.deliveryTime}</p> */}
    </div>
  )
}

export default RestaurantCardComp;