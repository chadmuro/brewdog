import React from 'react';
import Search from './Search';
import Random from './Random';
import Route from './Route';
import Home from './Home';
import Header from './Header';
import './App.css';

const App = () => {
    return (
        <div>
            <Header />
            <Route path="/brewdog/">
                <Home />
            </Route>
            <Route path="/brewdog/search">
                <Search />
            </Route>
            <Route path="/brewdog/random">
                <Random />
            </Route>
        </div>
    );
};

export default App;