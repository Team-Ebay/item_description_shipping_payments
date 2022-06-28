import React, { useState } from 'react'
import ShippingAndHandlingForm from './ShippingAndHandlingForm.jsx'
import ShippingTable from './ShippingTable.jsx';

const ShippingAndHandling = () => {

    const [shippingInfo, setShippingInfo] = useState({
        'quantity': 1,
        'country': 'United States',
        'zipcode': 76542
    })

    return (
        <div className='shipping-handling-container'>

            <h2 className='shippingHandlingTitle'>Shipping and handling</h2>

            <div className='itemLocationDiv'>
                <p>Item location: Los Angeles, California, United States</p>
                <p>Ships to: Worldwide</p>
                <p>Excludes: Barbados, French Guiana, French Polynesia, Guadeloupe, Libya, Martinique, New Caledonia, Reunion, Russian Federation, Ukraine, Venezuela</p>
            </div>

            <ShippingAndHandlingForm shippingInfo={shippingInfo} setShippingInfo={setShippingInfo} />
            <ShippingTable shippingInfo={shippingInfo} />

            <div className='handlingTimeDiv'>Handling time</div>
            <p className='handlingTimeP'>Will usually ship within 1 business day of receiving cleared payment.</p>

            <div className='taxesDiv'>Taxes</div>
            <p className='taxesP'>Taxes may be applicable at checkout. <a className="taxesLink" href='https://www.ebay.com/help/buying/paying-items/paying-tax-ebay-purchases.html?id=4771'>Learn more</a></p>

        </div>
    )
}

export default ShippingAndHandling;