import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './app/router';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { MainLayout } from './app/layout/MainLayout';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <MainLayout>
          <AppRouter />
        </MainLayout>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
