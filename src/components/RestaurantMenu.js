import { useEffect } from "react"
import { useState } from "react";
import Shimmer from "./Shimmer";
import { MdStars } from "react-icons/md";
import { IoIosArrowDropdownCircle } from "react-icons/io";


export default RestaurantMenu =()=>{


    const[resInfo,setResInfo] = useState(null);
    const[toBeRendered,setoBeRendered]=useState([]);

    useEffect(()=>{
        dataToBeFetched();
    },[]);

    const dataToBeFetched = async()=>{
        const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.32750&lng=78.03250&restaurantId=69447&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await data.json();
        setResInfo(json?.data);
        // console.log(json);
        // console.log(json?.data?.cards[3]?.card?.card?.info?Shimmer?.id);
        setoBeRendered(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    };

    if(resInfo===null){
        return <Shimmer/>
    }
 
    // console.log(resInfo)
    const{ name,cuisines,avgRating,costForTwoMessage,totalRatingsString,areaName }=resInfo?.cards[2]?.card?.card?.info;
    const{ itemCards }=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // setCategorization(itemCards);

    // console.log(itemCards);
    return(
        <div className="afterClick">
            <div className="topbox">
            <h1>
                {name}
            </h1>

            <div className="boxInsideTop">
                <div className="topLine">
                    <p><MdStars /> {avgRating}</p>
                    <p>({totalRatingsString})</p>
                    <p>{costForTwoMessage}</p>
                </div>
                    <p>{cuisines.join(",")}</p>

            <div className="Outl">
                    <p>Outlet</p> 
                    <p>{areaName}{<IoIosArrowDropdownCircle />
} </p>
            </div>
            </div>
            {/* <div className="time">
                
            </div> */}

            </div>
            <h2>
                MENU:
            </h2>
                <ul id="menu">
            <div className="nvgbtn">
                <button className="vg" onClick={()=>{
                    const filteLst=itemCards.filter((res)=>{
                        return(
                            res.card.info.itemAttribute.vegClassifier==="VEG"
                        );
                    });
                        setoBeRendered(filteLst);
                    }}
                >
                    Veg
                </button>

                <button className="nnvg" onClick={()=>{
                    const filteLst=itemCards.filter((res)=>{
                        return(
                            res.card.info.itemAttribute.vegClassifier==="NONVEG"
                        );
                    });
                        setoBeRendered(filteLst);
                    }}
                >
                   NON Veg
                </button>
            </div>
                <div className="crds">
                    {
                        toBeRendered.map((items)=>(
                        <li className="ItemsOfMenu" key={items.card.info.id}>
                        <div className="category">
                            {items?.card?.info?.itemAttribute?.vegClassifier === "NONVEG"?(<img className="type" src={"https://img.icons8.com/?size=100&id=zz4M4H8yATCp&format=png&color=000000"}/>) : (<img className="type" src={"https://img.icons8.com/?size=100&id=61083&format=png&color=000000"}/>)
                            }
                            {items?.card?.info?.name} 
                            <div>
                            ₹ {items?.card?.info?.price}
                            </div>
                            </div>
                            <div className="imgabut">
                            <img className="imageOfcards" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+items.card.info.imageId}/>
                            <button className="add">ADD</button>
                            </div>
                        </li>
                    ))}
                </div>
                </ul>

                
        </div>
    )
}