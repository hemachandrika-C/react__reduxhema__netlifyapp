import React from "react";
import "./LoginandLogoutPage.style.scss";
import SignIn from "./../../Component/SignInComponent/StoreSignIn";

function LoginandLoginOut() {
    return (
    <div className="container py-5">
    <div class="row">
    <div class="col-lg-6">
    <div className="background_sign_image ">
    <div className="background_hov">
    <h1>Shop with an exclusive offer & enjoy unlimited prizes</h1>
    <h2>Only on Fashiononmyway</h2>
    <p>Hurry Up</p>
    </div>
    </div>
    </div>
    <div class="col-lg-6">
    <SignIn />
    </div>
    </div>
    </div>
    );
    }
    export default LoginandLoginOut;
