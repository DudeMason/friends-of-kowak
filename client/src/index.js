import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import PageProvider from './providers/PageProvider';

ReactDOM.render(

  <PageProvider>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </PageProvider>,

  document.getElementById('root')
);
