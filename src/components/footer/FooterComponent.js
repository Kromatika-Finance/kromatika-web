import React from 'react';
import { HashLink } from 'react-router-hash-link';

const FooterComponent = () => {
    return (
        <footer className="footer-1 bg-gray-100 py-8 sm:py-12">
            <div className="container mx-auto px-4">
                <div
                    className="sm:flex sm:flex-wrap flex-grow-0 justify-center
                sm:-mx-4 md:py-4"
                >
                    <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
                        <h5 className="text-xl font-bold mb-6">Kromatika</h5>
                        <ul className="list-none footer-links">
                            <li className="mb-2">
                                <HashLink
                                    to="#howItWorks"
                                    className="border-b border-solid border-transparent hover:border-purple-800
                                    hover:text-purple-800"
                                >
                                    How it works
                                </HashLink>
                            </li>
                            <li className="mb-2">
                                <HashLink
                                    to="#features"
                                    className="border-b border-solid border-transparent hover:border-purple-800
                                    hover:text-purple-800"
                                >
                                    Features
                                </HashLink>
                            </li>
                            <li className="mb-2">
                                <HashLink
                                    to="#benefits"
                                    className="border-b border-solid border-transparent hover:border-purple-800
                                    hover:text-purple-800"
                                >
                                    Benefits
                                </HashLink>
                            </li>
                        </ul>
                    </div>
                    <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
                        <h5 className="text-xl font-bold mb-6">Features</h5>
                        <ul className="list-none footer-links">
                            <li className="mb-2">
                                <HashLink
                                    to="#features"
                                    className="border-b border-solid border-transparent hover:border-purple-800
                                    hover:text-purple-800"
                                >
                                    Allocation Strategies
                                </HashLink>
                            </li>
                            <li className="mb-2">
                                <HashLink
                                    to="#features"
                                    className="border-b border-solid border-transparent hover:border-purple-800
                                    hover:text-purple-800"
                                >
                                    Deposit
                                </HashLink>
                            </li>
                            <li className="mb-2">
                                <HashLink
                                    to="#features"
                                    className="border-b border-solid border-transparent hover:border-purple-800
                                    hover:text-purple-800"
                                >
                                    Rebalance
                                </HashLink>
                            </li>
                            <li className="mb-2">
                                <HashLink
                                    to="#features"
                                    className="border-b border-solid border-transparent hover:border-purple-800
                                    hover:text-purple-800"
                                >
                                    Redeem
                                </HashLink>
                            </li>
                        </ul>
                    </div>
                    <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
                        <h5 className="text-xl font-bold mb-6">Resources</h5>
                        <ul className="list-none footer-links">
                            <li className="mb-2">
                                <HashLink
                                    to="http://localhost:3000/landing"
                                    className="border-b border-solid border-transparent hover:border-purple-800
                                    hover:text-purple-800"
                                >
                                    Github
                                </HashLink>
                            </li>
                            <li className="mb-2">
                                <HashLink
                                    to="http://localhost:3000/landing"
                                    className="border-b border-solid border-transparent hover:border-purple-800
                                    hover:text-purple-800"
                                >
                                    EthHub
                                </HashLink>
                            </li>
                            <li className="mb-2">
                                <HashLink
                                    to="http://localhost:3000/landing"
                                    className="border-b border-solid border-transparent hover:border-purple-800
                                    hover:text-purple-800"
                                >
                                    Etherscan
                                </HashLink>
                            </li>
                            <li className="mb-2">
                                <HashLink
                                    to="http://localhost:3000/landing"
                                    className="border-b border-solid border-transparent hover:border-purple-800
                                    hover:text-purple-800"
                                >
                                    Documentation
                                </HashLink>
                            </li>
                        </ul>
                    </div>
                    <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                        <h5 className="text-xl font-bold mb-6">About</h5>
                        <ul className="list-none footer-links">
                            <li className="mb-2">
                                <HashLink
                                    to="http://localhost:3000/landing"
                                    className="border-b border-solid border-transparent hover:border-purple-800
                                    hover:text-purple-800"
                                >
                                    Team
                                </HashLink>
                            </li>
                            <li className="mb-2">
                                <HashLink
                                    to="http://localhost:3000/landing"
                                    className="border-b border-solid border-transparent hover:border-purple-800
                                    hover:text-purple-800"
                                >
                                    Project
                                </HashLink>
                            </li>
                        </ul>
                    </div>
                    <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
                        <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left">Stay connected</h5>
                        <div className="flex sm:justify-center xl:justify-start">
                            <HashLink
                                to="http://localhost:3000/landing"
                                className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1
                                text-gray-600 hover:text-white hover:bg-pink-600 hover:bg-pink-600"
                            >
                                <i className="fab fa-slack" />
                            </HashLink>
                            <HashLink
                                to="http://localhost:3000/landing"
                                className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2
                                text-gray-600 hover:text-white hover:bg-purple-400 hover:border-purple-400"
                            >
                                <i className="fab fa-discord" />
                            </HashLink>
                            <HashLink
                                to="http://localhost:3000/landing"
                                className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2
                                text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400"
                            >
                                <i className="fab fa-telegram" />
                            </HashLink>
                            <HashLink
                                to="http://localhost:3000/landing"
                                className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2
                                text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600"
                            >
                                <i className="fab fa-google-plus-g" />
                            </HashLink>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;
