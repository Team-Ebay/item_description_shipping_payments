import React from 'react'

function PaymentDetails() {
    return (
        <div className='payment-details-main-container'>
            <h3 className='paymentDetailsTitle'>Payment details</h3>

            <div className='paymentMethodsGreyDiv'>Payment methods</div>

            <div className='minilogos'>
                <span role='img' class='paypal'>Paypal</span>
                <span role='img' class='Gpay'>Gpay</span>
                <span role='img' class='Visa'>Visa</span>
                <span role='img' class='Mastercard'>Mastercard</span>
                <span role='img' class='Amex'>Amex</span>
                <span role='img' class='Discover'>Discover</span>
            </div>

            <div className='payPal-SpecialFinancingBlock'>

                <div className='paypalcreditLogo'>PayPal Credit</div>

                <div className='specialFinancingAvailableDiv'>
                    <h3 className='specialfiniancingtitle'>Special financing available</h3>
                    <p className='financingBold'>Select PayPal Credit at checkout to have the option to pay over time.</p>
                    <p>Qualifying purchases could enjoy No Interest if paid in full in 6 months on purchases of $99 or more. Other offers may also be available.</p>
                    <p>Interest will be charged to your account from the purchase date if the balance is not paid in full within 6 months. Minimum monthly payments are required. Subject to credit approval.<a className='seetermsLink' href='https://www.billmelater.com/cm/paypal/landers/18ebayppcTERMS.html'>See terms</a></p>
                    <p>The PayPal Credit account is issued by Synchrony Bank.</p>
                </div>
            </div>

        </div>
    )
}

export default PaymentDetails