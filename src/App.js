import { useState } from 'react';

function App() {

  const [activeTab, setActiveTab] = useState(1);

  const toggleTab = (tab) => {
    setActiveTab(tab)
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
        <a href='#' className="report-item-link">Report item</a>
      </div>

      <div className="content-container">

        <div className={activeTab === 1 ? 'content active-content' : 'content'}>
          <p>DESCRIPTION INFORMATION </p>
        </div>

        <div className={activeTab === 2 ? 'content active-content' : 'content'}>
          <p>SHIPPING AND PAYMENT INFO</p>
        </div>

      </div>

    </div>
  );
}

export default App;
