import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store'; 
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  //makes the Redux store available to the app component.
  <Provider store={store}> 
    <App />
  </Provider>
);


