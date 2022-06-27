import React from 'react';

import ShippingAndHandling from './ShippingAndHandling.jsx'
import ReturnPolicy from './ReturnPolicy.jsx'
import PaymentDetails from './PaymentDetails.jsx'

const ShippingPayments = () => {
    return (
        <div className='shippingPaymentsMainContainer'>
            <p>Seller assumes all responsibility for this listing.</p>

            <ShippingAndHandling />
            <ReturnPolicy />
            {/* <PaymentDetails /> */}
        </div>
    )
}

export default ShippingPayments;