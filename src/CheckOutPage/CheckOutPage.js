import React from 'react'
import Navigation from './../components/Header/Navigation'
import CheckOut from './../components/CheckOut/CheckOut'
import Footer from './../components/Footer/Footer';
import { CartProvider } from 'react-use-cart';


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