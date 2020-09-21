import React from 'react';
import './CSS/Product.css'
import {useStateValue} from '../StateProvider'
import {Link} from 'react-router-dom';

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
			<Link to="/checkout">
                {/* <img className="amazon-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png" /> */}
				<button onClick={addToBasket}>Add to Basket</button>
			</Link>
		</div>
	);
}

export default Product;