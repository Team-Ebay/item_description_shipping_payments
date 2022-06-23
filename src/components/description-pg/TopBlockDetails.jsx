import React from 'react';

const TopBlockDetails = () => {

    let itemNumber = 223937474326;
    let updatedOnDate = 'Jun 22, 2022 16:43:24 PDT'
    return (
        <div className='topBlockDetailsContainer'>

            <div className='topBlockItemNumDiv'>eBay Item number: <span className='topBlockItemNumber'>{itemNumber}</span></div>

            <p>Seller assumes all responsibility for this listing.</p>

            <div>Last updated on {updatedOnDate} <a href='#'> View all revisions</a></div>

        </div>
    )
}

export default TopBlockDetails;