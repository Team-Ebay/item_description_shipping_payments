import React from 'react'

function ReturnPolicy() {
    return (
        <div className='return-policy-main-container'>
            <h3 className='returnPolicyTitle'>Return policy</h3>
            <div className='returnPolicyGreyDiv'>After receiving the item, contact the seller within</div>
            <p className='returnDaysP'>30 days</p>

            <p className='returnsP'>Refer to <a className="retunsLink" href='https://www.ebay.com/help/buying/returns-refunds/return-item-refund?id=4041#section3'>eBay Return policy</a> for more details. You are covered by the <a className="retunsLink" href='https://pages.ebay.com/help/policies/money-back-guarantee.html'>eBay Money Back Guarantee</a> if you receive an item taht is not as described in the listing.</p>

        </div>
    )
}

export default ReturnPolicy