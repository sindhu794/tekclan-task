import React,{useEffect,useState} from 'react'
import Checkout from './Checkout'

function Order(props){
    const [data,setData] = useState([])

    useEffect(()=>{
        fetch('/getdata')
        .then(res => res.json())
        .then(res => {
            setData(res)
            console.log(res)
        })
    },[])

    return(
    <div className="order">
        <div className="menu-choice">
            <ul>
                <li><a >Set Menus</a></li>
                <li className="active"><a >Starting On</a></li>
                <li><a >Snacks</a></li>
                <li><a >Meat Donors</a></li>
                <li><a >All titles</a></li>
            </ul>
            <span><i className="fas fa-search"></i><input type="text" placeholder="Search Items"/></span>
        </div>
        <div className="cart-menu-wrap">
            <div className="menu-list-wrap">
                <ul className="menu-list">
                    {data.map((x,i)=>{
                        return (
                            <li key={i}>
                                <div className="item-type">
                                    <h2>{x.name}</h2>
                                    <a  className="fas fa-chevron-down"></a>
                                </div>
                                <ul>
                                    { x.itemlist.map((y,j)=>{
                                        return (
                                            <li key={j} className="item-wrapper">
                                                <div className="item-name">
                                                    <h3>{y.name}</h3>
                                                    <p>{y.description}</p>
                                                </div>
                                                <div className="price">
                                                   {y.price} {y.currency} <a  className="fas fa-plus"></a>
                                                </div>
                                            </li>
                                        )
                                    })}
                               </ul>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="checkout">
                    <Checkout/>
                    
            </div>
        </div>
    </div>
    )
}
export default Order