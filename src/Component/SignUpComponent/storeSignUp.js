import React, { Component } from "react";
import "./storeSignUp.scss";
import {
    auth,
    GenerateUserProfileInformation
    } from "./../../Firebase/Firebase.utils";

    class StoreSignUpComponent extends Component {
        constructor(props) {
        super(props);
        this.state = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
        };
        }
        handleSubmit = async (event) => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
        alert("password don't match ");
        return;
        }
        if (password.length < 6 || confirmPassword.length < 6) {
        alert("please enter atleast 6 digit");
        return;
        }
        try {
        const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
        );
        await GenerateUserProfileInformation(user, { displayName });
        this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
        });
        } catch (error) {
        console.error(error);
        }
        };
        handlerChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
        };
        render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
        <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
        Name:
        <input
        type="text"
        name="displayName"
        value={displayName}
        onChange={this.handlerChange}
        label="Display Name"
        className="text_input"
        required
        />
        Email:
        <input
        type="email"
        name="email"
        value={email}
        onChange={this.handlerChange}
        label="email"
        className="text_email"
        required
        />
        password:
        <input
        type="password"
        name="password"
        value={password}
        onChange={this.handlerChange}
        label="password"
        className="Passowrd_box"
        required
        />
        confirm password:
        <input
        type="password"
        name="confirmPassword"
        value={confirmPassword}
        onChange={this.handlerChange}
        label=" confirmPassword"
        className="Passowrd_box"
        required
        />
        <input type="submit" value="Sign Up" className="signup"/>
        </form>
        </div>
        );
        }
        }
        export default StoreSignUpComponent;
    