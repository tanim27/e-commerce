import React from 'react'
import { CartProvider } from 'react-use-cart'

import Navigation from './../../components/Header/Navigation'
import ProductsCategory from './../../components/ProductsCategory/ProductsCategory'

function ProductsCategoryPage() {
  return (
    <div>
      <CartProvider>
        <Navigation/>
        <ProductsCategory/>
      </CartProvider>
    </div>
  )
}

export default ProductsCategoryPage