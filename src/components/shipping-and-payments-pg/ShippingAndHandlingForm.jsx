import React, { useState } from 'react'
import CountryOptions from './CountryOptions'

function ShippingAndHandlingForm({ shippingInfo, setShippingInfo }) {

    const handleChange = (e) => {
        setShippingInfo((prevData) => {
            return {
                ...prevData,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <form className='ShippingAndHandlingForm' onSubmit={handleSubmit}>
            <div>
                <label>Quantity: </label>
                <input
                    onChange={handleChange}
                    className='quantityBox'
                    type='text' size='5'
                    value={shippingInfo.quantity}
                    name="quantity" />
            </div>

            <div>
                <label className='countryDiv'>Change country: </label>

                <select className='countryDropDown'
                    value={shippingInfo.country}
                    onChange={handleChange}
                    name="country">

                    <CountryOptions />
                </select>

            </div>

            <div className='zipcodeDiv'>
                <label>ZIP Code:</label>
                <input
                    className='zipcodeBox'
                    type='text'
                    value={shippingInfo.zipcode}
                    name='zipcode'
                    onChange={handleChange}
                ></input>
                <button className='shippingHandlingSubBtn' type='submit'>Get Rates</button>
            </div>


        </form>
    )
}

export default ShippingAndHandlingForm