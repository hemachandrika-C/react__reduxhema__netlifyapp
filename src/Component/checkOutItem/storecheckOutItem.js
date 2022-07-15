import React from 'react'
import "./storecheckOutItem.scss"
import { connect } from "react-redux";
import { clearItemFromCart } from './../../redux/cart/cart.action';

function storecheckOutItem({
    price,
    imageUrl,
    title,
    quantity,
    items,
    deleteItem
    }){ console.log(items);
    return (
    <div>
    {/* */}
    <div className="row pt-3 border_str">
    <div className="col-sm-6 col-md-3">
    <span className="product_price">{price}*{quantity}</span>
    </div>
    <div className="col-sm-6 col-md-3">
    <span className="product_Name">{title}</span>
    </div>
    <div className="col-sm-6 col-md-3">
    <span className="product_img"><img src={`${imageUrl}`} className="image_produc
    t_demo" alt=""></img></span>
    </div>
    <div className="col-sm-6 col-md-3 ">
    <span className="product_remove_items" onClick={() => deleteItem(items)}>Remov
    e</span>
    </div>
    </div>
    {/* */}
    </div>
    );
    }
    const mapDispatchToProps = (dispatch) => ({
    deleteItem: (item) => dispatch(clearItemFromCart(item)),
    });
    export default connect(null, mapDispatchToProps)(storecheckOutItem)
    