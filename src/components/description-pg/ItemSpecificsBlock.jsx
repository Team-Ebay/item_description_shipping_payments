import React from 'react';
import DetailsContainer from './DetailsContainer.jsx'

const ItemSpecificsBlock = ({ itemData }) => {
    return (
        <div className='itemSpecificsContainer'>
            <div className='itemSpecificsTitle'> Item specifics</div>

            <DetailsContainer itemData={itemData} />
        </div>
    )
}

export default ItemSpecificsBlock;