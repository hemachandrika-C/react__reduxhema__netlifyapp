import React from 'react'
import "./storeNavigation.scss"
import { Link } from "react-router-dom";
function StoreNavigation() {
return (
<div class="Navbar">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<button
class="navbar-toggler"
type="button"
data-toggle="collapse"
data-target="#navbarNavDropdown"
aria-controls="navbarNavDropdown"
aria-expanded="false"
aria-label="Toggle navigation"
>
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse " id="navbarNavDropdown">
<ul class="navbar-nav mx-auto">
<li class="nav-item dropdown">
<a
class="nav-link dropdown-toggle"
href="#"
id="navbarDropdownMenuLink"
role="button"
data-toggle="dropdown"
aria-haspopup="true"
aria-expanded="false"
>
Women
</a>
<div
class="dropdown-menu"
aria-labelledby="navbarDropdownMenuLink"
>
{/** */}
<div className="row">
<div className="col-sm-6">
<Link class="dropdown-item" to="/shop/lehenga">
Lehenga
</Link>
<Link class="dropdown-item" to="/shop/kurti">
Kurtis
</Link>
<Link class="dropdown-item" to="/shop/saree">
Saree
</Link>
<Link class="dropdown-item" to="/shop/tops">
Tops
</Link>
<Link class="dropdown-item" to="/shop/officewear">
officewear
</Link>
<Link class="dropdown-item" to="/shop/skirts">
Skirts
</Link>
<Link class="dropdown-item" to="/shop/chudimaterial">
chudiMaterial
</Link>
<Link class="dropdown-item" to="/shop/dupatta">
Dupatta
</Link>
</div>
<div className="col-sm-6 hide">
<img
src="assest/projectimages/nav-image.jpg"
width="200"
height="200"
className="img-fluid"
alt=""
/>
</div>
</div>
{/** */}
</div>
</li>
<li class="nav-item dropdown">
<a
class="nav-link dropdown-toggle"
href="#"
id="navbarDropdownMenuLink"
role="button"
data-toggle="dropdown"
aria-haspopup="true"
aria-expanded="false"
>
Men
</a>
<div
class="dropdown-menu"
aria-labelledby="navbarDropdownMenuLink"
>
{/** */}
<div className="row">
<div className="col-sm-6">
<Link class="dropdown-item" to="/shop/coatsuit">
Coat suit
</Link>
<Link class="dropdown-item" to="/shop/shirts">
Formal Shirt
</Link>
<Link class="dropdown-item" to="/shop/tshirt">
T-shirt
</Link>
<Link class="dropdown-item" to="/shop/salwar">
Salwar
</Link>
</div>
<div className="col-sm-6 hide">
<img
src="assest/projectimages/nav-image1.jpg"
width="200"
height="200"
className="img-fluid"
alt=""
/>
</div>
</div>
</div>
</li>
<li class="nav-item">
<Link class="nav-link" to="/shop/glasses">
Glasses
</Link>
</li>
<li class="nav-item">
<Link class="nav-link" to="/shop/makeup">
Makeup
</Link>
</li>
<li class="nav-item">
<Link class="nav-link" to="/shop/perfumes">
Perfumes
</Link>
</li>
<li class="nav-item">
<Link class="nav-link" to="/shop/watches">
Watches
</Link>
</li>
</ul>
</div>
</nav>
</div>
)
}
export default StoreNavigation