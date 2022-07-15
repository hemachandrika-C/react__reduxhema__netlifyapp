import React from 'react'
import ShopPageDirectory from "./../../Component/DirectoryComponent/ShopPageDirectory/storeShopPageDirectory";
import ShopPageDescription from "./../../Component/ShopPageDescription/StoreShopPageDescription";
import { Route, Switch } from "react-router-dom";
import StoreNavigation from "./../Navigation/StoreNavigation";
import Footer from "./../Footer/storeFooter";

function ShopPage({match}) {
    return (
    <div>
    <StoreNavigation />
    <Switch>
    <Route path={`${match.path}/:id`} component={ShopPageDirectory} exact />
    <Route path="/shop/kurti/:id" component={ShopPageDescription} />
    <Route path="/shop/lehenga/:id" component={ShopPageDescription} />
    <Route path="/shop/saree/:id" component={ShopPageDescription} />
    <Route
    path="/shop/chudimaterial/:id"
    component={ShopPageDescription}
    ></Route>
    <Route path="/shop/dupatta/:id" component={ShopPageDescription} />
    <Route
    path="/shop/officewear/:id"
    component={ShopPageDescription}
    ></Route>
    <Route path="/shop/tops/:id" component={ShopPageDescription} />
    <Route path="/shop/skirts/:id" component={ShopPageDescription} />
    <Route path="/shop/shirts/:id" component={ShopPageDescription} />
    <Route path="/shop/coatsuit/:id" component={ShopPageDescription} />
    <Route path="/shop/tshirt/:id" component={ShopPageDescription} />
    <Route path="/shop/salwar/:id" component={ShopPageDescription} />
    <Route path="/shop/glasses/:id" component={ShopPageDescription} />
    <Route path="/shop/watches/:id" component={ShopPageDescription} />
    <Route path="/shop/perfumes/:id" component={ShopPageDescription} />
    <Route path="/shop/makeup/:id" component={ShopPageDescription} />
    </Switch>
    <Footer />
    {/*
    <Switch>
    <Route path={`${match.path}/:id`} component={ShopPageDirectory} exact />
    <Route path="/shop/kurti/:id" component={ShopPageDescription} />
    <Route path="/shop/lehenga/:id" component={ShopPageDescription} />
    <Route path="/shop/saree/:id" component={ShopPageDescription} />
    <Route
    path="/shop/chudimaterial/:id"
    component={ShopPageDescription}
    ></Route>
    <Route path="/shop/dupatta/:id" component={ShopPageDescription} />
    <Route
    path="/shop/officewear/:id"
    component={ShopPageDescription}
    ></Route>
    <Route path="/shop/tops/:id" component={ShopPageDescription} />
    <Route path="/shop/skirts/:id" component={ShopPageDescription} />
    <Route path="/shop/shirts/:id" component={ShopPageDescription} />
    <Route path="/shop/coatsuit/:id" component={ShopPageDescription} />
    <Route path="/shop/tshirt/:id" component={ShopPageDescription} />
    <Route path="/shop/salwar/:id" component={ShopPageDescription} />
    <Route path="/shop/glasses/:id" component={ShopPageDescription} />
    <Route path="/shop/watches/:id" component={ShopPageDescription} />
    <Route path="/shop/perfumes/:id" component={ShopPageDescription} />
    <Route path="/shop/makeup/:id" component={ShopPageDescription} />
    </Switch>
    */}
    </div>
    );
    }
    export default ShopPage;