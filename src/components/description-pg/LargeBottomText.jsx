import React from 'react'
import LargeBottomGreyTextBox from './LargeBottomGreyTextBox'

function LargeBottomText({ itemData }) {
    return (
        <div className='largeBottomTxtContainer'>
            <h1 className='largeBottomTxtTitle'>{itemData.item_name}</h1>
            <h2 className='largeBottomTxtPrice'>{itemData.price}</h2>
            <h3 className='largeBottomTxtTitleSmall'>4 Pack X Large Paisley 100% Premium Cotton Printed Bandana - 27 x 27 inches</h3>
            <h3 className='largeBottomTxtProductDetailsTitle'>Product Details</h3>

            <LargeBottomGreyTextBox />
        </div>
    )
}

export default LargeBottomText