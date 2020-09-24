import React from 'react'
import { useStateValue } from '../../StateProvider'
import './Cart.css'
import CheckoutProduct from './CheckoutProduct'

export default function Cart() {
    const [{ basket }] = useStateValue();

     return (
        <div>
            <img className="cart-img" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"></img>
            {basket?.length === 0?(
                <div>
                <h2>Your shopping basket is empty</h2>
                </div>
            ):(
                <div className="not-Empty">
                    <h2>Your shopping basket</h2>

                    {basket.map(item => (
                        <CheckoutProduct 
                        item={item.id}
                        title={item.title}
                        image1={item.image1}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}
