import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {useCart} from "react-use-cart"
import AllProductDetails from '../ProductsCategory/AllProductDetails'
import "./SingleProductDetails.css"

function SingleProductDetails(props) {
    const [product,setProduct] = useState();
    const { id } = useParams()
    const colors = ["Blue", "Green", "Brown", "Pink"];
    const sizes = ["s", "m", "l", "xl", "xxl"];
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedSize, setSelectedSize] = useState("")
    const {items,addItem,updateItemQuantity} = useCart();
    
    
    useEffect(()=> {
        const product = AllProductDetails.find(x => x.id === id)

        setProduct(product)
    },[id])

    if(product===undefined){
        return null
    }

  return (
    <div>
        <div className="single-product">
        
          <div className="left">
            <img src={product.image} alt={product.title} />
          </div>
          
          <div className="right">
            <h1>{product.title}</h1>

            <div className="second-line">
              <div className="leftside">
                <h3>${product.price}<span> / </span></h3>
                <div>
                  <del>$23</del>
                  <p>25%</p>
                </div>
              </div>

              <div className="rightside">
                <p><ion-icon name="star-half-sharp"></ion-icon>4.5</p>
                <p>3 reviews</p>
              </div>
            </div>

            <div className="third-line">
              <p>Colors: {selectedColor}</p>
              <ul>
                {colors.map((color) => (
                <button key={color} onClick={(e) => setSelectedColor(color)}>
                  {color}
                </button>
                ))}
              </ul>
            </div>

            <div className="fourth-line">
              <p>Size: {selectedSize}</p>
              <ul>
                {sizes.map((size)=>(
                <button key={size} onClick={(e) => setSelectedSize(size)}>{size}</button>
                ))}
              </ul>
            </div>

            <div className="fifth-line">
              <p>{product.quantity} in stock</p>
              <ion-icon name="checkmark-circle-outline"></ion-icon>
            </div>

            <div className="sixth-line">
            
                <div className="left">
                <button onClick={() => updateItemQuantity(product.id, product.quantity - 1)}>-</button>
                <p>{product.quantity}</p>
                <button onClick={() => updateItemQuantity(product.id, product.quantity + 1)}>+</button>
                </div>
              
              
              <div className="right" onClick={()=> addItem(product)}>
                <p>Add to cart</p>
              </div>
            </div>

            <div className="seventh-line">
              <button>Buy now</button>
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