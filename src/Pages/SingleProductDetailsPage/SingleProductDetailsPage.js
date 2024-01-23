import React from 'react'
import { CartProvider } from 'react-use-cart'

import Navigation from './../../components/Header/Navigation'
import SingleProductDetails from './../../components/SingleProductDetails/SingleProductDetails'

function SingleProductDetailsPage() {
  return (
    <div>
      <CartProvider>
        <Navigation/>
        <SingleProductDetails/>
      </CartProvider>
    </div>
  )
}

export default SingleProductDetailsPage