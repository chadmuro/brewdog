import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import Search from './Search';
import Random from './Random';
import Home from './Home';
import Header from './Header';
import './App.css';

const App = () => {
    return (
			<div>
				<HashRouter basename="/">
					<Header />
					<Route path="/" exact component={Home} />
					<Route path="/search" exact component={Search} />
					<Route path="/random" exact component={Random} />
				</HashRouter>
			</div>
		);
};

export default App;