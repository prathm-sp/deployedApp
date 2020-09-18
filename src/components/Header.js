import React from "react";
import "./CSS/Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";


function Header() {
		return (
			<nav className="header">
				<Link to='/'>
					<img 
					  className="header_logo" 
					  src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
					  alt="" 
					 />
				</Link>
				<div className='header_Search'>
					<input type='text' className='header_searchInput' />
					<SearchIcon className="header_searchIcon"/>
				</div>
				<div className="header_nav">
					<Link to = "login" className="header_link">
						<div className='header_option'>
							<span className="header_optionLineOne">Hello Sign up</span>
							<span className="header_optionLineTwo">Account</span>
						</div>
					</Link>

					
					<Link to = "login" className="header_link">
						<div className='header_option'>
							<span className="header_optionLineOne">Return</span>
							<span className="header_optionLineTwo">& Order</span>
						</div>

					</Link>


					<Link to = "login" className="header_link">
						<div className='header_option'>
							<span className="header_optionLineOne">Try</span>
							<span className="header_optionLineTwo">Prime</span>
						</div>
					</Link>


					<Link to = "checkout" className="header_link">
						<div className="header_optionBasket">
							<ShoppingBasketIcon />
							<span className="header_optionLineTwo header_basketCount">0</span>
						</div>
					</Link>


				</div>
			</nav>
	);
}
export default Header;