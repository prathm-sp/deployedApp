import React from 'react'
import './CSS/Cart.css'

export default function CheckoutProduct({ id, title, rating, price, image }) {
    function removeFromBasket(){
        
    }

    return (
        <div id="fullProduct">
            <img src={image} id="product-Image"/>
            <div className="details">
                <p className="title">{title}</p>
                <p>
                    <small>Rs:</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <p>⭐</p>
                            ))
                    }
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}
