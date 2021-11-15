import Radium, { StyleRoot } from 'radium';
import React, { useEffect, useState } from 'react';
import { pulse } from 'react-animations';
import { HashLink } from 'react-router-hash-link';

import logo from '../../assets/img/logo.svg';

const styles = {
    pulse: {
        animation: '1s infinite',
        animationName: Radium.keyframes(pulse, 'pulse')
    }
};

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const [navbarSolidBg, setNavbarSolidBg] = React.useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollPosition(position);
            position > 70 ? setNavbarSolidBg(true) : setNavbarSolidBg(false);
        };

        window.addEventListener('scroll', handleScroll, {
            passive: true
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);

    return (
        <nav
            className={`top-5 z-50 w-full flex flex-wrap items-center justify-between fixed px-2 py-3 overflow-visible 
				${navbarSolidBg ? ' solidBackgroundColor' : ''}`}
        >
            <div className="container mx-auto px-8 flex flex-wrap items-center uppercase bold justify-between">
                <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
                    <HashLink
                        id="brand"
                        className="text-white text-3xl flex-row	font-bold align-middle leading-relaxed inline-block mr-4 py-2
						            whitespace-nowrap uppercase"
                        to="/landing"
                    >
                        <span className="inline-block align-middle">
                            <img src={logo} alt="logo" style={{ width: '40px', height: 'auto' }} />
                        </span>
                        <span className="inline-block self-baseline align-middle ml-5">Kromatika</span>
                    </HashLink>

                    <button
                        className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent
		                    rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <i className={'text-white fas fa-bars'} />
                    </button>
                </div>

                <div
                    className={
                        'lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none' +
                        (navbarOpen ? ' block rounded shadow-lg' : ' hidden')
                    }
                >
                    <ul className="flex flex-col lg:flex-row list-none ml-auto">
                        <li className="flex items-center">
                            <HashLink
                                className="lg:text-white text-yellow px-3 py-4 lg:py-2 flex items-center text-xl
                                uppercase font-bold link-underline"
                                to="#header"
                            >
                                Home
                            </HashLink>
                        </li>
                        <li className="flex items-center">
                            <HashLink
                                className="lg:text-white text-yellow px-3 py-4 lg:py-2 flex items-center text-xl
                                uppercase font-bold link-underline"
                                to="#howItWorks"
                            >
                                How it works
                            </HashLink>
                        </li>
                        <li className="flex items-center">
                            <HashLink
                                className="lg:text-white text-yellow px-3 py-4 lg:py-2 flex items-center text-xl
                                uppercase font-bold link-underline"
                                to="#benefits"
                            >
                                KROM Token
                            </HashLink>
                        </li>
                    </ul>
                    <StyleRoot>
                        <a
                            href="https://app.kromatika.finance"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-900 text-xl font-bold uppercase px-6 py-4 rounded-sm shadow
                            hover:shadow-xl btn btnConnectWallet bg-yellow outline-none focus:outline-none
                            lg:mr-1 lg:mb-0 ml-3 mb-3"
                            type="button"
                            style={styles.pulse}
                        >
                            <i className="fas fa-wallet mr-1" /> Enter App (BETA)
                        </a>
                    </StyleRoot>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
