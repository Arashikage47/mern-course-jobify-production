import React from 'react';
//import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import 'normalize.css';
import './index.css';
import App from './App';
import { AppProvider } from './context/appContext';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <AppProvider>
//       <App />
//     </AppProvider>
//   </React.StrictMode>
// );

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
