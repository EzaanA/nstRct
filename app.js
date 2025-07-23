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
