import React from 'react'
import Navigation from '../components/Header/Navigation'
import CartProducts from '../components/CartProducts/CartProducts';
import { CartProvider } from 'react-use-cart';

function CartPage() {
  return (
    <div>
      <CartProvider>
        <Navigation/>
        <CartProducts/>
      </CartProvider>
    </div>
  )
}

export default CartPage