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
import React from "react";
import ReactDOM from "react-dom/client";


//React Element
const jsxHeading =(<h1>
  Hi this is React Element!
  </h1>);

  //React component with a return statement
  const Heading1 =()=>{
    return <h1>THis is heading inside of React component with a return statement</h1>
  };

  const Heading2=()=>(
    <h1>THis is heading inside of React component without a return statement </h1>
  )


//converting the above react element to a react component
const JsxHeadingAsComp = ()=>(
  <div className="hello">
    <h1>THis is React Element coverted to React Component</h1>
  </div>
);

const ComponentComposition = ()=>(
  <div className="he">
    <h1>THis is React Component Composition:- </h1>
    <Heading1/>
  </div>
);



const root =ReactDOM.createRoot(document.getElementById("root"));
const root2 =ReactDOM.createRoot(document.getElementById("root2"));
const root3 =ReactDOM.createRoot(document.getElementById("root3"));
const root4 =ReactDOM.createRoot(document.getElementById("root4"));
root.render(<JsxHeadingAsComp/>);
root2.render(<Heading1/>);
root3.render(<Heading2/>);
root4.render(<ComponentComposition/>);
// _________________________________________________________________
