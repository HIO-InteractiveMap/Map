import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const DEVMODE = false;

if (DEVMODE) {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  const container = document.getElementById('root');
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
}
