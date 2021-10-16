import React from 'react';

import Hero from '../../components/header/Hero';
import Navbar from '../../components/header/NavBar';

const Header = ({ onButtonClick, bounceInAnimation, executeScroll }) => {
    return (
        <header id="header">
            <Navbar />
            <Hero onButtonClick={onButtonClick} bounceInAnimation={bounceInAnimation} executeScroll={executeScroll} />
        </header>
    );
};

export default Header;
