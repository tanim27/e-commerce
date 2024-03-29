import React, { useState, createContext } from 'react'
import {AllProductsData} from './AllProductDetails'

export const CartContext = createContext(null)

const getDefaultCart = () => {
  let cart = {}
  for (let index=1; index < AllProductsData.length + 1; index++) {
    cart[index]=0
  }
  return cart
}

const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart())

  const addItem = (id, selectedColor, selectedSize) => {
  const productId = `${id}-${selectedColor}-${selectedSize}`
    if (cartItems[productId]) {
      setCartItems((prev) => ({ ...prev, [productId]: prev[productId] + 1 }))
    } else {
      setCartItems((prev) => ({ ...prev, [productId]: 1 }))
    }
  }
  

  const removeItem = (id, selectedColor, selectedSize) => {
    const productId = `${id}-${selectedColor}-${selectedSize}`
    
    if (cartItems[productId] > 1) {
      setCartItems((prev) => ({ ...prev, [productId]: prev[productId] - 1 }))
    } else {
      const { [productId]: removedItem, ...rest } = cartItems
      setCartItems(rest)
    }
  }
  

  const totalAmount = () => {
    let total = 0
    for (const item in cartItems) {
      if (cartItems[item]>0){
        let itemInfo = AllProductsData.find((product) => product.id === parseInt(item))
        total += itemInfo.price * cartItems[item]
      }
      
    }
    return total
  }

  const totalItems = () => {
    let itemtotal = 0
    for(const item in cartItems){
      if(cartItems[item]>0){
        itemtotal += cartItems[item]
      }
    }
    return itemtotal
  }

  const contextValue = {AllProductsData, cartItems, addItem, removeItem, totalAmount, totalItems}
  
  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContextProvider