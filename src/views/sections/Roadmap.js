import React from 'react';
import { Helmet } from 'react-helmet';

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
                        <Helmet>
                            <script
                                type="text/javascript"
                                src="https://files.coinmarketcap.com/static/widget/currency.js"
                            ></script>
                        </Helmet>
                        <div
                            className="coinmarketcap-currency-widget App flex flex-col"
                            data-currencyid="14745"
                            data-base="USD"
                            data-secondary=""
                            data-ticker="true"
                            data-rank="true"
                            data-marketcap="true"
                            data-volume="true"
                            data-statsticker="true"
                            data-stats="USD"
                        ></div>
                        <div
                            className="nomics-ticker-widget App flex flex-col"
                            data-name="Kromatika"
                            data-base="KROM"
                            data-quote="USD"
                        ></div>
                        <Helmet>
                            <script src="https://widget.nomics.com/embed.js"></script>
                        </Helmet>
                        <Helmet>
                            <script src="https://crypto.com/price/static/widget/index.js"></script>
                        </Helmet>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
