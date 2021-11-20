import React from 'react';

import cmc from '../../assets/img/cmc-btn.png';
import coingecko from '../../assets/img/coingecko-btn.png';
import dexguru from '../../assets/img/dexguru-btn.png';
import dextool from '../../assets/img/dextool-btn.png';
import ether from '../../assets/img/logo-ether.webp';
import nomics from '../../assets/img/nomics-btn.png';

const Benefits = () => {
    return (
        <section id="benefits">
            <div
                className="container mx-auto block text-white text-left py-32 flex flex-col
                        justify-center items-center"
            >
                <div />
                <h1
                    className="text-6xl subpixel-antialiased bold mb-32"
                    style={{
                        letterSpacing: '0',
                        fontWeight: '500'
                    }}
                >
                    TOKENOMICS
                </h1>

                <div className="container mx-auto flex flex-wrap justify-around">
                    <p className="w-2/5 text-2xl">
                        Token Symbol:
                        <section
                            id="tokenomics"
                            className="block-example border border-white container row col-md-6 gradient-pill token-table token-row tokenomics-section text-xl font-bold btn uppercase px-6 py-4 rounded-sm shadow
								                    hover:shadow-xl bg-blue outline-none focus:outline-none lg:mr-1 lg:mb-0 mb-3 justify-center items-center"
                        >
                            $KROM
                        </section>
                        <br />
                        Circulating Supply:
                        <section
                            id="tokenomics"
                            className="block-example border border-white container row col-md-6 gradient-pill token-table token-row tokenomics-section text-xl font-bold btn uppercase px-6 py-4 rounded-sm shadow
								                    hover:shadow-xl bg-blue outline-none focus:outline-none lg:mr-1 lg:mb-0 mb-3 justify-center items-center"
                        >
                            100,000,000
                        </section>
                        <br />
                        Maximum Supply:
                        <section
                            id="tokenomics"
                            className="block-example border border-white container row col-md-6 gradient-pill token-table token-row tokenomics-section text-xl font-bold btn uppercase px-6 py-4 rounded-sm shadow
								                    hover:shadow-xl bg-blue outline-none focus:outline-none lg:mr-1 lg:mb-0 mb-3 justify-center items-center"
                        >
                            100,000,000
                        </section>
                        <br />
                        Token Price:
                        <section
                            id="tokenomics"
                            className="block-example border border-white container row col-md-6 gradient-pill token-table token-row tokenomics-section text-xl font-bold btn uppercase px-6 py-4 rounded-sm shadow
								                    hover:shadow-xl bg-blue outline-none focus:outline-none lg:mr-1 lg:mb-0 mb-3 justify-center items-center"
                        >
                            <a
                                href="https://www.dextools.io/app/ether/pair-explorer/0x6ae0cdc5d2b89a8dcb99ad6b3435b3e7f7290077"
                                target="_blank"
                                rel="noreferrer"
                            >
                                click to view price
                                <div id="prices"></div>
                            </a>
                        </section>
                        <br />
                        Ethereum contract address:
                        <section
                            id="tokenomics"
                            className="block-example border border-white container row col-md-6 gradient-pill token-table token-row tokenomics-section text-xl font-bold btn uppercase px-6 py-4 rounded-sm shadow
								                    hover:shadow-xl bg-blue outline-none focus:outline-none lg:mr-1 lg:mb-0 mb-3 justify-center items-center"
                        >
                            0x3af33bef05c2dcb3c7288b77fe1c8d2aeba4d789
                        </section>
                        <br />
                        <button
                            id="btn-read-more"
                            className="bg-gray-900 text-xl font-bold btn uppercase px-6 py-4 rounded-sm shadow
                                                hover:shadow-xl bg-blue outline-none focus:outline-none lg:mr-1 lg:mb-0 mb-3"
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
                            BUY NOW ON UNISWAP
                        </button>
                    </p>
                    <p>
                        <div className="padding-top:15px flex flex-col">
                            <div className="flex">
                                <a
                                    href="https://www.dextools.io/app/ether/pair-explorer/0x6ae0cdc5d2b89a8dcb99ad6b3435b3e7f7290077"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        width="200px"
                                        height="200px"
                                        src={dextool}
                                        className="badge-boolean button flex flex-col flex"
                                        alt="dextool"
                                    />
                                </a>
                                <a
                                    href="https://dex.guru/token/0x3af33bef05c2dcb3c7288b77fe1c8d2aeba4d789-eth"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        width="200px"
                                        height="200px"
                                        src={dexguru}
                                        className="badge-boolean button flex flex-col"
                                        alt="dexguru"
                                    />
                                </a>
                                <a
                                    href="https://etherscan.io/token/0x3af33bef05c2dcb3c7288b77fe1c8d2aeba4d789"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        width="200px"
                                        height="280px"
                                        src={ether}
                                        className="badge-tab justify-center items-center"
                                        alt="ether"
                                    />
                                </a>
                            </div>
                        </div>
                        <br />
                        <div className="padding-top:15px flex flex-col">
                            <div className="flex">
                                <a
                                    href="https://coinmarketcap.com/currencies/kromatika/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        width="200px"
                                        height="200px"
                                        src={cmc}
                                        className="badge-boolean button flex flex-col"
                                        alt="coinmarketcap"
                                    />
                                </a>
                                <br />
                                <a href="https://www.coingecko.com/en/coins/kromatika" target="_blank" rel="noreferrer">
                                    <img
                                        width="200px"
                                        height="200px"
                                        src={coingecko}
                                        className="badge-boolean button flex flex-col"
                                        alt="coingecko"
                                    />
                                </a>
                                <br />
                                <a href="https://www.coingecko.com/en/coins/kromatika" target="_blank" rel="noreferrer">
                                    <img
                                        width="200px"
                                        height="200px"
                                        src={nomics}
                                        className="badge-boolean button flex flex-col"
                                        alt="nomics"
                                    />
                                </a>
                            </div>
                        </div>
                        <br />
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
