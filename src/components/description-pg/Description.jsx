import React from 'react';
import TopBlockDetails from './TopBlockDetails.jsx';
import ItemSpecificsBlock from './ItemSpecificsBlock';
import MiniNavbarBlock from './MiniNavbarBlock'
import LargeImgWithDetailsBlock from './LargeImgWithDetailsBlock'
import ChannelAdvisorLogo from './ChannelAdvisorLogo'


const Description = ({ itemData }) => {
    return (
        <>
            <TopBlockDetails />
            <ItemSpecificsBlock itemData={itemData} />
            <MiniNavbarBlock />
            <LargeImgWithDetailsBlock itemData={itemData} />
            <ChannelAdvisorLogo />
        </>
    )
}

export default Description