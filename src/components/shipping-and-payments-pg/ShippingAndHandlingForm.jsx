import React from 'react'

function ShippingAndHandlingForm() {

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <form className='ShippingAndHandlingForm' onSubmit={handleSubmit}>
            <div>
                <label>Quantity: </label>
                <input className='quantityBox' type='text' size='5' value='1' />
            </div>

            <div>
                <label className='countryDiv'>Change country: </label>
                <select className='countryDropDown'>
                    <option >United States</option>
                </select>
            </div>

            <div className='zipcodeDiv'>
                <label>ZIP Code:</label>
                <input className='zipcodeBox' type='text' value='76542'></input>
                <button className='shippingHandlingSubBtn' type='submit'>Get Rates</button>
            </div>


        </form>
    )
}

export default ShippingAndHandlingForm