import React from 'react';
import ReactDOM from 'react-dom/client';
import { GamesListContextProvider } from './context/gamesContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GamesListContextProvider>
      <App />
    </GamesListContextProvider>
  </React.StrictMode>
);
