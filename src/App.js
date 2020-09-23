import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/footer';
import Cart from './components/Checkout/Cart';
import Login from './components/Form/login'
import Register from './components/Form/Register'
import { useStateValue } from './StateProvider'
import Productdetails from './components/Products/ProductDetails'
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {

	const [{ productDetails }, dispatch] = useStateValue();


	return (
		<BrowserRouter>
			<Header />
			<div className='app'>
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/checkout'>
						<Cart />
					</Route>
					<Route exact path='/home'>
						<h1>Home</h1>
					</Route>
					<Route exact path='/login'>
						<Login />
					</Route>
					<Route exact path='/Register'>
						<Register />
					</Route>
					<Route path={'ds/:', productDetails.id} exact>
						<Productdetails />
					</Route>
				</Switch>
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default App;
