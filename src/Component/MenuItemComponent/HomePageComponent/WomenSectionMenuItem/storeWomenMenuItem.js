import React from 'react'
import "./WomenMenuItem.style.scss"
import { withRouter } from "react-router-dom";

function storeWomenMenuItem({ title, imageUrl, history, linkUrl, match }) {
return (
<div className="col-sm-6 col-md-6 col-lg-3 divs text-center">
<div
className="images"
onClick={() => history.push(`${match.url}${linkUrl}`)}
>
<img
src={`${imageUrl}`}
alt="product_images"
className="img-fluid"
></img>
<div className="show_divs text-center">
<h5>{title}</h5>
<span className="shopNow">Shop Now</span>
</div>
</div>
</div>
)
}
export default withRouter(storeWomenMenuItem)