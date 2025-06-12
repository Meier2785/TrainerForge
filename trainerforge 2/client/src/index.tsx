import React from 'react';
import ReactDOM from 'react-dom/client';
import AskGPT from './pages/AskGPT';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <AskGPT />
  </React.StrictMode>
);