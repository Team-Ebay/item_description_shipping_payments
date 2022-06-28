import React from 'react';
import DetailsRow1 from './DetailsRow1'
import DetailsRow2 from './DetailsRow2'
import DetailsRow3 from './DetailsRow3'
import DetailsRow4 from './DetailsRow4'
import DetailsRow5 from './DetailsRow5'
import DetailsRow6 from './DetailsRow6'
import DetailsRow7 from './DetailsRow7'
import DetailsRow8 from './DetailsRow8'

const DetailsContainer = ({ itemData }) => {

    return (
        <div className='detailsContainer'>

            <DetailsRow1 itemData={itemData} />

            <DetailsRow2 itemData={itemData} />

            <DetailsRow3 itemData={itemData} />

            <DetailsRow4 itemData={itemData} />

            <DetailsRow5 itemData={itemData} />

            <DetailsRow6 itemData={itemData} />

            <DetailsRow7 itemData={itemData} />

            <DetailsRow8 itemData={itemData} />

        </div>
    )
}

export default DetailsContainer;