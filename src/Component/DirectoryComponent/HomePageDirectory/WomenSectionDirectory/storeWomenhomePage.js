import React from 'react'
import "./storeWomenhomePage.scss"

import WomenMenuitem from "./../../../MenuItemComponent/HomePageComponent/WomenSectionMenuItem/storeWomenMenuItem";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectwomenhomeDirectorySections } from "./../../../../redux/homeDirectory/womenDirectory/womenDirectory.selector";


function StoreWomenhomePage({ womenDirectorysection }) {
    return (
    <div className="border_divs py-5">
    <div className="container">
    <div className="row">
    <div className="col-lg-12">
    <h1 className="womensection_title">Womens Wear</h1>
    </div>
    </div>
    </div>
    <div className="container ">
    <div className="row">
    {womenDirectorysection.map(({ id, ...otherPropswomendata }) => (
    <WomenMenuitem key={id} {...otherPropswomendata} />
    ))}
    </div>
    </div>
    </div>
    );
    }
    //const mapStateToProps = (state) => ({
    // womenDirectorysection: state.women.womensections,
    //});
    const mapStateToProps = createStructuredSelector({
    womenDirectorysection: selectwomenhomeDirectorySections,
    });
    export default connect(mapStateToProps)( StoreWomenhomePage);