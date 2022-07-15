import React from 'react'
import { addingItemToCart } from "./../../../redux/cart/cart.action";
import { connect } from "react-redux";
function StoreAddtoCart({
item,
price,
imageUrl,
ratings,
title,
description,
addItem,
}) {
return (
<div className="row cls">
<div className="col-md-6 Product_image_border">
<div className="ProductImage_div">
<img src={`${imageUrl}`} alt="imageUrl" className="img-fluid" />
</div>
</div>
<div className="col-md-6">
<div className="productdetail_title py-5">
<h1>{title}</h1>
<div class="other_details ">
<h1>&#8377;{price}</h1>
<p>inclusive of all taxes</p>
<p>Ratings:{ratings}</p>
<button className="Add_to_cart" onClick={() => addItem(item)}>
Add To cart
</button>
</div>
<div className="Product_Page_description">
<p>{description}</p>
</div>
</div>
</div>
</div>
);
}
const mapDispatchToProps = (dispatch) => ({
addItem: (item) => dispatch( addingItemToCart(item)),
});
export default connect(null, mapDispatchToProps)(StoreAddtoCart);
