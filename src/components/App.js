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
            <Route path="/">
                <Home />
            </Route>
            <Route path="/search">
                <Search />
            </Route>
            <Route path="/random">
                <Random />
            </Route>
        </div>
    );
};

export default App;