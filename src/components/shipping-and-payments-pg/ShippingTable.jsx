import React from 'react'

function ShippingTable() {
    return (
        <>

            <div className='shippingTable'>
                <div>Shipping and Handling</div>
                <div>Each additional item</div>
                <div>To</div>
                <div>Service</div>
                <div>Delivery*</div>
            </div>

            <div className='shipingTableInfo'>
                <div className='deliveryDate'>Free shiping</div>
                <div className='deliveryDate'>Free</div>
                <div className='deliveryDate'>United States</div>
                <div >Standard Shipping (USPS First Class<span className='trademark'>®</span>)</div>
                <div>Estimated between <span className='deliveryDate'>Fri, Jul 1 </span>and <span className='deliveryDate'>Wed, Jul 6</span> to <span className='deliveryDate'>76542</span></div>
            </div>

            <p className='deliveryEstimate'>*<a className="estimateLink" href='https://pages.ebay.com/help/buy/contextual/estimated-delivery.html'>Estimated delivery dates</a> include seller's handling time, origin ZIP Code, destination ZIP Code and time of acceptance and will depend on shipping service selected and receipt of cleared payment. Delivery times may vary, especially during peak periods.</p>
        </>
    )
}

export default ShippingTable