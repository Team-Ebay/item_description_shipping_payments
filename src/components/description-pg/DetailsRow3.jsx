import React from 'react'

function DetailsRow3({ itemData }) {
    return (
        <>
            <div className='label'>Style: </div>
            <div className='details'> {itemData.style}</div>
            <div className='label2'> Material: </div>
            <div className='details'> {itemData.material}</div>
        </>
    )
}

export default DetailsRow3