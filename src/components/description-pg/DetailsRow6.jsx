import React from 'react'

function DetailsRow6() {

    let season = 'Summer, Winter, Fall, Spring';

    return (
        <>
            <div className='label'>Season: </div>
            <div className='details'> {season}</div>
            <div className='label2'> Size: </div>
            <div className='details'> {'One Size'}</div>
        </>
    )
}

export default DetailsRow6