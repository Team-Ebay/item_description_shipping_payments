import React from 'react';
import TopBlockDetails from './TopBlockDetails.jsx';
import ItemSpecificsBlock from './ItemSpecificsBlock';
import MiniNavbarBlock from './MiniNavbarBlock'
import LargeImgWithDetailsBlock from './LargeImgWithDetailsBlock'
import ChannelAdvisorLogo from './ChannelAdvisorLogo'


const Description = () => {
    return (
        <>
            <TopBlockDetails />
            <ItemSpecificsBlock />
            <MiniNavbarBlock />
            <LargeImgWithDetailsBlock />
            <ChannelAdvisorLogo />
        </>
    )
}

export default Description