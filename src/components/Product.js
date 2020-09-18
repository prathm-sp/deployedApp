import React from 'react';
import './CSS/Product.css'
import {useStateValue} from '../StateProvider'

function Product({ id, title, price, rating, image }){
{/*in class using props to pass the data in function we use curly brace*/}

const [{basket} , dispatch] = useStateValue();

const addToBasket = () => {
	dispatch({
		type: "Add-to-basket",
		item:{
			id:id,
			title:title,
			price:price,
			rating:rating,
			image:image
		}
	})
};
	return(
		<div className="product">
			<div className="product_info">
					<p>{title}</p>
				<p className="product_price">
					<small>Rs: </small>
					<strong>{price}/-</strong>
				</p>
				<div className="product_rating">
					{
						Array(rating)
						.fill()
						.map((_) =>( 
							<p>⭐</p>
						))
					}
				</div>
			</div>
			<img src={image} alt="" /><br />
			<button onClick={addToBasket}>Add to Basket</button>
		</div>
	);
}

export default Product;