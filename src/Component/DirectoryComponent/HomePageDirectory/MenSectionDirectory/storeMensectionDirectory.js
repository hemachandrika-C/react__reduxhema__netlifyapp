import React from 'react'
import MenhomePagemenuitem from "./../../../MenuItemComponent/HomePageComponent/MenSectionMenuItem/StoreMenSectionMenuItem";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectmenhomeDirectorySections } from "./../../../../redux/homeDirectory/menDirectory/menDirectory.selector";

function storeMensectionDirectory({ mensection }) {
    return (
    <div className="container border_divs py-5">
    <div className="row">
    <div className="col-lg-12">
    <h1 className="womensection_title">Mens Wear</h1>
    </div>
    </div>
    <div className="row py-5">
    {mensection.map(({ id, ...otherPropswomendata }) => (
    <MenhomePagemenuitem key={id} {...otherPropswomendata} />
    ))}
    </div>
    </div>
    );
    }
    const mapStateToProps = createStructuredSelector({
    mensection: selectmenhomeDirectorySections,
    });
    export default connect(mapStateToProps)(storeMensectionDirectory);