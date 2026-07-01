import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initGA, trackWebVital } from './config/analytics';

const scheduleAnalytics = () => {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(() => initGA());
  } else {
    window.setTimeout(initGA, 1);
  }
};

if (document.readyState === 'complete') {
  scheduleAnalytics();
} else {
  window.addEventListener('load', scheduleAnalytics);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals(trackWebVital);
