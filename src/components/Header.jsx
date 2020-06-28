import React,{useEffect,useState} from 'react';

function Header(props){
    

    return(
        <React.Fragment>
            <div className="header-wrapper-mobile">
                <a className="fas fa-arrow-left arrow"></a>
                <div className="logo">eats</div>
                <a className="fa fa-heart fav"></a>
                <a className="fa fa-ellipsis-v menu"></a>
            </div>
            <div className="header-wrapper">
                <a className="theme-set"  onClick={props.setTheme}>{props.darkTheme ? "Light theme" : "Dark theme"}</a>
                <div className="head-nav">
                    <div className="logo"><img src="../images/logo.png" className="logo-img"/></div>
                    <div className="quick-actions">     
                        <div><a  className="order-link btn">Order</a></div>
                        <div className="search-wrap"><i className="fas fa-search"></i><input type="text" placeholder="Search Venue" className="search"/></div>
                        <div className="campaign"><a ><i className="fas fa-gift"></i> Campaigns</a></div>
                    </div>
                </div>
                <div className="user-info-links">
                    <a className="username">Hello, <span>Robin</span> <i className="fas fa-chevron-down"></i></a>    
                    <div className="balance"><span>Card Balance </span>2000 INR</div>
                    <div className="cart"><i className="fas fa-shopping-bag"></i><span>Total Amount</span><span className="amount">1000 INR</span></div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Header