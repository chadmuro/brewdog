import React from 'react';
import Link from './Link';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <Link href="/brewdog/" className="header-item">
                Home
            </Link>
            <Link href="/brewdog/search" className="header-item">
                Search
            </Link>
            <Link href="/brewdog/random" className="header-item">
                Random
            </Link>
        </div>
    );
};

export default Header;