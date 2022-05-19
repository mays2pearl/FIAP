import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import App from './layout/App';
import Register from './layout/Register';
import Login from './layout/Login';
import createGlobalStyle from './assets/styles/global';

const GlobalStyle = createGlobalStyle;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </BrowserRouter>
    <GlobalStyle/>
  </React.StrictMode>
);


