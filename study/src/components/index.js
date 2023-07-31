import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReactComponent from './react'; // 파일명과 컴포넌트 이름을 소문자로 변경합니다.
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReactComponent /> {/* 수정된 컴포넌트 이름으로 사용합니다. */}
  </React.StrictMode>
);
