import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import Login from './components/Form/login'
import Register from './components/Form/Register'
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
	return(
		<Router>
			<div className='app'>
				<Switch>
					<Route path='/checkout'>
						<Header />
						<Cart />
					</Route>
					<Route path='/home'>
						<h1>Home</h1>
					</Route>
					<Route path='/login'>
						<Login />
					</Route>
					<Route path='/Register'>
						<Register />
					</Route>
					<Route path='/'>
						<Header />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
