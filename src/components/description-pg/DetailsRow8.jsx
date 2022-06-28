import React from 'react'

function DetailsRow8({ itemData }) {
    return (
        <>
            <div className='label'>Item Width: </div>
            <div className='details'> {itemData.item_width}</div>
        </>
    )
}

export default DetailsRow8