import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as Sentry from "@sentry/browser";

Sentry.init({ dsn: "https://f14578ba40e841fdb94be9424c5ef877@glitchtip.pleichty.com/1" });
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

