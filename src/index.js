import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import stored  from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <Provider store={stored}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
   </Provider>,
  document.getElementById('root')
);


