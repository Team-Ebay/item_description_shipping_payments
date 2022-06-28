import React from 'react'

function DetailsRow2({ itemData }) {

    return (
        <>
            <div className='label'>Department: </div>
            <div className='details'> {itemData.department}</div>
            <div className='label2'> Type: </div>
            <div className='details'> {itemData.item_type}</div>

        </>
    )
}

export default DetailsRow2