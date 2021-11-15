import React from 'react';

import balance from '../../assets/img/balance.png';
import deposit from '../../assets/img/deposit.png';
import processSvg from '../../assets/img/process.svg';
import redeem from '../../assets/img/redeem.png';
import strategy from '../../assets/img/strategy.png';

const HowItWorks = ({ elRef }) => {
    return (
        <section id="howItWorks" ref={elRef}>
            <div
                className="container mx-auto block text-white text-left py-32 flex flex-col
                        justify-center items-center"
            >
                <div />
                <h2
                    className="text-6xl subpixel-antialiased bold mb-32"
                    style={{
                        letterSpacing: '0',
                        fontWeight: '500'
                    }}
                >
                    How it works
                </h2>

                <div className="container mx-auto flex flex-wrap justify-around">
                    <img src={processSvg} alt="DEX Trade" />

                    <div className="flex flex-wrap flex-grow justify-center mx-auto pt-20 w-2/5 text-2xl">
                        <div
                            className="max-w-md pt-4 pb-8 px-8 feature-card border border-blue-400 shadow-lg
                                rounded-lg mx-20 my-20"
                        >
                            <div className="flex justify-center md:justify-end -mt-16">
                                <img
                                    className="w-20 h-20 object-cover rounded-full border-2 border-blue-400
                                        bg-gray-800 p-2"
                                    src={strategy}
                                    alt=""
                                />
                            </div>
                            <div>
                                <h2 className="text-blue-400 text-3xl font-semibold">Place a limit order</h2>
                                <p className="mt-2 text-white">
                                    Select the trading pairs (tokens) and a target price for your limit order.
                                </p>
                            </div>
                        </div>
                        <div
                            className="max-w-md pt-4 pb-8 px-8 feature-card border border-blue-400 shadow-lg
                                rounded-lg mx-20 my-20"
                        >
                            <div className="flex justify-center md:justify-end -mt-16">
                                <img
                                    className="w-20 h-20 object-cover rounded-full border-2 border-blue-400
                                        bg-gray-800 p-2"
                                    src={deposit}
                                    alt=""
                                />
                            </div>
                            <div>
                                <h2 className="text-blue-400 text-3xl font-semibold">Fund your account</h2>
                                <p className="mt-2 text-white">Fund your KROMatika account with KROM tokens.</p>
                            </div>
                        </div>
                        <div
                            className="max-w-md pt-4 pb-8 px-8 feature-card border border-blue-400 shadow-lg
                                rounded-lg mx-20 my-20"
                        >
                            <div className="flex justify-center md:justify-end -mt-16">
                                <img
                                    className="w-20 h-20 object-cover rounded-full border-2 border-blue-400
                                        bg-gray-800 p-2"
                                    src={balance}
                                    alt=""
                                />
                            </div>
                            <div>
                                <h2 className="text-blue-400 text-3xl font-semibold">Process limit order</h2>
                                <p className="mt-2 text-white">
                                    Wait for your limit order to be processed automatikally.
                                </p>
                            </div>
                        </div>
                        <div
                            className="max-w-md pt-4 pb-8 px-8 feature-card border border-blue-400 shadow-lg
                                rounded-lg mx-20 my-20"
                        >
                            <div className="flex justify-center md:justify-end -mt-16">
                                <img
                                    className="w-20 h-20 object-cover rounded-full border-2 border-blue-400
                                        bg-gray-800 p-2"
                                    src={redeem}
                                    alt=""
                                />
                            </div>
                            <div>
                                <h2 className="text-blue-400 text-3xl font-semibold">Collect</h2>
                                <p className="mt-2 text-white">Collect the amounts from the limit order.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default HowItWorks;
