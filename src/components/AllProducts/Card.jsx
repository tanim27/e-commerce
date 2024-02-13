import React from 'react'
import { Link } from 'react-router-dom'
import './AllProducts.css'

function Card(props) {

  return (
      <div className="box">
        <Link to={`/productlist/${props.id}`}><img src={props.image} alt={props.title}/></Link>
        <div className="hover-icons">
          <button><ion-icon name="heart-outline"></ion-icon></button>
          <Link to={`/productlist/${props.id}`}><button><ion-icon name="eye-outline"></ion-icon></button></Link>
          <button><ion-icon name="bag-add-outline"></ion-icon></button>
        </div>
        <div className="product-title">
          <h5>{props.title}</h5>
          <div className="price">
            <del>${props.old_price}</del>
            <p>${props.price}</p>
          </div>
        </div>
      </div>
  )
}

export default Card