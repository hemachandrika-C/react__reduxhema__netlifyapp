import React from 'react'
import "./storeOtherSectionDirectory.scss";
import OtherMenuItems from "./../../../MenuItemComponent/HomePageComponent/OtherSectionMenuItem/StoreOtherSectionMenuItem";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectotherhomeDirectorySections } from "./../../../../redux/homeDirectory/otherDirectory/otherDirectory.selector";


function storeOtherSectionDirectory({ otherSections }) {
    return (
    <div className="container border_divs py-5">
    <div className="other_title">OtherItems</div>
    <div className="row py-5">
    {otherSections.map(({ id, ...otherPropswomendata }) => (
    <OtherMenuItems key={id} {...otherPropswomendata} />
    ))}
    </div>
    </div>
    );
    }
    const mapStateToProps = createStructuredSelector({
    otherSections: selectotherhomeDirectorySections,
    });
    export default connect(mapStateToProps)(storeOtherSectionDirectory);
    
