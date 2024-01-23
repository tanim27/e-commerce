import React from 'react'
import { CartProvider } from 'react-use-cart'

import Navigation from './../../components/Header/Navigation'
import CartProducts from './../../components/CartProducts/CartProducts'

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