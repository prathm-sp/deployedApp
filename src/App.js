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
					<Route exact path='/checkout'>
						<Header />
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
					<Route exact path='/'>
						<Header />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
