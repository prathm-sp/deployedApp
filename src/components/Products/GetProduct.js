import React from 'react'
import './style.css'

export default function CheckoutProduct({ id, title, rating, price, image, point1, point2, point3, point4, point5 }) {
    return (
        <div>
            <div id='imageDiv'>
                <img id="idImage" src={image} />
            </div>
            <div id='idDetails'>
                <span>{title}</span>
                <div id='idRatings'>
                    {
                        Array(rating)
                            .fill()
                            .map(() => (
                                <span>⭐</span>
                            ))
                    }
                </div>
                <div id='idPrice'>
                    <span>Price: </span>
                    <span id='price'>₹{price}</span>
                </div>
                <div id='points'>
                    <ul>
                        <li>
                            {point1}
                        </li>
                        <li>
                            {point2}
                        </li>
                        <li>
                            {point3}
                        </li>
                        <li>
                            {point4}
                        </li>
                        <li>
                            {point5}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
