import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    //stripe requires the price to be in cents?! haha
    const priceForSrtipe = price * 100;
    const publishableKey = 'pk_test_51HzPX0It3nMUMDiwo0MSWGZJy22EgegM7wiuIUDr5UTvalZgFMlkb5uP1IcIPl6C9VJ6UkMJYkB1jtSQ3fXmDMyJ00jU72f5E9'

    //We don't handle the payment, stripe does that. We will just log the object that gets returned after we click proceed with payment.
    //The object console logged is a token object that stripe needs to create a charge. 
    //The object gets created no matter what, even if we don't include token={onToken} on our <StripeCheckoutButton />
    //We only did this to see what the object looks like, its format. And also to alert the user of a successful payment.
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CROWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForSrtipe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;