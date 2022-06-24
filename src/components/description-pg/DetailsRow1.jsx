import React from 'react'

function DetailsRow1() {
    let details = 'New with tags: A brand-new, unused, and unworn item (including handmade items) in the original packaging (such as the original box or bag) and/or with the original tags attached.'

    return (
        <>
            <div className='label'>Condition: </div>
            <div className='details'> {details}
                <a href='#'> See all condition definitions</a></div>
            <div className='label2'> Brand: </div>
            <div className='details'> {'Jordefano'}</div>
        </>
    )
}

export default DetailsRow1