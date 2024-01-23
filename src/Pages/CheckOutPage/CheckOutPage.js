import React from 'react'
import { CartProvider } from 'react-use-cart'

import Navigation from './../../components/Header/Navigation'
import CheckOut from './../../components/CheckOut/CheckOut'
import Footer from './../../components/Footer/Footer'

function CheckOutPage() {
  return (
    <div>
      <CartProvider>
        <Navigation/>
        <CheckOut/>
        <Footer/>
      </CartProvider>
    </div>
  )
}

export default CheckOutPage