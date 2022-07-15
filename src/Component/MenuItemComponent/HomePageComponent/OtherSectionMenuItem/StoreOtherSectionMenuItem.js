import React from 'react'
import "./StoreOtherSectionMenuItem.scss";
import { withRouter } from "react-router-dom";

function StoreOtherSectionMenuItem({ title, imageUrl, history, linkUrl, match }) {
return (
<div className="col-lg-3">
<div
className="border_otherMenu"
onClick={() => history.push(`${match.url}${linkUrl}`)}
>
<img src={`${imageUrl}`} alt="ImageUrl" className="img-fluid" />
<h5>{title}</h5>
<span className="shop_cur">Shop Now</span>
</div>
</div>
);
}
export default withRouter(StoreOtherSectionMenuItem);