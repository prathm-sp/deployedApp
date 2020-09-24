import React from 'react';
import './CSS/Product.css'
import { useStateValue } from '../StateProvider'
import { Link } from 'react-router-dom';

function Product({ id, title, price, rating, image1, image2, image3, image4, image5, point1, point2, point3, point4, point5 }) {
	{/*in class using props to pass the data in function we use curly brace*/ }

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
	const productDetails = () => {
		dispatch({
			type: "Product-Details",
			item: {
				id: id,
				title: title,
				price: price,
				rating: rating,
				image1: image1,
				image2: image2,
				image3: image3,
				image4: image4,
				image5: image5,
				point1: point1,
				point2: point2,
				point3: point3,
				point4: point4,
				point5: point5,
			}
		})
	};
	return (
		<div className="product">
			<Link to={'/:', id}>
				<div className="product_info" onClick={productDetails}>
					<p>{title}</p>
					<p className="product_price">
						<small>Rs: </small>
						<strong>{price}/-</strong>
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
				</div>
			</Link>
			<img src={image1} alt="" /><br />
			<button onClick={addToBasket}>Add to Basket</button>
		</div>
	);
}

export default Product;