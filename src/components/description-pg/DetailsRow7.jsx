import React from 'react'

function DetailsRow7({ itemData }) {
    return (
        <>
            <div className='label'>Handmade: </div>
            <div className='details'> {itemData.handmade}</div>
            <div className='label2'> Item Length: </div>
            <div className='details'> {itemData.item_length}</div>
        </>
    )
}

export default DetailsRow7