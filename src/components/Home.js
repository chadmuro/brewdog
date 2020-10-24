import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="home-show">
                <h1 className="home-title">
                    BrewDog
                </h1>
                <p className="home-description">
                    Search your favorite BrewDog beer or fetch a random beer.
                </p>
            </div>
        </div>
    );
}

export default Home;