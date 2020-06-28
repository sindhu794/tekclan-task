import React,{useEffect,useState} from 'react';
import {NavLink} from 'react-router-dom';

function Menu(props){
    return(
    <ul className="menu-wrapper">
        <li><NavLink activeClassName="active" exact to="/">Order</NavLink></li>
        <li><NavLink activeClassName="active" to="/information">Information</NavLink></li>
        <li><NavLink activeClassName="active" to="/recommendations">Recommendations</NavLink></li>
        <li><NavLink activeClassName="active" to="/comments">Comments(28)</NavLink></li>
    </ul>
    )
}
export default Menu