import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import ScrollToTop from "../src/components/scroll-to-top/scroll-to-top"
import {store} from "./reducers"
import { Provider } from 'react-redux';
import App from './pages/App';
import { MyContext } from './pages/myContext/MyContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
      <Provider store={store}>
        <MyContext> 
            <ScrollToTop />
            <App />
        </MyContext>
      </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );


