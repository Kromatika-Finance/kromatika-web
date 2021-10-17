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
                                    className="fas fa-sun fa-2x"
                                    style={{ verticalAlign: 'middle', margin: '0 1rem', color: '#12B2FF' }}
                                />
                                <i
                                    className="fas fa-receipt fa-2x"
                                    style={{
                                        verticalAlign: 'middle',
                                        margin: '0 1rem',
                                        color: '#12B2FF'
                                    }}
                                />
                            </span>
                            <span className="ten wide column">
                                <img
                                    className="inline-block"
                                    src={metamask}
                                    alt="metamask logo"
                                    style={{ width: '40px', height: 'auto', marginLeft: '1rem' }}
                                />
                                <div className="ui inline-block form" style={{ verticalAlign: 'middle' }}>
                                    <div className="disabled field" style={{ width: '20rem' }}>
                                        <input type="text" placeholder="Not Connected" />
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

                {/*	Accordion */}
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

                {/*	Analytics */}
                <div className="ui two column stackable grid container" style={{ marginTop: '20px' }}>
                    <div className="column">
                        <div
                            className="ui raised segment"
                            style={{ backgroundColor: '#21272D', color: '#FFFFFF', height: '10rem' }}
                        >
                            TVL Analytics
                        </div>
                    </div>
                    <div className="column">
                        <div
                            className="ui raised segment"
                            style={{ backgroundColor: '#21272D', color: '#FFFFFF', height: '10rem' }}
                        >
                            Token Balance
                        </div>
                    </div>
                </div>

                {/*	Horizontal Divider */}
                <div className="ui divider container" style={{ margin: '4rem 0' }} />

                {/*Pool Table Header */}
                <h3 className="ui center aligned header" style={{ color: '#12B2FF' }}>
                    Supported Pools
                </h3>

                {/*	Token Table */}
                <div className="ui container">
                    <div className="ui raised segment" style={{ backgroundColor: '#21272D', color: '#FFFFFF' }}>
                        Pool 1
                    </div>
                    <div className="ui raised segment" style={{ backgroundColor: '#21272D', color: '#FFFFFF' }}>
                        Pool 2
                    </div>
                    <div className="ui raised segment" style={{ backgroundColor: '#21272D', color: '#FFFFFF' }}>
                        Pool 3
                    </div>
                    <div className="ui raised segment" style={{ backgroundColor: '#21272D', color: '#FFFFFF' }}>
                        Pool 4
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
