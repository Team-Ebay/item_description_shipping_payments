import React from 'react'

function DetailsRow1({ itemData }) {

    return (
        <>
            <div className='label'>Condition: </div>
            <div className='details'> {itemData.condition}
                <a href='https://www.ebay.com/pages/help/sell/contextual/condition_2.html'> See all condition definitions</a></div>
            <div className='label2'> Brand: </div>
            <div className='details'> {itemData.brand}</div>
        </>
    )
}

export default DetailsRow1