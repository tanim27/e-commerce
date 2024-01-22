import React from 'react';
import { useCart } from 'react-use-cart';
import "./AllProducts.css";
import { Link } from 'react-router-dom';

function Card(props) {
  const {addItem} = useCart();

  return (
      <div className="box">
        <Link to={`/productlist/${props.id}`}><img src={props.image} alt={props.title}/></Link>
        <div className="hover-icons">
          <button><ion-icon name="heart-outline"></ion-icon></button>
          <Link to={`/productlist/${props.id}`}><button><ion-icon name="eye-outline"></ion-icon></button></Link>
          <button onClick={() => addItem(props.product)}><ion-icon name="bag-add-outline"></ion-icon></button>
        </div>
        <div className="product-title">
          <h5>{props.title}</h5>
          <p>${props.price}</p>
        </div>
      </div>
  )
}

export default Card