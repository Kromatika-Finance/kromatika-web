import React from 'react';
import { Link } from 'react-router-dom';
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
                                <Link
                                    to="#howItWorks"
                                    className="border-b border-solid border-transparent hover:border-purple-800
                                    hover:text-purple-800"
                                >
                                    How it works
                                </Link>
                            </li>
                            <li className="mb-2">
                                <HashLink
                                    to="#benefits"
                                    className="border-b border-solid border-transparent hover:border-purple-800
                                    hover:text-purple-800"
                                >
                                    KROM Token
                                </HashLink>
                            </li>
                        </ul>
                    </div>
                    <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
                        <h5 className="text-xl font-bold mb-6">Resources</h5>
                        <ul className="list-none footer-links">
                            <li className="mb-2">
                                <Link
                                    to={{
                                        pathname: 'https://github.com/Kromatika-Finance'
                                    }}
                                    target="_blank"
                                    className="border-b border-solid border-transparent hover:border-purple-800
                                    hover:text-purple-800"
                                >
                                    Github
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link
                                    to={{
                                        pathname:
                                            'https://etherscan.io/token/0x3af33bef05c2dcb3c7288b77fe1c8d2aeba4d789'
                                    }}
                                    target="_blank"
                                    className="border-b border-solid border-transparent hover:border-purple-800
                                    hover:text-purple-800"
                                >
                                    Etherscan
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
                        <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left">Stay connected</h5>
                        <div className="flex sm:justify-center xl:justify-start">
                            <Link
                                to={{
                                    pathname: 'https://twitter.com/KromatikaFi'
                                }}
                                target="_blank"
                                className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1
                                text-gray-600 hover:text-white hover:bg-pink-600 hover:bg-pink-600"
                            >
                                <i className="fab fa-twitter" />
                            </Link>
                            <Link
                                to={{
                                    pathname: 'https://discord.gg/Uv2Q2v26JG'
                                }}
                                target="_blank"
                                className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2
                                text-gray-600 hover:text-white hover:bg-purple-400 hover:border-purple-400"
                            >
                                <i className="fab fa-discord" />
                            </Link>
                            <Link
                                to={{
                                    pathname: 'https://t.me/joinchat/09jBPxB1cl85OTBk'
                                }}
                                target="_blank"
                                className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2
                                text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400"
                            >
                                <i className="fab fa-telegram" />
                            </Link>
                            <Link
                                to={{
                                    pathname: 'https://kromatika-finance.medium.com'
                                }}
                                target="_blank"
                                className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2
                                text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400"
                            >
                                <i className="fab fa-medium" />
                            </Link>
                            <Link
                                to={{
                                    pathname: 'https://www.linkedin.com/company/kromatika'
                                }}
                                target="_blank"
                                className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2
                                text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400"
                            >
                                <i className="fab fa-linkedin-in" />
                            </Link>
                        </div>
                    </div>
                    <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
                        <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left">Attributions</h5>
                        <div className="flex sm:justify-center xl:justify-start">
                            <div>
                                Icons made by{' '}
                                <a href="https://www.flaticon.com/premium-icon/deposit_3671688" title="itim2101">
                                    itim2101
                                </a>{' '}
                                from{' '}
                                <a href="https://www.flaticon.com/" title="Flaticon">
                                    www.flaticon.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;
