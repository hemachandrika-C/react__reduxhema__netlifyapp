import React, { Component } from 'react'
import "./storeShopPageDirectory";
import ShopMenuitem from "./../../MenuItemComponent/ShopPageComponent/StoreShopPage";
import { connect } from "react-redux";
import { selectshopDirectorySections } from "./../../../redux/ShopPageDirectory/ShopPageDirectory.selector";
import { createStructuredSelector } from "reselect";

export class storeShopPageDirectory extends Component {
    componentDidMount() {
    window.scrollTo(0, 0);
    }
    render() {
    const values = this.props.match.params.id;
    const { shopData } = this.props;
    return (
    <div>
    <div className="container py-5">
    <div className="row">
    {shopData[`${values}`].items.map(({ id, ...otherProps }) => (
    <ShopMenuitem key={id} id={id} {...otherProps} />
    ))}
    </div>
    </div>
    </div>
    );
    }
    }
    const mapStateToProps = createStructuredSelector({
    shopData: selectshopDirectorySections,
    });
    export default connect(mapStateToProps)( storeShopPageDirectory );