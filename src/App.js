import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Navigation from './components/Header/Navigation'
import HomePage from './Pages/HomePage/Home'
import ProductsCategoryPage from './Pages/ProductsCategoryPage/ProductsCategoryPage'
import SingleProductDetailsPage from './Pages/SingleProductDetailsPage/SingleProductDetailsPage'
import CartPage from "./Pages/CartPage/CartPage"
import CheckOutPage from './Pages/CheckOutPage/CheckOutPage'
import CallToAction from './components/CallToAction/CallToAction'

function App() {
  return (
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/productlist' element={<ProductsCategoryPage/>}> </Route>
      <Route path='/productlist/:id' element={<SingleProductDetailsPage/>}></Route>
      <Route path='/cart' element={<CartPage/>}> </Route>
      <Route path='/billing' element={<CheckOutPage/>}></Route>
    </Routes>
    <CallToAction/>
    </BrowserRouter>
  )
}

export default App