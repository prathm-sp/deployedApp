import React from 'react';
import './CSS/Product.css'

function Product({ id, title, price, rating, image }){
{/*in class using props to pass the data in function we use curly brace*/}
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
			<button>Add to Basket</button>
		</div>
	);
}

export default Product;