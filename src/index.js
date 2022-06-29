import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ItemDescriptionApp from './ItemDescriptionApp';

const root = ReactDOM.createRoot(document.getElementById('ItemDescriptionRoot'));
root.render(
  <React.StrictMode>
    <ItemDescriptionApp />
  </React.StrictMode>
);
