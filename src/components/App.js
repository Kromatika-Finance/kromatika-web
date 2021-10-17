import './App.css';

import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/img/logo.svg';
import metamask from '../assets/img/metamask.svg';

const App = () => {
    return (
        <>
            <div id="app">
                {/* Responsive Header */}
                <div className="ui grid container">
                    <div className="four column row">
                        <div className="left floated column">
                            <img
                                className="inline-block "
                                src={logo}
                                alt="metamask logo"
                                style={{ width: '40px', height: 'auto' }}
                            />
                            <span style={{ color: '#fff', marginLeft: '1rem' }}>Kromatika</span>
                        </div>
                        <div className="twelve wide right floated column" style={{ color: '#fff', textAlign: 'right' }}>
                            <span className="six wide column">
                                <i
                                    className="fas fa-receipt fa-2x"
                                    style={{
                                        verticalAlign: 'middle',
                                        margin: '0 1rem',
                                        color: '#12B2FF'
                                    }}
                                />
                                <i
                                    className="fas fa-sun fa-2x"
                                    style={{ verticalAlign: 'middle', margin: '0 1rem', color: '#12B2FF' }}
                                />
                            </span>
                            <span className="ten wide column">
                                <img
                                    className="inline-block"
                                    src={metamask}
                                    alt="metamask logo"
                                    style={{ width: '40px', height: 'auto', marginLeft: '.5rem' }}
                                />
                                <div
                                    className="ui inline-block form"
                                    style={{ verticalAlign: 'middle', backgroundColor: 'transparent' }}
                                >
                                    <div
                                        style={{ width: '25rem', borderRadius: '3px !important' }}
                                        className="ui rounded action input"
                                    >
                                        <input
                                            disabled
                                            type="text"
                                            value="Ethereum address"
                                            style={{ marginLeft: '0', borderRadius: '100px !important' }}
                                        />
                                        <button
                                            className="ui right labeled icon button"
                                            style={{ marginLeft: '-78px', backgroundColor: '#12B2FF' }}
                                        >
                                            <i className="copy icon" />
                                            Copy
                                        </button>
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
                {/* Responsive Menu */}
                <nav className="ui raised segment" style={{ marginTop: '20px', backgroundColor: '#21272D' }}>
                    <div className="ui container">
                        <button className="ui button" style={{ backgroundColor: '#39434E', color: '#12B2FF' }}>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <Link to="/app/dashboard">Dashboard</Link>
                        </button>
                        <button className="ui button" style={{ backgroundColor: '#39434E', color: '#12B2FF' }}>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <Link to="/app/governance">Governance</Link>
                        </button>
                    </div>
                </nav>
                ; ; ;{/*	Accordion */}
                <div className="ui container">
                    <div className="ui styled fluid accordion" style={{ backgroundColor: '#21272D', color: '#FFFFFF' }}>
                        <div className="active title">
                            <div className="ui right aligned grid">
                                <div className="sixteen wide column">
                                    <i className="fas fa-expand-alt" style={{ color: '#12B2FF' }} />
                                </div>
                            </div>
                            <h3 className="ui center aligned header" style={{ color: '#12B2FF' }}>
                                Best Yield Farming Startegies
                            </h3>
                        </div>
                        <div className="active content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, aut cupiditate,
                                dolorem et, impedit mollitia nulla numquam porro quaerat quas quis recusandae. Beatae
                                debitis deleniti harum iure laborum necessitatibus omnis reiciendis sed sequi vitae!
                                Aperiam deserunt ex minima necessitatibus quibusdam quo quod voluptatem! Architecto
                                assumenda corporis distinctio dolorum error ex explicabo facilis, itaque laboriosam
                                magni minima mollitia necessitatibus odio officia quasi, quia quis quod repellendus
                                reprehenderit sequi sit unde velit vero voluptates voluptatibus. A aliquid animi,
                                architecto at excepturi, expedita fuga fugit minus modi omnis quibusdam reprehenderit
                                sed, tempora voluptas voluptate! Adipisci, ducimus ea eligendi esse eveniet laudantium
                                quisquam sint?
                            </p>
                        </div>
                    </div>
                </div>
                ; ; ;{/*	Analytics */}
                <div className="ui two column stackable grid container" style={{ marginTop: '20px' }}>
                    <div className="column">
                        <div
                            className="ui raised segment"
                            style={{ backgroundColor: '#21272D', color: '#FFFFFF', height: 'fit-content' }}
                        >
                            <div className="ui grid">
                                <div className="six wide column">
                                    <div className="ui column">
                                        <div
                                            className="ui raised segment"
                                            style={{ background: 'transparent', border: '1px solid #39434E' }}
                                        >
                                            <a href="test" className="ui blue ribbon label">
                                                Total Value Locked (TVL)
                                            </a>
                                            <p style={{ margin: '1rem 0' }}>$173,647,688</p>
                                            <a href="test" className="ui blue ribbon label">
                                                Change (24h)
                                            </a>{' '}
                                            <p style={{ margin: '1rem 0' }}>7.00%</p>
                                            <a href="test" className="ui blue ribbon label">
                                                UniSwap Dominance
                                            </a>
                                            <p style={{ margin: '1rem 0' }}>30.30%</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="ten wide column">Right</div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div
                            className="ui raised segment"
                            style={{ backgroundColor: '#21272D', color: '#FFFFFF', height: 'fit-content' }}
                        >
                            <div className="ui grid">
                                <div className="six wide column">
                                    <div className="ui column">
                                        <div
                                            className="ui raised segment"
                                            style={{ background: 'transparent', border: '1px solid #39434E' }}
                                        >
                                            <a href="test" className="ui blue ribbon label">
                                                KROM Price
                                            </a>
                                            <p style={{ margin: '1rem 0' }}>$0.0034</p>
                                            <a href="test" className="ui blue ribbon label">
                                                Market Size
                                            </a>{' '}
                                            <p style={{ margin: '1rem 0' }}>10,435,444</p>
                                            <a href="test" className="ui blue ribbon label">
                                                Total Supply
                                            </a>
                                            <p style={{ margin: '1rem 0' }}>100,000,000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="ten wide column">Right</div>
                            </div>
                        </div>
                    </div>
                </div>
                ; ; ;{/*	Horizontal Divider */}
                <div className="ui divider container" style={{ margin: '4rem 0' }} />; ; ;{/*Pool Table Header */}
                <h3 className="ui center aligned header" style={{ color: '#12B2FF' }}>
                    Supported Pools
                </h3>
                ; ; ;{/*	Token Table */}
                <div className="ui container">
                    <div
                        className="ui raised segment flex flex-grow justify-between"
                        style={{
                            backgroundColor: 'transparent',
                            color: '#FFFFFF',
                            padding: '1rem 3rem',
                            border: '0',
                            fontWeight: '900'
                        }}
                    >
                        <span className="inline-block">ASSET</span>
                        <span className="inline-block">POOL</span>
                        <span className="inline-block">APY</span>
                        <span className="inline-block">BALANCE</span>
                        <span className="inline-block">FARMING</span>
                        <span className="inline-block">ACTION</span>
                    </div>
                    <div
                        className="ui raised segment flex flex-grow justify-between"
                        style={{ backgroundColor: '#21272D', color: '#FFFFFF', padding: '1rem 3rem' }}
                    >
                        <span className="inline-block">Token1</span>
                        <span className="inline-block">Token1</span>
                        <span className="inline-block">Token1</span>
                        <span className="inline-block">Token1</span>
                        <span className="inline-block">Token1</span>
                        <span className="inline-block">Token1</span>
                    </div>
                    <div
                        className="ui raised segment flex flex-grow justify-between"
                        style={{ backgroundColor: '#21272D', color: '#FFFFFF', padding: '1rem 3rem' }}
                    >
                        <span className="inline-block">Token1</span>
                        <span className="inline-block">Token1</span>
                        <span className="inline-block">Token1</span>
                        <span className="inline-block">Token1</span>
                        <span className="inline-block">Token1</span>
                        <span className="inline-block">Token1</span>
                    </div>
                    <div
                        className="ui raised segment flex flex-grow justify-between"
                        style={{ backgroundColor: '#21272D', color: '#FFFFFF', padding: '1rem 3rem' }}
                    >
                        <span className="inline-block">Token1</span>
                        <span className="inline-block">Token1</span>
                        <span className="inline-block">Token1</span>
                        <span className="inline-block">Token1</span>
                        <span className="inline-block">Token1</span>
                        <span className="inline-block">Token1</span>
                    </div>
                    <div
                        className="ui raised segment flex flex-grow justify-between"
                        style={{ backgroundColor: '#21272D', color: '#FFFFFF', padding: '1rem 3rem' }}
                    >
                        <span className="inline-block">Token1</span>
                        <span className="inline-block">Token1</span>
                        <span className="inline-block">Token1</span>
                        <span className="inline-block">Token1</span>
                        <span className="inline-block">Token1</span>
                        <span className="inline-block">Token1</span>
                    </div>
                </div>
                ; ; ;
            </div>
        </>
    );
};

export default App;
