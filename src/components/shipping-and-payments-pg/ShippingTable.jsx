import React from 'react'

function ShippingTable({ shippingInfo }) {

    let earlyDeliveryDate = new Date()
    earlyDeliveryDate.setDate(earlyDeliveryDate.getDate() + 4)

    let lateDeliveryDate = new Date()
    lateDeliveryDate.setDate(lateDeliveryDate.getDate() + 9)

    const setWeekDay = (day) => {
        switch (day) {
            case 0:
                return 'Sun'
            case 1:
                return 'Mon'
            case 2:
                return 'Tue'
            case 3:
                return 'Wed'
            case 4:
                return 'Thu'
            case 5:
                return 'Fri'
            case 6:
                return 'Sat'
            default:
                return
        }
    }

    const setMonth = (month) => {
        switch (month) {
            case 0:
                return 'Jan'
            case 1:
                return 'Feb'
            case 2:
                return 'Mar'
            case 3:
                return 'Apr'
            case 4:
                return 'May'
            case 5:
                return 'Jun'
            case 6:
                return 'Jul'
            case 7:
                return 'Aug'
            case 8:
                return 'Sep'
            case 9:
                return 'Oct'
            case 10:
                return 'Nov'
            case 11:
                return 'Dec'
            default:
                return
        }
    }


    let earlyWeekDay = setWeekDay(earlyDeliveryDate.getDay())
    let lateWeekDay = setWeekDay(lateDeliveryDate.getDay())

    let earlyMonth = setMonth(earlyDeliveryDate.getMonth())
    let lateMonth = setMonth(lateDeliveryDate.getMonth())


    let earlyDate = earlyDeliveryDate.getDate()
    let lateDate = lateDeliveryDate.getDate()


    return (
        <>

            <div className='shippingTable'>
                <div>Shipping and Handling</div>
                <div>Each additional item</div>
                <div>To</div>
                <div>Service</div>
                <div>Delivery*</div>
            </div>

            <div className='shipingTableInfo'>
                <div className='deliveryDate'>Free shiping</div>
                <div className='deliveryDate'>Free</div>
                <div className='deliveryDate'>{shippingInfo.country}</div>
                <div >Standard Shipping (USPS First Class<span className='trademark'>®</span>)</div>
                <div>Estimated between <span className='deliveryDate'>{`${earlyWeekDay}, ${earlyMonth} ${earlyDate} `}</span>and <span className='deliveryDate'>{`${lateWeekDay}, ${lateMonth} ${lateDate} `}</span> to <span className='deliveryDate'>{shippingInfo.zipcode}</span></div>
            </div>

            <p className='deliveryEstimate'>*<a className="estimateLink" href='https://pages.ebay.com/help/buy/contextual/estimated-delivery.html'>Estimated delivery dates</a> include seller's handling time, origin ZIP Code, destination ZIP Code and time of acceptance and will depend on shipping service selected and receipt of cleared payment. Delivery times may vary, especially during peak periods.</p>
        </>
    )
}

export default ShippingTable