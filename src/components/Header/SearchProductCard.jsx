import React from 'react'
import { Link } from 'react-router-dom';

function SearchProductCard(props) {
  return (
    <div>
      <Link to={`/productlist/${props.id}`}>
        <div className="product-description">
          <img src={props.image} alt={props.title}/>
          <div className="detail">
            <h5>{props.title}</h5>
            <p>Price: ${props.price}</p>
            <p>Color: {props.color}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default SearchProductCard