import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store';
import { SearchContextProvider } from './context/searchContext';

// import { AuthContextProvider } from './context/AuthContext';
// import { SearchContextProvider } from './context/searchContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <AuthContextProvider> */}
      <SearchContextProvider>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </SearchContextProvider>
      {/* </AuthContextProvider> */}
    </Provider>
  </React.StrictMode>
);
