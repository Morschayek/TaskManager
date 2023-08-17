import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store'; // Import your Redux store
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}> {/* Provide the Redux store */}
    <App />
  </Provider>
);

reportWebVitals();
