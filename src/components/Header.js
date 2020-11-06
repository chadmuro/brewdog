import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <Link to="/" className="header-item">
                Home
            </Link>
            <Link to="/search" className="header-item">
                Search
            </Link>
            <Link to="/random" className="header-item">
                Random
            </Link>
        </div>
    );
};

export default Header;