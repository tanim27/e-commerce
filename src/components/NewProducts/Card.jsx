import React from 'react';
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';
import "./NewProducts.css";

function Card(slide) {
  const {addItem} = useCart();

  return (
    <div className="box">
    <Link to={`/productlist/${slide.id}`}><img src={slide.image} alt={slide.title}/></Link>
    <img src={slide.hoverimage} className="hover-img"/>
    <div className="hover-icons">
      <button><ion-icon name="heart-outline"></ion-icon></button>
      <Link to={`/productlist/${slide.id}`}><button><ion-icon name="eye-outline"></ion-icon></button></Link>
      <button onClick={() => addItem(slide.product)}><ion-icon name="bag-add-outline"></ion-icon></button>
    </div>
    <div className="product-title">
        <h5>{slide.title}</h5>
        <p>${slide.price}</p>
    </div>
    </div>
  )
}

export default Card