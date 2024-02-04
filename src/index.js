import React from 'react'
import ReactDOM from 'react-dom/client'
import CartContextProvider from './LocalStorage/CartContext'

import App from './App'
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </React.StrictMode>
)
