import React,{useEffect,useState} from 'react'

function Breadcrumbs(props){
    return(
    <div className="breadcrumbs-wrapper">
        <i className="fas fa-home"></i>
        <a >TamilNadu</a> /
        <a >Chennai</a> /
        <a >Anna Nagar, Chennai</a>
    </div>
    )
}
export default Breadcrumbs