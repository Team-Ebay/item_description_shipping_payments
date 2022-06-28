import React from 'react'

function DetailsRow4({ itemData }) {

    return (
        <>
            <div className='label'>Theme: </div>
            <div className='details'> {itemData.theme}</div>
            <div className='label2'> Fabric Type: </div>
            <div className='details'> {itemData.fabric_type}</div>
        </>
    )
}

export default DetailsRow4