import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./PurchasePages.scss";
import {
selectItemsFromCart,
selectTotalItem,
} from "./../../redux/cart/cart.selector";
import CheckoutItem from "./../../Component/checkOutItem/storecheckOutItem";
import StripepayButton from "./../../Component/Stripebutton/storeStripebutton";
import Footer from "./../Footer/storeFooter"

function checkOutcomponent({ cartItems, Total }) {
    console.log(cartItems);
    return (
    <div>
    <div className="container checkout-page-header">
    <div className="row checkout_br">
    {/* */}
    <div className="col-sm-6 col-md-3">
    <div className="products_id">
    <p>Product price&quantity:</p>
    </div>
    </div>
    <div className="col-sm-6 col-md-3">
    <div className="products_title">
    <p>Product Name:</p>
    </div>
    </div>
    <div className="col-sm-6 col-md-3">
    <div className="product_img">
    <p>Product img:</p>
    </div>
    </div>
    <div className="col-sm-6 col-md-3">
    <div className="product_remove">
    <p >Product remove:</p>
    </div>
    </div>
    </div>
    {/* */}
    {cartItems.map((el) => (
    <CheckoutItem key={el.id} {...el} items={el} id={el.id}/>
    ))}
    <div className="total">
    <span>Total:&#x20B9;{Total}</span>
    </div>
    <div className="stripe_btn">
    <StripepayButton price={Total} />
    </div>
    </div>
    <Footer />
    </div>
    );
    }
    const mapStateToProps = createStructuredSelector({
    cartItems:selectItemsFromCart,
    Total: selectTotalItem,
    });
    export default connect(mapStateToProps)(checkOutcomponent);