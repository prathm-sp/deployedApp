import React from 'react'
import './Cart.css'

export default function CheckoutProduct({ id, title, rating, price, image1 }) {
    function removeFromBasket() {

    }

    return (
        <div id="fullProduct">
            <img src={image1} id="product-Image" />
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
                <div className="flexButton">
                    <button onClick={removeFromBasket}>Remove from basket</button>
                    <button id="buy">Buy now</button>
                </div>
            </div>
        </div>
    )
}
