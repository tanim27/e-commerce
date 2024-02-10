import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from './../../LocalStorage/CartContext'
import { AllProductsData } from './../../LocalStorage/AllProductDetails'
import './SingleProductDetails.css'

function SingleProductDetails() {
    const { addItem, removeItem, cartItems } = useContext(CartContext)
    const { id } = useParams()
    const [selectedColor, setSelectedColor] = useState('')
    const [selectedSize, setSelectedSize] = useState('')
    const cartItemID = `${id}-${selectedColor}-${selectedSize}`
    const [product, setProduct] = useState()
    const [itemAmount, setItemAmount] = useState(0)

    useEffect(() => {
        const singleProduct = AllProductsData.find(x => x.id === parseInt(id))
        setProduct(singleProduct)
        
        setItemAmount(cartItems[cartItemID] || "0")
    }, [id,cartItems[cartItemID]])

    if (!product) {
        return null
    }

    const handleColorClick = (color) => {
        setSelectedColor(color)
    }

    const handleSizeClick = (size) => {
        setSelectedSize(size)
    }

    const handleAddItem = () => {
        if (selectedColor && selectedSize) {
          addItem(id, selectedColor, selectedSize)
        } else {
          alert('Please select color and size before adding to cart.')
        }
      }
    
    const handleRemoveItem = () => {
        if (selectedColor && selectedSize){
            removeItem(id, selectedColor, selectedSize)
        }
    }
      
    return (
        <div>
            <div className="single-product">
                <div className="left">
                    <img src={`${window.location.origin}` + product.image} alt={product.title} />
                </div>
                
                <div className="right">
                    <h1>{product.title}</h1>
                    <div className="second-line">
                        <div className="leftside">
                        <h3>${product.price}<span> / </span></h3>
                        <div>
                            <del>${product.old_price}</del>
                            <p>25%</p>
                        </div>
                        </div>

                        <div className="rightside">
                            <p><ion-icon name="star-half-sharp"></ion-icon>4.5</p>
                            <p>3 reviews</p>
                        </div>
                    </div>
                    
                    <div className="third-line">
                        <p>Select Color: </p>
                        <ul>
                            {product.color.map((color, index) => (
                                <button key={index} onClick={() => handleColorClick(color)}>{color}</button>
                            ))}
                        </ul>
                    </div>

                    <div className="fourth-line">
                        <p>Select Size: </p>
                        <ul>
                            {product.size.map((size, index) => (
                                <button key={index} onClick={() => handleSizeClick(size)}>{size}</button>
                            ))}  
                        </ul>
                    </div>

                    <div className="fifth-line">
                        <p>{product.quantity} in stock</p>
                        <ion-icon name="checkmark-circle-outline"></ion-icon>
                    </div>

                    <div className="sixth-line">    
                        <div className="left">
                            <button onClick={handleRemoveItem}>-</button>
                            <p>{itemAmount}</p>
                            <button onClick={handleAddItem}>+</button>
                        </div>
                    
                        <div className="right" onClick={handleAddItem}>
                            <p>Add to cart</p>
                        </div>
                    </div>
                
                    <div className="last-line">
                        <p><ion-icon name="heart-outline"></ion-icon>Add to wishlist</p>
                        <p><ion-icon name="swap-horizontal-outline"></ion-icon>Compare</p>
                        <p><ion-icon name="share-social-outline"></ion-icon>Share</p>
                        <p><ion-icon name="help-circle-outline"></ion-icon>Ask question</p>
                    </div>

                    <div className="delivery-description">
                        <p><ion-icon name="gift"></ion-icon>Free shipping and return: <span>Order over 100$</span></p>
                        <p><ion-icon name="shield-checkmark-outline"></ion-icon>Estimate delivery: <span>2-7 days</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProductDetails
