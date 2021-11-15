import React from 'react';

import strategyIllustration from '../../assets/img/business_decisions.svg';

const Benefits = () => {
    return (
        <section id="benefits">
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
                    KROM Token
                </h2>

                <div className="container mx-auto flex flex-wrap justify-around">
                    <p className="w-2/5 text-2xl">
                        <a
                            target="_blank"
                            href={'https://etherscan.io/token/0x3af33bEF05C2dCb3C7288b77fe1C8d2AeBA4d789'}
                            rel="noreferrer"
                        >
                            KROM
                        </a>{' '}
                        token is a non-mintable ERC20 token, secured by OpenZepellin and audited by MythX, having 100
                        millions of total supply EVER.
                        <br />
                        <br />
                        <br />
                        60 millions KROM tokens are already available for trading on Uniswap V3 MAINNET.
                        <br />
                        <br />
                        <br />
                        20 millions KROM tokens will be available for trading on Layer2 Uniswap (Arbitrum and Optimism)
                        in the first month of the launch.
                        <br />
                        <br />
                        <br />
                        The rest of the tokens: 20 millions KROM tokens will be held in a multisignature Gnosis Safe
                        wallet and used solely for project funding.
                        <br />
                        <br />
                        <br />
                        Early KROM token holders would have HUGE savings on service fees, buying the token cheap and
                        paying the service fee when the token price has increased. Get your KROM tokens{' '}
                        <a
                            target="_blank"
                            href={
                                'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x3af33bEF05C2dCb3C7288b77fe1C8d2AeBA4d789'
                            }
                            rel="noreferrer"
                        >
                            here.
                        </a>{' '}
                    </p>
                    <img
                        src={strategyIllustration}
                        alt="illustrates a man making business decisions"
                        className="w-2/5"
                    />
                </div>
            </div>
        </section>
    );
};

export default Benefits;
