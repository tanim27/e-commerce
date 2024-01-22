import React from 'react'
import ProductsCategory from './../components/ProductsCategory/ProductsCategory'
import { CartProvider } from 'react-use-cart'
import Navigation from './../components/Header/Navigation';

function AllProductsPage() {
  return (
    <div>
    <CartProvider>
        <Navigation/>
        <ProductsCategory/>
    </CartProvider>
    </div>
  )
}

export default AllProductsPage