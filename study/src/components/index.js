import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // 이 부분이 App 컴포넌트를 한 번만 import하도록 해야 합니다.
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
