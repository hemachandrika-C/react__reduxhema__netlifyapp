import React from 'react'
import "./StoreShopMenuPage.scss";
import { Link } from "react-router-dom";


function StoreShopPageMenuIetm({ id, price, imageUrl, type, match }) {
console.log(`/shop/${type}/:id`);
console.log(type);
console.log(id);
return (
<div className="col-md-6 col-lg-4 itemsmenu">
<div className="border_item_lehen">
<div>
<img src={`${imageUrl}`} alt="ImageUrl" className="menuImage" />
<div className="details">
<p>&#8377;{price}</p>
</div>
<div>
<div>
<Link to={`${type}/${id}`} className="link">
<p className="view_Details">View Details</p>
</Link>
</div>
</div>
</div>
</div>
</div>
);
}
export default StoreShopPageMenuIetm