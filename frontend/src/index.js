import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HelmetProvider } from 'react-helmet-async';

import App from './App';
import { StoreProvidor } from './context/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvidor>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </StoreProvidor>
  </React.StrictMode>
);
