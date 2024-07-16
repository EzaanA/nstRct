import RestaurantCardComp from "./RestaurantCardComp";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    // console.log(reslist);
    //State variable
    // This line initializes a state variable named listOfRestaurant with a default value of an array containing an object.
    // setlistOfRestaurant is a function that allows us to update the value of listOfRestaurant.
    // while useState(reslist) in this reslist is the default value for listOfRestaurant variable
    const [listOfRestaurant, setlistOfRestaurant] = useState([]);
    const [listOfSearchedRestaurant, setListOfSearchedRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        console.log("useEffect called");
        fetchingData();
    }, []);

    const fetchingData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.32750&lng=78.03250&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        // console.log(data);
        const json = await data.json();
        // console.log(json);
        // console.log(json);

        //optional chaining
        setlistOfRestaurant(
            json?.data?.cards[4]?.card.card?.gridElements?.infoWithStyle?.restaurants
        );

        
        setListOfSearchedRestaurant(
            json?.data?.cards[4]?.card.card?.gridElements?.infoWithStyle?.restaurants
        )
    };
    //This is called Conditional Rendering
    if (listOfRestaurant.length === 0) {
        return <Shimmer/>;
    }
    
    console.log(listOfRestaurant);

    return (
        <div className="body">
            <div className="searchbox">
                <input
                    type="text"
                    placeholder="search here"
                    onChange={(evnt) => {
                        setSearchText(evnt.target.value);
                    }}
                    value={searchText}
                />
                <button
                    onClick={() => {
                      // const newList = listOfRestaurant;
                        const fillteredNameList = listOfRestaurant.filter(
                            (res) => {
                                return (res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            }
                        );
                        setListOfSearchedRestaurant(fillteredNameList);
                    }}
                >
                    Search
                </button>
            </div>

            <button
                className="sort"
                onClick={() => {
                    let filteredList = listOfRestaurant.filter(
                        (restau) => restau.info.avgRating > 4
                    );
                    setlistOfRestaurant(filteredList);
                }}
            >
                sort acc to rating
            </button>

            <button
                className="anotSort"
                //so what we're gonna do here is first we'll filter the cards on the basis of deliveryTime & then we'll convert the name of every restaurant to eeee
                onClick={() => {
                    let flist = listOfRestaurant.filter(
                        (res) => res.info.sla.deliveryTime < 30
                    );

                    let updatedList = flist.map((res) => {
                        // let updatedRes = {...res};
                        res.info.name = "eeee";
                        return res;
                    });
                    setlistOfRestaurant(updatedList);
                }}
            >
                Sort according to deliveryTime
            </button>

            <div className="restaurantCard">
        {/* {console.log(`hi this is  : ${listOfRestaurant}`)} */}
                {listOfSearchedRestaurant.map((restaurant) => (
                    <RestaurantCardComp
                        key={restaurant.info.id}
                        resData={restaurant}
                    />
                ))}
                {/* key very important */}
            </div>
        </div>
    );
};

export default Body;
