// const heading = React.createElement("h1",{},"HELLO WORLD FROM REACT!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(heading);

/**
 * 
 * <div id="parent">
 *   <div id="child">
 *      <h1>I'm h1 tag</h1>
 *      <h2>I'm h2 tag</h2>
 *   </div>
 *   <div id="child">
 *      <h1>I'm h1 tag</h1>
 *      <h2>I'm h2 tag</h2>
 *   </div>
 * </div>
 * 
 * 
 * 
 */
// _________________________________________________
// import React from "react";
// import ReactDOM from "react-dom/client";


// //React Element
// const jsxHeading =(<h1>
//   Hi this is React Element!
//   </h1>);

//   //React component with a return statement
//   const Heading1 =()=>{
//     return <h1>THis is heading inside of React component with a return statement</h1>
//   };

//   const Heading2=()=>(
//     <h1>THis is heading inside of React component without a return statement </h1>
//   )


// //converting the above react element to a react component
// const JsxHeadingAsComp = ()=>(
//   <div className="hello">
//     <h1>THis is React Element coverted to React Component</h1>
//   </div>
// );

// const ComponentComposition = ()=>(
//   <div className="he">
//     <h1>THis is React Component Composition:- </h1>
//     <Heading1> </Heading1>
//   </div>
// );



// const root =ReactDOM.createRoot(document.getElementById("root"));
// const root2 =ReactDOM.createRoot(document.getElementById("root2"));
// const root3 =ReactDOM.createRoot(document.getElementById("root3"));
// const root4 =ReactDOM.createRoot(document.getElementById("root4"));
// root.render(<JsxHeadingAsComp/>);
// root2.render(<Heading1/>);
// root3.render(<Heading2/>);
// root4.render(ComponentComposition());
// _________________________________________________________________


// // food clone app
// import React from "react";
// import ReactDOM from "react-dom/client";
// import logo from './logo.png';
// import biry from './bir.png'


// //reslist is mainly a object
// const reslist=[
//   {
//     "info": {
//       "id": "78973",
//       "name": "Pizza Hut",
//       "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
//       "locality": "Indira Nagar",
//       "areaName": "Balliwala",
//       "costForTwo": "₹350 for two",
//       "cuisines": [
//         "Pizzas"
//       ],
//       "avgRating": 4,
//       "parentId": "721",
//       "avgRatingString": "4.0",
//       "totalRatingsString": "5K+",
//       "sla": {
//         "deliveryTime": 33,
//         "lastMileTravel": 3.7,
//         "serviceability": "SERVICEABLE",
//         "slaString": "30-35 mins",
//         "lastMileTravelString": "3.7 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-06-26 04:00:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "Rxawards/_CATEGORY-Pizza.png",
//             "description": "Delivery!"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "description": "Delivery!",
//                   "imageId": "Rxawards/_CATEGORY-Pizza.png"
//                 }
//               }
//             ]
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "50% OFF",
//         "subHeader": "UPTO ₹90"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       }
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/restaurants/pizza-hut-indira-nagar-balliwala-dehradun-78973",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "69447",
//       "name": "Gaylord Express",
//       "cloudinaryImageId": "uj68ybtfwbydewraxzhm",
//       "locality": "Paltan Bazar",
//       "areaName": "Paltan Bazaar",
//       "costForTwo": "₹250 for two",
//       "cuisines": [
//         "Bakery",
//         "Chinese",
//         "North Indian",
//         "Beverages"
//       ],
//       "avgRating": 3.8,
//       "parentId": "13696",
//       "avgRatingString": "3.8",
//       "totalRatingsString": "10K+",
//       "sla": {
//         "deliveryTime": 21,
//         "lastMileTravel": 1,
//         "serviceability": "SERVICEABLE",
//         "slaString": "20-25 mins",
//         "lastMileTravelString": "1.0 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-07-02 00:00:00",
//         "opened": true
//       },
//       "badges": {
        
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
            
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "50% OFF",
//         "subHeader": "UPTO ₹100"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       }
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/restaurants/gaylord-express-paltan-bazar-paltan-bazaar-dehradun-69447",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "74373",
//       "name": "Walk In Woods",
//       "cloudinaryImageId": "rx6kpst6wxyw9vvj7wo8",
//       "locality": "General Mahadev Singh Road",
//       "areaName": "Ballupur",
//       "costForTwo": "₹450 for two",
//       "cuisines": [
//         "North Indian",
//         "Chinese",
//         "Biryani"
//       ],
//       "avgRating": 4.3,
//       "parentId": "7148",
//       "avgRatingString": "4.3",
//       "totalRatingsString": "10K+",
//       "sla": {
//         "deliveryTime": 24,
//         "lastMileTravel": 2.9,
//         "serviceability": "SERVICEABLE",
//         "slaString": "20-25 mins",
//         "lastMileTravelString": "2.9 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-06-26 00:00:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
//             "description": "Delivery!"
//           },
//           {
//             "imageId": "Rxawards/_CATEGORY-Snacks.png",
//             "description": "Delivery!"
//           },
//           {
//             "imageId": "Rxawards/_CATEGORY-Thali.png",
//             "description": "Delivery!"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "description": "Delivery!",
//                   "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
//                 }
//               },
//               {
//                 "attributes": {
//                   "description": "Delivery!",
//                   "imageId": "Rxawards/_CATEGORY-Snacks.png"
//                 }
//               },
//               {
//                 "attributes": {
//                   "description": "Delivery!",
//                   "imageId": "Rxawards/_CATEGORY-Thali.png"
//                 }
//               }
//             ]
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "60% OFF",
//         "subHeader": "UPTO ₹120"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       }
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/restaurants/walk-in-woods-general-mahadev-singh-road-ballupur-dehradun-74373",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "532213",
//       "name": "Chilli'Z Restro",
//       "cloudinaryImageId": "mzsuzzznrww2mpzwk27d",
//       "locality": "Prem Nagar",
//       "areaName": "Prem Nagar",
//       "costForTwo": "₹300 for two",
//       "cuisines": [
//         "Indian",
//         "Chinese",
//         "Mughlai"
//       ],
//       "avgRating": 4.2,
//       "parentId": "13645",
//       "avgRatingString": "4.2",
//       "totalRatingsString": "1K+",
//       "sla": {
//         "deliveryTime": 19,
//         "lastMileTravel": 2.9,
//         "serviceability": "SERVICEABLE",
//         "slaString": "15-20 mins",
//         "lastMileTravelString": "2.9 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-06-25 23:55:00",
//         "opened": true
//       },
//       "badges": {
        
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
            
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "20% OFF",
//         "subHeader": "UPTO ₹50"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       }
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/restaurants/chilliz-restro-prem-nagar-dehradun-532213",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "657142",
//       "name": "Punjabi Angithi (Delhi Wale)",
//       "cloudinaryImageId": "0a59d45ca92d85e5f63f5bc79f3dbb33",
//       "locality": "Rajpur Road",
//       "areaName": "Hathibarkala",
//       "costForTwo": "₹400 for two",
//       "cuisines": [
//         "North Indian",
//         "Chinese",
//         "Punjabi",
//         "Kebabs",
//         "Tandoor"
//       ],
//       "avgRating": 4.4,
//       "veg": true,
//       "parentId": "471145",
//       "avgRatingString": "4.4",
//       "totalRatingsString": "10K+",
//       "sla": {
//         "deliveryTime": 24,
//         "lastMileTravel": 4.4,
//         "serviceability": "SERVICEABLE",
//         "slaString": "20-25 mins",
//         "lastMileTravelString": "4.4 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-06-26 00:00:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "Rxawards/_CATEGORY-Thali.png",
//             "description": "Delivery!"
//           },
//           {
//             "imageId": "v1695133679/badges/Pure_Veg111.png",
//             "description": "pureveg"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "description": "Delivery!",
//                   "imageId": "Rxawards/_CATEGORY-Thali.png"
//                 }
//               },
//               {
//                 "attributes": {
//                   "description": "pureveg",
//                   "imageId": "v1695133679/badges/Pure_Veg111.png"
//                 }
//               }
//             ]
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "₹125 OFF",
//         "subHeader": "ABOVE ₹249",
//         "discountTag": "FLAT DEAL"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       }
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/restaurants/punjabi-angithi-delhi-wale-rajpur-road-hathibarkala-dehradun-657142",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "415642",
//       "name": "Murthal Paranthawala",
//       "cloudinaryImageId": "deabin3rt4mbtcitgopv",
//       "locality": "Haridwar Road",
//       "areaName": "Race Course",
//       "costForTwo": "₹220 for two",
//       "cuisines": [
//         "North Indian"
//       ],
//       "avgRating": 4.2,
//       "veg": true,
//       "parentId": "282923",
//       "avgRatingString": "4.2",
//       "totalRatingsString": "1K+",
//       "sla": {
//         "deliveryTime": 23,
//         "lastMileTravel": 2.4,
//         "serviceability": "SERVICEABLE",
//         "slaString": "20-25 mins",
//         "lastMileTravelString": "2.4 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-06-26 03:00:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "v1695133679/badges/Pure_Veg111.png",
//             "description": "pureveg"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "description": "pureveg",
//                   "imageId": "v1695133679/badges/Pure_Veg111.png"
//                 }
//               }
//             ]
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "₹100 OFF",
//         "subHeader": "ABOVE ₹349",
//         "discountTag": "FLAT DEAL"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       }
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/restaurants/murthal-paranthawala-haridwar-road-race-course-dehradun-415642",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "209248",
//       "name": "Tapri - The Teafe",
//       "cloudinaryImageId": "b6a6d5f32a06ab3f5c6eed98cf014236",
//       "locality": "Rajpur Road",
//       "areaName": "Hathibarkala Salwala",
//       "costForTwo": "₹300 for two",
//       "cuisines": [
//         "North Indian",
//         "Chinese",
//         "Beverages",
//         "Continental",
//         "Italian",
//         "Desserts"
//       ],
//       "avgRating": 4.2,
//       "parentId": "201145",
//       "avgRatingString": "4.2",
//       "totalRatingsString": "1K+",
//       "sla": {
//         "deliveryTime": 27,
//         "lastMileTravel": 2.5,
//         "serviceability": "SERVICEABLE",
//         "slaString": "25-30 mins",
//         "lastMileTravelString": "2.5 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-06-26 03:00:00",
//         "opened": true
//       },
//       "badges": {
        
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
            
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "₹100 OFF",
//         "subHeader": "ABOVE ₹249",
//         "discountTag": "FLAT DEAL"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       }
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/restaurants/tapri-the-teafe-rajpur-road-hathibarkala-salwala-dehradun-209248",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "341446",
//       "name": "Food Nagri",
//       "cloudinaryImageId": "qmufoszfhvwsmjnsy3nj",
//       "locality": "Kishan Nagar",
//       "areaName": "Ballupur",
//       "costForTwo": "₹350 for two",
//       "cuisines": [
//         "North Indian",
//         "Chinese",
//         "Biryani"
//       ],
//       "avgRating": 4.1,
//       "parentId": "81705",
//       "avgRatingString": "4.1",
//       "totalRatingsString": "1K+",
//       "sla": {
//         "deliveryTime": 17,
//         "lastMileTravel": 1,
//         "serviceability": "SERVICEABLE",
//         "slaString": "15-20 mins",
//         "lastMileTravelString": "1.0 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-06-26 03:30:00",
//         "opened": true
//       },
//       "badges": {
        
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
            
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "₹125 OFF",
//         "subHeader": "ABOVE ₹249",
//         "discountTag": "FLAT DEAL"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       }
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/restaurants/food-nagri-kishan-nagar-ballupur-dehradun-341446",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "73011",
//       "name": "KFC",
//       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/34bdc0b9-123a-44a8-b07a-12055c8ba41f_73011.JPG",
//       "locality": "Prem Nagar",
//       "areaName": "Prem Nagar",
//       "costForTwo": "₹300 for two",
//       "cuisines": [
//         "Burgers",
//         "Fast Food",
//         "Rolls & Wraps"
//       ],
//       "avgRating": 4.3,
//       "parentId": "547",
//       "avgRatingString": "4.3",
//       "totalRatingsString": "5K+",
//       "sla": {
//         "deliveryTime": 19,
//         "lastMileTravel": 1.8,
//         "serviceability": "SERVICEABLE",
//         "slaString": "15-20 mins",
//         "lastMileTravelString": "1.8 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-06-26 04:00:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "Rxawards/_CATEGORY-Burger.png",
//             "description": "Delivery!"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "description": "Delivery!",
//                   "imageId": "Rxawards/_CATEGORY-Burger.png"
//                 }
//               }
//             ]
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "40% OFF",
//         "subHeader": "UPTO ₹80"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       }
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/restaurants/kfc-prem-nagar-dehradun-73011",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "69061",
//       "name": "Subway",
//       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/18ab1a2a-c2a7-4cf0-a410-dacdf189bbd8_69061.JPG",
//       "locality": "Race Course",
//       "areaName": "Race Course",
//       "costForTwo": "₹350 for two",
//       "cuisines": [
//         "Healthy Food",
//         "Salads",
//         "Snacks",
//         "Desserts",
//         "Beverages"
//       ],
//       "avgRating": 4.3,
//       "parentId": "2",
//       "avgRatingString": "4.3",
//       "totalRatingsString": "10K+",
//       "sla": {
//         "deliveryTime": 16,
//         "lastMileTravel": 1.3,
//         "serviceability": "SERVICEABLE",
//         "slaString": "15-20 mins",
//         "lastMileTravelString": "1.3 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-06-25 23:59:00",
//         "opened": true
//       },
//       "badges": {
        
//       },
//       "isOpen": true,
//       "aggregatedDiscountInfoV2": {
        
//       },
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
            
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       }
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/restaurants/subway-race-course-dehradun-69061",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "311806",
//       "name": "Burger King",
//       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/cab874d5-c7ed-4122-9eb9-935992f4bcee_311806.JPG",
//       "locality": "Ballupur",
//       "areaName": "Ballupur",
//       "costForTwo": "₹350 for two",
//       "cuisines": [
//         "Burgers",
//         "American"
//       ],
//       "avgRating": 4.3,
//       "parentId": "166",
//       "avgRatingString": "4.3",
//       "totalRatingsString": "10K+",
//       "sla": {
//         "deliveryTime": 18,
//         "lastMileTravel": 1,
//         "serviceability": "SERVICEABLE",
//         "slaString": "15-20 mins",
//         "lastMileTravelString": "1.0 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-06-26 05:00:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "Rxawards/_CATEGORY-Burger.png",
//             "description": "Delivery!"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "description": "Delivery!",
//                   "imageId": "Rxawards/_CATEGORY-Burger.png"
//                 }
//               }
//             ]
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "ITEMS",
//         "subHeader": "AT ₹149"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       }
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/restaurants/burger-king-ballupur-dehradun-311806",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "493443",
//       "name": "Momo Cravings",
//       "cloudinaryImageId": "jiyrl7d3fisrhv3xzq3d",
//       "locality": "Vasant Vihar Enclave",
//       "areaName": "Balliwala",
//       "costForTwo": "₹100 for two",
//       "cuisines": [
//         "Chinese"
//       ],
//       "avgRating": 4.5,
//       "parentId": "138140",
//       "avgRatingString": "4.5",
//       "totalRatingsString": "1K+",
//       "sla": {
//         "deliveryTime": 22,
//         "lastMileTravel": 3.5,
//         "serviceability": "SERVICEABLE",
//         "slaString": "20-25 mins",
//         "lastMileTravelString": "3.5 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-06-26 00:00:00",
//         "opened": true
//       },
//       "badges": {
        
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
            
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "20% OFF",
//         "subHeader": "UPTO ₹50"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       }
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/restaurants/momo-cravings-vasant-vihar-enclave-balliwala-dehradun-493443",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "89064",
//       "name": "Ahuja Chinese Food Court",
//       "cloudinaryImageId": "uvzfjwcslztz1tzjlzfg",
//       "locality": "Tyagi Road",
//       "areaName": "Race Course",
//       "costForTwo": "₹350 for two",
//       "cuisines": [
//         "Chinese"
//       ],
//       "avgRating": 3.9,
//       "parentId": "13607",
//       "avgRatingString": "3.9",
//       "totalRatingsString": "10K+",
//       "sla": {
//         "deliveryTime": 21,
//         "lastMileTravel": 3,
//         "serviceability": "SERVICEABLE",
//         "slaString": "20-25 mins",
//         "lastMileTravelString": "3.0 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-06-26 04:00:00",
//         "opened": true
//       },
//       "badges": {
        
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
            
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "₹125 OFF",
//         "subHeader": "ABOVE ₹249",
//         "discountTag": "FLAT DEAL"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       }
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/restaurants/ahuja-chinese-food-court-tyagi-road-race-course-dehradun-89064",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "206939",
//       "name": "Chilli'Z Restro Express",
//       "cloudinaryImageId": "wo5zg4yicxrhuzwb0tad",
//       "locality": "Old Nehru Colony",
//       "areaName": "Dharampur",
//       "costForTwo": "₹300 for two",
//       "cuisines": [
//         "Indian",
//         "Chinese",
//         "Mughlai"
//       ],
//       "avgRating": 4.1,
//       "parentId": "13394",
//       "avgRatingString": "4.1",
//       "totalRatingsString": "1K+",
//       "sla": {
//         "deliveryTime": 20,
//         "lastMileTravel": 3.7,
//         "serviceability": "SERVICEABLE",
//         "slaString": "20-25 mins",
//         "lastMileTravelString": "3.7 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-06-26 00:30:00",
//         "opened": true
//       },
//       "badges": {
        
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
            
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "₹100 OFF",
//         "subHeader": "ABOVE ₹249",
//         "discountTag": "FLAT DEAL"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       }
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/restaurants/chilliz-restro-express-old-nehru-colony-dharampur-dehradun-206939",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "75724",
//       "name": "Doon Darbar",
//       "cloudinaryImageId": "hhjgw9fofqopwnioxtaj",
//       "locality": "Race Course",
//       "areaName": "Race Course",
//       "costForTwo": "₹400 for two",
//       "cuisines": [
//         "North Indian",
//         "Mughlai"
//       ],
//       "avgRating": 4,
//       "parentId": "13207",
//       "avgRatingString": "4.0",
//       "totalRatingsString": "10K+",
//       "sla": {
//         "deliveryTime": 17,
//         "lastMileTravel": 1.6,
//         "serviceability": "SERVICEABLE",
//         "slaString": "15-20 mins",
//         "lastMileTravelString": "1.6 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-06-26 01:00:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "Rxawards/_CATEGORY-Mughlai.png",
//             "description": "Delivery!"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "description": "Delivery!",
//                   "imageId": "Rxawards/_CATEGORY-Mughlai.png"
//                 }
//               }
//             ]
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "50% OFF",
//         "subHeader": "UPTO ₹100"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       }
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/restaurants/doon-darbar-race-course-dehradun-75724",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "508895",
//       "name": "Grameen Kulfi",
//       "cloudinaryImageId": "xmehany33czmjdumjltm",
//       "locality": "Omkar Road",
//       "areaName": "Chukkuwala",
//       "costForTwo": "₹120 for two",
//       "cuisines": [
//         "Ice Cream",
//         "Desserts"
//       ],
//       "avgRating": 4.6,
//       "veg": true,
//       "parentId": "12175",
//       "avgRatingString": "4.6",
//       "totalRatingsString": "100+",
//       "sla": {
//         "deliveryTime": 18,
//         "lastMileTravel": 0.9,
//         "serviceability": "SERVICEABLE",
//         "slaString": "15-20 mins",
//         "lastMileTravelString": "0.9 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-06-26 00:00:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "v1695133679/badges/Pure_Veg111.png",
//             "description": "pureveg"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "description": "pureveg",
//                   "imageId": "v1695133679/badges/Pure_Veg111.png"
//                 }
//               }
//             ]
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "60% OFF",
//         "subHeader": "UPTO ₹120"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       }
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/restaurants/grameen-kulfi-omkar-road-chukkuwala-dehradun-508895",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "81685",
//       "name": "Lemon Chilli",
//       "cloudinaryImageId": "jxvxiyr4bw4ldfi0bl7p",
//       "locality": "Rajpur Road",
//       "areaName": "Hathibarkala Salwala",
//       "costForTwo": "₹450 for two",
//       "cuisines": [
//         "North Indian"
//       ],
//       "avgRating": 4.2,
//       "parentId": "13627",
//       "avgRatingString": "4.2",
//       "totalRatingsString": "5K+",
//       "sla": {
//         "deliveryTime": 19,
//         "lastMileTravel": 3,
//         "serviceability": "SERVICEABLE",
//         "slaString": "15-20 mins",
//         "lastMileTravelString": "3.0 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-06-25 23:59:00",
//         "opened": true
//       },
//       "badges": {
        
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
            
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "60% OFF",
//         "subHeader": "UPTO ₹120"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       }
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/restaurants/lemon-chilli-rajpur-road-hathibarkala-salwala-dehradun-81685",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "562536",
//       "name": "Pop's Chinese",
//       "cloudinaryImageId": "srvp1xtnjrinrdqemubm",
//       "locality": "Haridwar Road",
//       "areaName": "Dharampur",
//       "costForTwo": "₹300 for two",
//       "cuisines": [
//         "Chinese",
//         "Snacks"
//       ],
//       "avgRating": 4.3,
//       "parentId": "380579",
//       "avgRatingString": "4.3",
//       "totalRatingsString": "1K+",
//       "sla": {
//         "deliveryTime": 34,
//         "lastMileTravel": 3.7,
//         "serviceability": "SERVICEABLE",
//         "slaString": "30-35 mins",
//         "lastMileTravelString": "3.7 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-06-25 23:59:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "Rxawards/_CATEGORY-Chinese.png",
//             "description": "Delivery!"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "description": "Delivery!",
//                   "imageId": "Rxawards/_CATEGORY-Chinese.png"
//                 }
//               }
//             ]
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "₹150 OFF",
//         "subHeader": "ABOVE ₹299",
//         "discountTag": "FLAT DEAL"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       }
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/restaurants/pops-chinese-haridwar-road-dharampur-dehradun-562536",
//       "type": "WEBLINK"
//     }
//   }];



//   // console.log(reslist[0].info. name);


// const Header = ()=>{
//   return(
//   <div className="navbar">
//     <div className="logo">
//     <img className="logoimg" 
//     src={logo} />
//     </div>

//     <div className="navItems">
//       <ul className="ulList">
//         <li>Home</li>
//         <li>About Us</li>
//         <li>Contact Us</li>
//         <li>Cart</li>
//       </ul>
//     </div>
//   </div>
//   )
// };

// const RestaurantCardComp = (props)=>{
//   // const{resName,cuisine,rating,minTime}=props
//   // console.log(props);
//     const {resData} = props;
//     // console.log( `type of resdata is : ${resData.info.cuisines}`);
//   const {name,cuisines,costForTwo,areaName,avgRating}=resData.info;//by this we made the cluttered code simple where we dont need to wwrite resDatya.info again & again
//   // console.log(`type of resdata is : ${typeof(resData)}`);
//   return(
//     <div className="rescard">
//       <img className="biryani"
//        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId}
//       />
//       <h3>{name}</h3>
//        <h4>{cuisines.join(", ")}</h4>
//       <p>{costForTwo}</p>
//       <p>{areaName}</p>
//       <div className="rating">
//       <p className="avg">{`⭐️`+avgRating}</p>
//       </div>
//       {/* <p className="deliveryTime">{resData.info.deliveryTime}</p> */}
//     </div>
//   )
// }


// const Body=()=>{
//   return(
//     <div className="body">
//       <div className="Search">search</div>
//       <div className="restaurantCard">

//         {/* so the below mwethod what we're doing is hard coded SO how to do it dynamically? ⬇⬇ */}
//         {/* <RestaurantCardComp resData={reslist[0]}/>
//         <RestaurantCardComp resData={reslist[1]}/>
//         <RestaurantCardComp resData={reslist[2]}/>
//         <RestaurantCardComp resData={reslist[3]}/>
//         <RestaurantCardComp resData={reslist[4]}/>
//         <RestaurantCardComp resData={reslist[5]}/>
//         <RestaurantCardComp resData={reslist[6]}/>
//         <RestaurantCardComp resData={reslist[7]}/>
//         <RestaurantCardComp resData={reslist[8]}/>
//         <RestaurantCardComp resData={reslist[9]}/>
//         <RestaurantCardComp resData={reslist[12]}/>
//         <RestaurantCardComp resData={reslist[14]}/>
//         <RestaurantCardComp resData={reslist[15]}/>
//         <RestaurantCardComp resData={reslist[16]}/>
//         <RestaurantCardComp resData={reslist[17]}/>
//         <RestaurantCardComp resData={reslist[1]}/> */}
//                           {/* OR */}
//         {reslist.map(
//           (restaurant)=>(
//           <RestaurantCardComp key={restaurant.info.id} resData={restaurant}/>
//           ))}
//         {/* key very important */}
//       </div>
//     </div>
//   )
// }



// const AppLayout = ()=>{
//   return(
//     <div className="hdr">
//       <Header/>
//       <Body/>
//     </div>
//   )
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout/>);


// ______________________________________________________________


// food clone app
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header.js";
import Body from "./src/components/Body.js";
// import Header from "./src/components/Header.js";
// import Header from "./src/components/header";
// import Body from "./src/components/Body";
// import Body from "./src/components/Body";
// import Header from "./src/components/Header";
// console.log('fhejj')
import AboutUs from "./src/components/AboutUs.js";
import Contact from "./src/components/Contact.js";
import Err from "./src/components/Err.js";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import RestaurantMenu from "./src/components/RestaurantMenu.js";


const AppLayout = ()=>{
  return(
    <div className="hdr">
      <Header/>
      <Outlet/>
    </div>
  )
};


const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },

        {
          path:"/about",
          element:<AboutUs/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/restaurantmenu/:resid",
          element:<RestaurantMenu/>
        },
    ],


    errorElement:<Err/>,

  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter}/>)
