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

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div",{id:"child"},[
  React.createElement("div",{id:"child"},
    [
      React.createElement("h1",{id:"h1d"},"I'm h1 tag"),
      React.createElement("h2",{id:"h2d"},"I'm h2 tag"),
    ] 
  ),

  React.createElement("div",{id:"child"},
    [
      React.createElement("h1",{id:"h1d"},"I'm h1 tag"),
      React.createElement("h2",{id:"h2d"},"I'm h2 tag"),
    ]
  )
]
)

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent);