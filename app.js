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

const jsxHeading =(<h1>
  Hi this is ezaan!
  </h1>)
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);