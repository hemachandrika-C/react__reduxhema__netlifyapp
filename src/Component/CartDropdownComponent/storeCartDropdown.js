import React, { Component } from 'react'
import { connect } from "react-redux";
import "./storeCartDropdown.scss";
import Cartproducts from "../cart_item/storecartItem";
import { selectItemsFromCart } from "./../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleButton } from "./../../redux/cart/cart.action";



export class storeCartDropdown extends Component {
    render() {
    const { cartItems, history, dispatch } = this.props;
    console.log(cartItems);
    return (
    <div className="divs-cart-dropdown">
    <div className="div_cart-items">
    {
    cartItems.map((cartItems) => (
    <Cartproducts key={cartItems.id} {...cartItems} />
    ))
    }
    <input type="submit"
    onClick={() => {
    history.push("/checkout");
    dispatch(toggleButton());
    }}
    value="BUY NOW"
    className="checkout_btn"
    />
    </div>
    </div>
    );
    }
    }
    const mapStateToProps = createStructuredSelector({
    cartItems:selectItemsFromCart,
    });
    
    export default withRouter(connect(mapStateToProps)(storeCartDropdown ));
    