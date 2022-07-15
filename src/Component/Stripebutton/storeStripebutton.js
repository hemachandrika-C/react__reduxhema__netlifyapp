import React from "react";
import StripeCheckout from "react-stripe-checkout";
const storestripe_paymentcomponent = ({ price }) => {
const priceForStripe = price * 100;
const publishableKey ="pk_test_51HMEMwHgKThuJXdU7XV73f4ojD4JqQap3BCvdHqGl6uLSm8Hu56yt5s96pWARNzGDVN1KZPcVYCzXKT4J7Ev9X8100A3WFQvMZ";
const onToken = (token) => {
console.log(token);
alert("payment successful");
};
return (
<div>
<StripeCheckout
label="Pay now"
name="fashionmyway"
billingAddress
shippingAddress
image="/assest/Logo_images/images.png"
description={`Your total is $ ${price} `}
amount={priceForStripe}
panelLabel="Pay Now"
token={onToken}
stripeKey={publishableKey}
/>
</div>
);
};
export default storestripe_paymentcomponent;
