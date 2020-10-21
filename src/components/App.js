import React from 'react';
import Search from './Search';
import Random from './Random';
import Route from './Route';
import Header from './Header';
import './App.css';

const App = () => {
    return (
        <div>
            <Header />
            <Route path="/">
                <Search />
            </Route>
            <Route path="/random">
                <Random />
            </Route>
        </div>
    );
};

export default App;