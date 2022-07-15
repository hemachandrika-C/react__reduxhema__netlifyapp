import React, { Component } from 'react'
import "./storeHeader.scss"
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Cartdropdown from "./../CartDropdownComponent/storeCartDropdown";
import { toggleButton } from "./../../redux/cart/cart.action";
import { selectCountItems } from "./../../redux/cart/cart.selector";
import { selectCurrentUser } from "./../../redux/user/user.selector";
import {selectHiddenToggleStatus } from "./../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { auth,GenerateUserProfileInformation } from "./../../Firebase/Firebase.utils"
import { setCurrentuser } from "./../../redux/user/user.action";

export class StoreHeader extends Component {
    unsubscribeFromAuth = null;
    componentDidMount() {
    const { setCurrentuser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
    if (userAuth) {
    const userRef = await GenerateUserProfileInformation(userAuth);
    userRef.onSnapshot((snapshot) => {
    this.setState({
    CurrentUser:{
    id: snapshot.id,
    ...snapshot.data(),
    }
    });
    });
    }
    setCurrentuser(userAuth);
    });
    }
    compoundWillUnmount() {
    this.unsubscribeFromAuth();
    }
    render(){
    const { CurrentUser, toggleCartHidden, hidden, itemCount }=this.props
    console.log(CurrentUser);
    console.log(auth.currentUser);
    return (
    <div class="header">
    <div class="container-fluid top-header">
    <div class="row">
    <div class="col-lg-12 displ_flex">
    {/** */}
    <div class="div_left">
    <Link to="/">
    <img src="assest/projectimages/fashion-bazar-logo.jpg" alt="headerImg" className="img-fluid"/>
    </Link>
    </div>
    {/** */}
    {/** */}
    <div class="div_right">
    {CurrentUser ? (
    <div className="option" onClick={() => auth.signOut()}>
    <div className="div cursbtn">
    <img
    src={`${
    auth.currentUser.photoURL === null
    ? "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmH77HyERSQQ9ozwzxPvJQvpY_Atdu4IitTw&usqp=CAU"
    : auth.currentUser.photoURL
    }`}
    className="sign_imageUrl"
    />
    </div>
    {/* {auth.currentUser.displayName.split(" ").slice(0, 1)} */}
    {/*
    {auth.currentUser.displayName === null
    ? CurrentUser.displayName
    : auth.currentUser.displayName.split(" ").length > 1
    ? auth.currentUser.displayName.split(" ").slice(0, 1)
    : " "}
    */}
    {auth.currentUser.displayName !== null
    ? auth.currentUser.displayName.split(" ").length > 1
    ? auth.currentUser.displayName.split(" ").slice(0, 1)
    : " "
    : CurrentUser.displayName}
    </div>
    ) : (
    <Link to="/signinandsignout">
    <h5 className="sign_bts_">sign In</h5>
    </Link>
    )}
    <span class="icon" onClick={toggleCartHidden}>
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    >
    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3
    .6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25
    -.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0
    -.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-
    2-2-2z" />
    <path d="M0 0h24v24H0z" fill="none" />
    </svg>
    </span>
    <span className="shopp_count">{itemCount}</span>
    {hidden ? null : <Cartdropdown />}
    </div>
    {/** */}
    </div>
    </div>
    </div>
    </div>
    );
    }
    }
    const mapStateToProps = createStructuredSelector({
    CurrentUser: selectCurrentUser,
    hidden: selectHiddenToggleStatus,
    itemCount: selectCountItems,
    });
    const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleButton()),
    setCurrentuser: (user) => dispatch(setCurrentuser(user)),
    });
    export default connect(mapStateToProps, mapDispatchToProps)(StoreHeader);
