import React from 'react'
import "./StoreMenSectionMenuItem.scss"
import { withRouter } from "react-router-dom";

function StoreMenSectionMenuItem({ title, imageUrl, history, linkUrl, match }) {
return (
<div class="col-lg-6 mens_items">
<div
class="border_men"
onClick={() => history.push(`${match.url}${linkUrl}`)}
>
<img src={`${imageUrl}`} alt="imageUrl" className="img-fluid" />
<div>
<h5>{title}</h5>
<span className="shop_cur">shop Now</span>
</div>
</div>
</div>
);
}
export default withRouter( StoreMenSectionMenuItem);