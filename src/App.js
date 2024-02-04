import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import HomePage from './Pages/HomePage/Home'
import ProductsCategoryPage from './Pages/ProductsCategoryPage/ProductsCategoryPage'
import SingleProductDetailsPage from './Pages/SingleProductDetailsPage/SingleProductDetailsPage'
import CartPage from "./Pages/CartPage/CartPage"
import CheckOutPage from './Pages/CheckOutPage/CheckOutPage'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/productlist' element={<ProductsCategoryPage/>}> </Route>
      <Route path='/productlist/:id' element={<SingleProductDetailsPage/>}></Route>
      <Route path='/cart' element={<CartPage/>}> </Route>
      <Route path='/billing' element={<CheckOutPage/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App