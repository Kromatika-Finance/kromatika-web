import Radium from 'radium';
import React, { useRef } from 'react';
import { bounceIn } from 'react-animations';
import { useMediaQuery } from 'react-responsive';

import FooterComponent from '../components/footer/FooterComponent';
import Benefits from './sections/Benefits';
import Brands from './sections/Brands';
import Header from './sections/Header';
import HowItWorks from './sections/HowItWorks';
import Learn from './sections/Learn';
import Roadmap from './sections/Roadmap';

const bounceInAnimation = {
    bounceIn: {
        animation: '1s infinite',
        animationName: Radium.keyframes(bounceIn, 'bounceIn')
    }
};

const useScroll = () => {
    const elRef = useRef(null);
    const executeScroll = () =>
        elRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

    return [executeScroll, elRef];
};

const Landing = () => {
    const [executeScroll, elRef] = useScroll();
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    });
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 500px)' });
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

    return (
        <>
            {isDesktopOrLaptop}
            {isBigScreen} {isTabletOrMobile} {isPortrait}
            {isRetina}
            <Header bounceInAnimation={bounceInAnimation} executeScroll={executeScroll} />
            <main>
                <HowItWorks elRef={elRef} />
                <Benefits />
                <Learn />
                <Roadmap />
                <Brands />
            </main>
            <FooterComponent />
        </>
    );
};

export default Landing;
