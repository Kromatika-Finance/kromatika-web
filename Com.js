import React from 'react';

const Benefits = () => {
    return (
        <section id="benefits">
            <div
                className="container mx-auto block text-white text-left py-32 flex flex-col
                        justify-center items-center"
            >
                <div />
                <h1
                    className="text-9xl subpixel-antialiased bold mb-32"
                    style={{
                        letterSpacing: '10',
                        fontWeight: '500'
                    }}
                >
                    Join Our Community
                </h1>

                <div className="container mx-auto flex flex-center justify-center">
                    <p className="w-2/5 text-3xl subpixel-antialiased bold mb-32">
                        Enter the future of our DEX Trading: $KROM! Our expanding, vibrant and inclusive community is
                        waiting for you.
                        <br />
                        <br />
                        <br />
                        <button
                            id="btn-read-more"
                            className="bg-gray-900 text-xl font-bold btn uppercase px-6 py-4 rounded-sm shadow
                                                hover:shadow-xl bg-yellow outline-none focus:outline-none lg:mr-1 lg:mb-0 mb-3"
                            type="button"
                            style={{
                                transition: 'all .15s ease'
                            }}
                            onClick={() => {
                                window.open(
                                    'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x3af33bEF05C2dCb3C7288b77fe1C8d2AeBA4d789',
                                    'blank'
                                );
                            }}
                        >
                            Join KROM Announces - Official
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
                                window.open(
                                    'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x3af33bEF05C2dCb3C7288b77fe1C8d2AeBA4d789',
                                    'blank'
                                );
                            }}
                        >
                            Join Global Group - Official
                        </button>
                        <br />
                        <br />
                        <button
                            id="btn-read-more"
                            className="p-2 col-example text-left bg-gray-900 text-xl font-bold btn uppercase px-6 py-4 rounded-sm shadow
                                                hover:shadow-xl bg-yellow outline-none focus:outline-none lg:mr-1 lg:mb-0 mb-3"
                            type="button"
                            style={{
                                transition: 'all .15s ease'
                            }}
                            onClick={() => {
                                window.open(
                                    'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x3af33bEF05C2dCb3C7288b77fe1C8d2AeBA4d789',
                                    'blank'
                                );
                            }}
                        >
                            Reddit
                        </button>
                        <button
                            id="btn-read-more"
                            className="p-2 col-example text-left bg-gray-900 text-xl font-bold btn uppercase px-6 py-4 rounded-sm shadow
                                                hover:shadow-xl bg-yellow outline-none focus:outline-none lg:mr-1 lg:mb-0 mb-3"
                            type="button"
                            style={{
                                transition: 'all .15s ease'
                            }}
                            onClick={() => {
                                window.open(
                                    'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x3af33bEF05C2dCb3C7288b77fe1C8d2AeBA4d789',
                                    'blank'
                                );
                            }}
                        >
                            Discord
                        </button>
                        <button
                            id="btn-read-more"
                            className="p-2 col-example text-left bg-gray-900 text-xl font-bold btn uppercase px-6 py-4 rounded-sm shadow
                            hover:shadow-xl bg-yellow outline-none focus:outline-none lg:mr-1 lg:mb-0 mb-3"
                            type="button"
                            style={{
                                transition: 'all .15s ease'
                            }}
                            onClick={() => {
                                window.open(
                                    'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x3af33bEF05C2dCb3C7288b77fe1C8d2AeBA4d789',
                                    'blank'
                                );
                            }}
                        >
                            Medium
                        </button>
                        <button
                            id="btn-read-more"
                            className="p-2 col-example text-left bg-gray-900 text-xl font-bold btn uppercase px-6 py-4 rounded-sm shadow
                            hover:shadow-xl bg-yellow outline-none focus:outline-none lg:mr-1 lg:mb-0 mb-3"
                            type="button"
                            style={{
                                transition: 'all .15s ease'
                            }}
                            onClick={() => {
                                window.open(
                                    'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x3af33bEF05C2dCb3C7288b77fe1C8d2AeBA4d789',
                                    'blank'
                                );
                            }}
                        >
                            Twitter
                        </button>
                        <button
                            id="btn-read-more"
                            className="p-2 col-example text-left bg-gray-900 text-xl font-bold btn uppercase px-6 py-4 rounded-sm shadow
                            hover:shadow-xl bg-yellow outline-none focus:outline-none lg:mr-1 lg:mb-0 mb-3"
                            type="button"
                            style={{
                                transition: 'all .15s ease'
                            }}
                            onClick={() => {
                                window.open(
                                    'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x3af33bEF05C2dCb3C7288b77fe1C8d2AeBA4d789',
                                    'blank'
                                );
                            }}
                        >
                            Linkedin
                        </button>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
