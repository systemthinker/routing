import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    
  } from "react-router-dom";


export default function Navbar(){
    const divStyle = {
        
        color: 'pink'
      };
    return    (
    <div  >
        <NavLink activeStyle={divStyle} exact to="/">Home</NavLink>
        <NavLink activeStyle={divStyle} exact to="/discover">movies</NavLink>
        <NavLink activeStyle={divStyle} exact to="/about">about</NavLink>
        <NavLink activeStyle={divStyle} exact to="/discover/test">movieDetail</NavLink>
    </div>
    )
}