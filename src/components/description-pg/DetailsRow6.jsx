import React from 'react'

function DetailsRow6({ itemData }) {

    return (
        <>
            <div className='label'>Season: </div>
            <div className='details'> {itemData.season}</div>
            <div className='label2'> Size: </div>
            <div className='details'> {itemData.size}</div>
        </>
    )
}

export default DetailsRow6