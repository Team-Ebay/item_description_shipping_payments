import React from 'react';

const DetailsContainer = () => {

    let details = 'New with tags: A brand-new, unused, and unworn item (including handmade items) in the original packaging (such as the original box or bag) and/or with the original tags attached.'

    let theme = 'Neon, Cowboy, Cowgirl, Novelty, Colorful, Biker, Bohemian, Gypsy, Hunting, Festival';

    let features = 'Set of 4 High Quality 100% Cotton Double Sided Paisley Bandanas';

    let season = 'Summer, Winter, Fall, Spring';

    return (
        <div className='detailsContainer'>

            <div className='label'>Condition: </div>
            <div className='details'> {details}
                <a href='#'> See all condition definitions</a></div>
            <div className='label2'> Brand: </div>
            <div className='details'> {'Jordefano'}</div>

            <div className='label'>Department: </div>
            <div className='details'> {'Men'}</div>
            <div className='label2'> Type: </div>
            <div className='details'> {'Bandana'}</div>

            <div className='label'>Style: </div>
            <div className='details'> {'Bandana'}</div>
            <div className='label2'> Material: </div>
            <div className='details'> {'Cotton'}</div>

            <div className='label'>Theme: </div>
            <div className='details'> {theme}</div>
            <div className='label2'> Fabric Type: </div>
            <div className='details'> {'Cotton'}</div>

            <div className='label'>Pattern: </div>
            <div className='details'> {'Paisley'}</div>
            <div className='label2'> Features: </div>
            <div className='details'> {features}</div>

            <div className='label'>Season: </div>
            <div className='details'> {season}</div>
            <div className='label2'> Size: </div>
            <div className='details'> {'One Size'}</div>

            <div className='label'>Handmade: </div>
            <div className='details'> {'No'}</div>
            <div className='label2'> Item Length: </div>
            <div className='details'> {'3.000'}</div>

            <div className='label'>Item Width: </div>
            <div className='details'> {'1.000'}</div>

        </div>
    )
}

export default DetailsContainer;