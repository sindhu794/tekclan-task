import React,{useEffect,useState} from 'react'

function Checkout(props){
    return(
    <React.Fragment>
        <div className="checkout-wrapper">
            <div className="my-cart">
                <h3>My Cart</h3>
                <a>Clear</a>
            </div>
            <ul className="cart-items">
                <li>
                    <div className="quantity">
                        <div className="count">2</div>
                        <div className="actions">
                            <a className="fas fa-plus"></a>
                            <a className="fas fa-minus"></a>
                        </div>
                    </div>
                    <div className="item">
                        <h4>Italian Chicken Rice Feast</h4>
                        <p>A regular-sized bowl of fragrant basmati rice </p>
                    </div>
                    <div className="price">
                        <span>52.50 INR</span>
                        <a className="far fa-times-circle"></a>
                    </div>
                </li>
                <li>
                    <div className="quantity">
                        <div className="count">1</div>
                        <div className="actions">
                            <a className="fas fa-plus"></a>
                            <a className="fas fa-minus"></a>
                        </div>
                    </div>
                    <div className="item">
                        <h4>NonVeg Meal for Four</h4>
                        <p>4 Masala Chicken Tikka Wraps + 2 Coke Cans  </p>
                    </div>
                    <div className="price">
                        <span>120.50 INR</span>
                        <a className="far fa-times-circle"></a>
                    </div>
                </li>
                <li>
                    <div className="quantity">
                        <div className="count">1</div>
                        <div className="actions">
                            <a className="fas fa-plus"></a>
                            <a className="fas fa-minus"></a>
                        </div>
                    </div>
                    <div className="item">
                        <h4>Chicken Awadhi Biryani</h4>
                        <p>Aromatic basmati Rice and soft juicy boneless chicken.</p>
                    </div>
                    <div className="price">
                        <span>300.50 INR</span>
                        <a className="far fa-times-circle"></a>
                    </div>
                </li>
            </ul>
            <div className="total">
                <div>TOTAL</div>
                <div className="price">473.50 INR</div>
            </div>
            <a  className="btn confirm-order">Confirm Order</a>
        </div>
        <div className="checkout-wrapper-mobile">
            <a>
                <i className="fas fa-shopping-bag"></i>
                <span className="total">Total</span>
                <span className="price">473.50 INR</span>
            </a>
        </div>
    </React.Fragment>
    )
}
export default Checkout