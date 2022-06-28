import React from 'react'

function DetailsRow5({ itemData }) {

    return (
        <>
            <div className='label'>Pattern: </div>
            <div className='details'> {itemData.pattern}</div>
            <div className='label2'> Features: </div>
            <div className='details'> {itemData.features}</div>
        </>
    )
}

export default DetailsRow5