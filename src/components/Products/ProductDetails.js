import React from 'react'
import { useStateValue } from '../../StateProvider'
import GetProduct from './GetProduct'

export default function Details() {
    const [{ productDetails }] = useStateValue();

    return (
        <div>
            <img className="cart-img" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" />
            {productDetails.map(item => (
                <GetProduct
                    item={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    point1={item.point1}
                    point2={item.point2}
                    point3={item.point3}
                    point4={item.point4}
                    point5={item.point5}
                />
            ))}
        </div>
    )
}