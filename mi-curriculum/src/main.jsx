import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Importamos los estilos generales de nuestra aplicación.
import './App.css';

// Buscamos el elemento HTML con el id root
// y le indicamos a React que muestre nuestro componente App.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
