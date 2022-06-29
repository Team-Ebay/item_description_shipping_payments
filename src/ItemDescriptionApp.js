import { useState, useEffect } from 'react';
import Description from './components/description-pg/Description.jsx'
import ShippingPayments from './components/shipping-and-payments-pg/ShippingPayments.jsx'

function App() {

  const [itemData, setItemData] = useState('')
  const [activeTab, setActiveTab] = useState(1);

  const toggleTab = (tab) => {
    setActiveTab(tab)
  }

  useEffect(() => {
    fetchItemData()
  }, [])

  const fetchItemData = () => {
    fetch('http://localhost:8000/api/itemdetails')
      .then(res => res.json())
      .then(data => setItemData(data[0]))
      .catch(error => console.log(error))
  }

  return (
    <div className="App-container">


      <div className="tabs-container">
        <div
          className={activeTab === 1 ? 'tab active-tab' : 'tab'}
          onClick={() => toggleTab(1)}>Description
        </div>

        <div
          className={activeTab === 2 ? 'tab active-tab' : 'tab'}
          onClick={() => toggleTab(2)}>Shipping and payments
        </div>
        <a href='https://ocswf.ebay.com/rti/compose?items=223937474326&seller=bandanaswholesale&rt=nc&_trksid=p2047675.l2566' className="report-item-link">Report item</a>
      </div>

      <div className="content-container">

        <div className={activeTab === 1 ? 'content active-content' : 'content'}>
          <Description itemData={itemData} />
        </div>

        <div className={activeTab === 2 ? 'content active-content' : 'content'}>
          <ShippingPayments />
        </div>

      </div>

    </div>
  );
}

export default App;
