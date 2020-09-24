import React, { useState } from 'react'
import { useStateValue } from '../../StateProvider'
import './style.css'

export default function CheckoutProduct({ id, title, rating, price, image1, image2, image3, image4, image5, point1, point2, point3, point4, point5 }) {
    const [imageSrc, setimageSrc] = useState(image1)
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "Add-to-basket",
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                image1: image1
            }
        })
    };

    return (
        <div>
            <div id='imageDiv'>
                <img src={imageSrc} id="mainimg" onClick={() => { setimageSrc(image1) }} />
                <div id="sideimg">
                    <img id="i1" src={image1} onClick={() => { setimageSrc(image1) }} />
                    <img id="i2" src={image2} onClick={() => { setimageSrc(image2) }} />
                    <img id="i3" src={image3} onClick={() => { setimageSrc(image3) }} />
                    <img id="i4" src={image4} onClick={() => { setimageSrc(image4) }} />
                    <img id="i5" src={image5} onClick={() => { setimageSrc(image5) }} />
                </div>
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
                    <button id="detailbtn" onClick={addToBasket}>Add to Basket</button>
                </div>
            </div>
        </div>
    )
}
