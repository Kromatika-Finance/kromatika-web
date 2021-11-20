import React from 'react';

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
                    How to Buy
                </h2>

                <div className="flex flex-wrap flex-grow justify-center mx-auto pt-20">
                    <button
                        id="btn-read-more"
                        className="bg-gray-900 text-xl font-bold btn uppercase px-6 py-4 rounded-sm shadow
								                    hover:shadow-xl bg-yellow outline-none focus:outline-none lg:mr-1 lg:mb-0 mb-3"
                        type="button"
                        style={{
                            transition: 'all .15s ease'
                        }}
                        onClick={() => {
                            window.open('https://link.kromatika.finance/buy-krom-eth', 'blank');
                        }}
                    >
                        BUY ON UNISWAP
                    </button>
                    <button
                        id="btn-read-more"
                        className="bg-gray-900 text-xl font-bold btn uppercase px-6 py-4 rounded-sm shadow
								                    hover:shadow-xl bg-yellow outline-none focus:outline-none lg:mr-1 lg:mb-0 mb-3"
                        type="button"
                        style={{
                            transition: 'all .15s ease'
                        }}
                        onClick={() => {
                            window.open('https://link.kromatika.finance/buy-krom-eth', 'blank');
                        }}
                    >
                        BUY ON ARBITRUM
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Features;
