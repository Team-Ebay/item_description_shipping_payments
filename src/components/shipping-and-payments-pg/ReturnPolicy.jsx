import React from 'react'

function ReturnPolicy() {
    return (
        <div className='return-policy-main-container'>
            <h3 className='returnPolicyTitle'>Return policy</h3>
            <div className='returnPolicyGreyDiv'>
                <p>After receiving the item, contact the seller within</p>
                <p>Refund will be given as</p>
                <p>Returns shipping</p>
            </div>


            <div className='returnPolicyTable'>
                <p className='returnDaysP'>30 days</p>
                <p className='returnDaysP'>Money Back</p>
                <p className='returnDaysP'>Seller pays for return shipping</p>

            </div>

            <p className='returnsP'>Refer to <a className="retunsLink" href='https://www.ebay.com/help/buying/returns-refunds/return-item-refund?id=4041#section3'>eBay Return policy</a> for more details. You are covered by the <a className="retunsLink" href='https://pages.ebay.com/help/policies/money-back-guarantee.html'>eBay Money Back Guarantee</a> if you receive an item taht is not as described in the listing.</p>

        </div>
    )
}

export default ReturnPolicy