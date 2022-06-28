import React from "react";
import LargeBottomText from "./LargeBottomText";

const LargeImgWithDetailsBlock = ({ itemData }) => {
    return (
        <div className="largeImgWithDetailsBlockContainer">

            <div className="main-image">
                <img src="https://d3d71ba2asa5oz.cloudfront.net/12031917/images/blackandred-paisley-topview-bandana.jpg" className="main-bandana-img" alt="large bandana img" />
            </div>

            <LargeBottomText itemData={itemData} />

        </div>
    )
}

export default LargeImgWithDetailsBlock;