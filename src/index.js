import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import stored from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';

ReactDOM.render(
  <Provider store={stored}>
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </AuthProvider>
  </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
);


