import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './global.css'; // Tailwind for standalone mode

// When we run app2 standalone, we use this component,
// App component is federated so we can import it in the host
const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
