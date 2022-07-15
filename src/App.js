import React from "react";
import TopHeader from "./Component/HeaderComponent/StoreHeader";
import HomePage from "./Pages/HomePage/PageHome";
import { Route, Switch, Redirect } from "react-router-dom";
import ShopPage from "./Pages/ShopPage/StoreShoppage";
import LoginandLogoutPage from "./Pages/SigninandSignoutPage/LoginandLogoutPage";
import RegisterComponent from "./Pages/SigninandSignoutPage/SignUpPageComponent/Register";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";
import PurchasePages from "./Pages/CheckOutPages/PurchasePages";


class App extends React.Component {
  render() {
  return (
  <div className="App">
 
  <TopHeader />
 
  <Switch>
  <Route path="/" component={HomePage} exact />
  
  <Route path="/shop" component={ShopPage} />
  
  <Route
  exact
  path="/signinandsignout"
  render={() =>
  this.props.CurrentUser ? (
  <Redirect to="/" />
  ) : (
  <LoginandLogoutPage />
  )
  }
  />
  
  <Route
  exact
  path="/signup"
  render={() =>
  this.props.CurrentUser ? <Redirect to="/" /> : <RegisterComponent />
  }
  />

  <Route path="/checkout" component={PurchasePages} />
  
  </Switch>
  {/*
  <Switch>
  <Route path="/" component={HomePage} exact />
  <Route path="/shop" component={ShopPage} />
  <Route path="/checkout" component={PurchasePages} />
  <Route
  exact
  path="/signinandsignout"
  render={() =>
  this.props.CurrentUser ? (
  <Redirect to="/" />
  ) : (
  <LoginandLogoutPage />
  )
  }
  />
  <Route
  exact
  path="/signup"
  render={() =>
  this.props.CurrentUser ? <Redirect to="/" /> : <RegisterComponent />
  }
  />
  </Switch>
  */}
  </div>
  );
  }
  }
 
 
  const mapStateToProps = createStructuredSelector({
  CurrentUser: selectCurrentUser,
  });
 
 
  export default connect(mapStateToProps)(App);



