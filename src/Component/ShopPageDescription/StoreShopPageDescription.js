import React, { Component } from 'react'
import "./StoreShopPageDescription.scss";
import AddtoCart from "./AddtoCart/StoreAddtoCart";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectshopDirectorySections } from "./../../redux/ShopPageDirectory/ShopPageDirectory.selector";

export class StoreShopPageDescription extends Component {
    componentDidMount() {
    window.scrollTo(0, 0);
    }
    render() {
    const { ShopData } = this.props;
    console.log(this.props.match.url);
    console.log(typeof this.props.match.url);
    console.log(this.props.match.params.id);
    let val = this.props.match.url;
    let cons = val.split("/");
    console.log(cons[2]);
    let productname = cons[2];
    const checking = ShopData["lehenga"].items.find((id) => id.id === 1);
    const values = this.props.match.params.id;
    let checking1;
    checking1 = ShopData[productname].items.filter(
    (id) => id.id === Number(this.props.match.params.id)
    )
    {
    /*
    if (values >= 1 && values <= 24) {
    checking1 = ShopData["lehenga"].items.filter(
    (id) => id.id === Number(this.props.match.params.id)
    );
    } else if (values >= 25 && values <= 44) {
    checking1 = ShopData["kurti"].items.filter(
    (id) => id.id === Number(this.props.match.params.id)
    );
    } else if (values >= 45 && values <= 64) {
    checking1 = ShopData["saree"].items.filter(
    (id) => id.id === Number(this.props.match.params.id)
    );
    } else if (values >= 65 && values <= 84) {
    checking1 = ShopData["chudimaterial"].items.filter(
    (id) => id.id === Number(this.props.match.params.id)
    );
    } else if (values >= 85 && values <= 104) {
    checking1 = ShopData["dupatta"].items.filter(
    (id) => id.id === Number(this.props.match.params.id)
    );
    } else if (values >= 105 && values <= 124) {
    checking1 = ShopData["officewear"].items.filter(
    (id) => id.id === Number(this.props.match.params.id)
    );
    } else if (values >= 125 && values <= 144) {
    checking1 = ShopData["tops"].items.filter(
    (id) => id.id === Number(this.props.match.params.id)
    );
    } else if (values >= 145 && values <= 164) {
    checking1 = ShopData["skirts"].items.filter(
    (id) => id.id === Number(this.props.match.params.id)
    );
    } else if (values >= 165 && values <= 185) {
    checking1 = ShopData["coatsuit"].items.filter(
    (id) => id.id === Number(this.props.match.params.id)
    );
    } else if (values >= 186 && values <= 206) {
    checking1 = ShopData["shirts"].items.filter(
    (id) => id.id === Number(this.props.match.params.id)
    );
    } else if (values >= 207 && values <= 226) {
    checking1 = ShopData["tshirt"].items.filter(
    (id) => id.id === Number(this.props.match.params.id)
    );
    } else if (values >= 227 && values <= 246) {
    checking1 = ShopData["salwar"].items.filter(
    (id) => id.id === Number(this.props.match.params.id)
    );
    } else if (values >= 247 && values <= 266) {
    checking1 = ShopData["glasses"].items.filter(
    (id) => id.id === Number(this.props.match.params.id)
    );
    } else if (values >= 267 && values <= 286) {
    checking1 = ShopData["watches"].items.filter(
    (id) => id.id === Number(this.props.match.params.id)
    );
    } else if (values >= 287 && values <= 306) {
    checking1 = ShopData["perfumes"].items.filter(
    (id) => id.id === Number(this.props.match.params.id)
    );
    } else if (values >= 307 && values <= 326) {
    checking1 = ShopData["makeup"].items.filter(
    (id) => id.id === Number(this.props.match.params.id)
    );
    }
    */
    }
    return (
    <div>
    <div className="container py-5 ">
    {checking1.map((item) => (
    <AddtoCart key={item.id} item={item} {...item} />
    ))}
    {/*
    <div className="row cls">
    <div className="col-lg-6 Product_image_border">
    <div className="ProductImage_div">
    <img src={`${checking1.imageUrl}`} alt="imageUrl" />
    </div>
    </div>
    <div className="col-lg-6">
    <div className="productdetail_title py-5">
    <h1>{checking1.title}</h1>
    <div class="other_details ">
    <h1>&#8377;{checking1.price}</h1>
    <p>inclusive of all taxes</p>
    <p>Ratings:{checking1.ratings}</p>
    <button className="Add_to_cart">Add To cart</button>
    </div>
    <div className="Product_Page_description">
    <p>{checking1.description}</p>
    </div>
    </div>
    </div>
    </div>
    */}
    </div>
    </div>
    );
    }
    }
    const mapStateToProps = createStructuredSelector({
    ShopData: selectshopDirectorySections,
    });
    export default connect(mapStateToProps)(StoreShopPageDescription );
    