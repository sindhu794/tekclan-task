import React,{useEffect,useState} from 'react'

function RestaurantInfo(props){
    return(
    <div className="restaurant-info-wrapper">
        <div className="profile">
            <div className="profile-img">
                <img src="../images/restaurant_img.png"/> 
            </div>
            <div className="profile-details">
                <h1>Savoury Sea Shell </h1>
                <span>Anna Nagar, Chennai</span>
                <div className="reviews-wrapper">
                    <div className="review">
                        <span className="review-number">5</span>
                        <span className="review-type">Speed</span>
                    </div>
                    <div className="review high-review">
                        <span className="review-number">8</span>
                        <span className="review-type">Flavor</span>
                    </div>
                    <div className="review high-review">
                        <span className="review-number">8</span>
                        <span className="review-type">Quality</span>
                    </div>  
                </div>
            </div>
        </div>
        <div className="order-timings">
            <div className="package-amount">
                <div> <i className="fas fa-wallet"></i> 25 INR <a className="fas fa-chevron-down"></a></div>
                <span>Min. Package Amount</span>
            </div>
            <div className="service-time">
                <div><i className="fas fa-motorcycle"></i> 45 dk <a className="fas fa-chevron-down"></a></div>
                <span>Cover Service Time</span>
            </div>
            <div className="order-hours">
                <div><i className="far fa-clock"></i> 09:00 - 22.00</div>
                <span>Order Hours </span>
            </div>
        </div>
        <div className="favorite">
            <a href=""><i className="heart-icon fas fa-heart"></i> Added to Favorites</a>
            <a href="">Share</a>
            <a href="" className="fb-icon"><i className="fab fa-facebook-square"></i> Like (1.2K)</a>
        </div>
    </div>
    
    )
}
export default RestaurantInfo