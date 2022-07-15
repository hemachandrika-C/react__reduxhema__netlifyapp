import React from 'react'
import "./storecartItem.scss";

function storecartItem({ imageUrl, price, title, quantity }) {
    console.log(title);
    return (
    <div class="divs_back_color">
    <div className="divs-cart-item">
    <img src={imageUrl} alt="item" class="cart_img"/>
    <div className="cart-item-details">
    <span className="cartname_divs">{title}</span>
    <p>
    <span className="price_divs">
    {quantity} * ${price}
    </span>
    </p>
    </div>
    </div>
    </div>
    );
    }
    
export default storecartItem