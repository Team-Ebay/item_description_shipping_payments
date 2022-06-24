import React from 'react';

function MiniNavbarInnerContent() {
    return (
        <div className='navbarMainGrid'>

            <div className='priceMeNow'><img src="https://d3d71ba2asa5oz.cloudfront.net/12031917/images/unnamed%20(1).jpg" alt="Price Me Now" /></div>

            <ul className='navbarLinksUL'>

                <div className='navbarDiv'>
                    <a className='navbarLink' href="https://www.ebay.com/str/pricemenow">Our eBay Store</a>
                </div>

                <div className='navbarDiv'>
                    <a className='navbarLink' href="https://www.ebay.com/str/pricemenow">About Us</a>
                </div>

                <div className='navbarDiv'><a className='navbarLink' href="https://www.ebay.com/str/pricemenow">Contact Us</a>
                </div>

                <div className='navbarDiv'>
                    <a className='navbarLink' href="#">Add to Favorite Sellers</a>
                </div>

            </ul>

        </div>
    )
}

export default MiniNavbarInnerContent