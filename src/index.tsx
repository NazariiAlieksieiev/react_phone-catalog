import { createRoot } from 'react-dom/client';
import { App } from './App';
import './index.scss';
import React from 'react';
import { HashRouter } from 'react-router-dom';

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
);
