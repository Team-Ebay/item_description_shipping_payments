import React from 'react'

function DetailsRow4() {
    let theme = 'Neon, Cowboy, Cowgirl, Novelty, Colorful, Biker, Bohemian, Gypsy, Hunting, Festival';

    return (
        <>
            <div className='label'>Theme: </div>
            <div className='details'> {theme}</div>
            <div className='label2'> Fabric Type: </div>
            <div className='details'> {'Cotton'}</div>
        </>
    )
}

export default DetailsRow4