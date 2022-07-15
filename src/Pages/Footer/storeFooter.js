import React from 'react'
import "./storeFooter.scss";
import { Link } from "react-router-dom";

function storeFooter() {
    return (
    <div>
    <div class="container-fluid footer">
    <div class="row">
    <div class="col-lg-12">
    <div class="footerlogo">
    <h2>
    <Link to="#">
    <img
    src="assest/projectimages/logoImage.png"
    class="img-fluid"
    width="50"
    alt="footerImg"
    />
    FashionWay
    </Link>
    </h2>
    </div>
    <div class="footertxts">
    <h3>Thank You for Visiting</h3>
    </div>
    </div>
    </div>
    </div>
    </div>
    );
    }
    export default storeFooter;