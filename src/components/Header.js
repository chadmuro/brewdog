import React from 'react';
import Link from './Link';

const Header = () => {
    return (
        <div className="header">
            <Link href="/" className="header-item">
                Search
            </Link>
            <Link href="/random" className="header-item">
                Random
            </Link>
        </div>
    );
};

export default Header;