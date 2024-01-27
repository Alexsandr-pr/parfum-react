import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import ScrollToTop from "../src/components/scroll-to-top/scroll-to-top"


import App from './pages/App';
import { MyContext } from './pages/myContext/MyContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>
    <MyContext>
        <ScrollToTop />
        <App />
    </MyContext>
      
    </BrowserRouter>
  </React.StrictMode>
);



