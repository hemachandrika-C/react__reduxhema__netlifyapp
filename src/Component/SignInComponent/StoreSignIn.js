import React, { Component } from "react";
import "./StoreSignIn.scss";
import { auth, signInWithGoogle } from "./../../Firebase/Firebase.utils";
import { Link } from "react-router-dom";

class StoreSignIn extends Component {
    constructor(props) {
    super(props);
    this.state = {
    email: "",
    password: "",
    };
    }
    handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
    await auth.signInWithEmailAndPassword(email, password);
    this.setState({
    email: "",
    password: "",
    });
    } catch (error) {
    console.log(error);
    }
    };
    HandlerChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
    };
    render() {
    return (
    <div className="sign-in">
    <div className="row">
    <div className="col-lg-12">
    <h2>I already have an account</h2>
    <span>sign in with your email and password.</span>
    <form onSubmit={this.handleSubmit}>
    UserName:
    <input
    name="email"
    type="email"
    value={this.state.email}
    handlerChange={this.HandlerChange}
    label="email"
    className="text_input"
    required
    />
    Password:
    <input
    name="password"
    type="password"
    value={this.state.password}
    handlerChange={this.HandlerChange}
    label="Password"
    className="text_input"
    required
    />
    <div className="buttons">
    <div>
    <input type="submit" className="btn_si" value=" SignIn" />
    </div>
    <div>
    <input
    onClick={signInWithGoogle}
    isGoogleSignIn
    className="btn_i"
    value="SignIn Google"
    />
    </div>
    </div>
    <div className="newUser">
    New to fashionmyway <Link to="/signup">create an account</Link>
    </div>
    </form>
    </div>
    </div>
    </div>
    );
    }
    }
    export default StoreSignIn ;