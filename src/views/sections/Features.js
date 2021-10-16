import React from 'react';

import balance from '../../assets/img/balance.png';
import deposit from '../../assets/img/deposit.png';
import redeem from '../../assets/img/redeem.png';
import strategy from '../../assets/img/strategy.png';

const Features = () => {
    return (
        <section id="features">
            <div
                className="container mx-auto block text-white text-left py-32 flex flex-col justify-center
                        items-center"
            >
                <div />
                <h2
                    className="text-6xl subpixel-antialiased bold mb-32"
                    style={{
                        letterSpacing: '0',
                        fontWeight: '500'
                    }}
                >
                    Features
                </h2>

                <div className="flex flex-wrap flex-grow justify-center mx-auto pt-20">
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
                            <h2 className="text-blue-400 text-3xl font-semibold">Pick a Strategy</h2>
                            <p className="mt-2 text-white">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. ea ea doloremque natus error,
                                rerum quas odio quaerat nam ex in in a veritatis pariatur minus consequuntur!
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
                            <h2 className="text-blue-400 text-3xl font-semibold">Deposit</h2>
                            <p className="mt-2 text-white">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. ea ea doloremque natus error,
                                rerum quas odio quaerat nam ex pariatur minus consequuntur!
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
                                src={balance}
                                alt=""
                            />
                        </div>
                        <div>
                            <h2 className="text-blue-400 text-3xl font-semibold">Rebalance</h2>
                            <p className="mt-2 text-white">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt Quae
                                dolores deserunt ea doloremque odious quaerat nam ex commodi hic, suscipit in a
                                veritatis in a veritatis pariatur minus consequuntur!
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
                            <h2 className="text-blue-400 text-3xl font-semibold">Redeem</h2>
                            <p className="mt-2 text-white">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. ea ea doloremque natus error,
                                rerum quas odio quaerat nam ex in in a veritatis pariatur minus consequuntur!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
