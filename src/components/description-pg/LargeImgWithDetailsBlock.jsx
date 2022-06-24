import React from "react";
import LargeBottomText from "./LargeBottomText";

const LargeImgWithDetailsBlock = () => {
    return (
        <div className="largeImgWithDetailsBlockContainer">

            <div class="main-image">
                <img src="https://d3d71ba2asa5oz.cloudfront.net/12031917/images/blackandred-paisley-topview-bandana.jpg" class="main-bandana-img" alt="large bandana img" />
            </div>

            <LargeBottomText />

        </div>
    )
}

export default LargeImgWithDetailsBlock;