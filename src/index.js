import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';

import { sto } from './store';
import { fetchListingThunk } from './features/listing-section/listingSlice';

sto.dispatch(fetchListingThunk())

// console.log(fetchListingThunk.fulfilled());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={sto}>
      <App />
    </Provider>
  </React.StrictMode>
);