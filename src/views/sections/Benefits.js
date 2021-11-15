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
                            href={'https://kovan.etherscan.io/token/0x50E0f3E7a3BDfe03d1074b698Ff28202aD18b795'}
                            rel="noreferrer"
                        >
                            KROM
                        </a>{' '}
                        token is a non-mintable ERC20 token, secured by OpenZepellin and audited by MythX, having 100
                        millions of total supply EVER.
                        <br />
                        <br />
                        <br />
                        60 millions KROM tokens are already available for trading on Uniswap V3 MAINNET. Get your KROM
                        tokens{' '}
                        <a
                            target="_blank"
                            href={
                                'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x3af33bEF05C2dCb3C7288b77fe1C8d2AeBA4d789'
                            }
                            rel="noreferrer"
                        >
                            here.
                        </a>{' '}
                        <br />
                        <br />
                        <br />
                        For better security and prevention from rug pulls, the proof of liquidity (position) has been
                        burned. Check the burn transaction{' '}
                        <a
                            target="_blank"
                            href={
                                'https://etherscan.io/tx/0x26c782eb49c42979c259dda936f28b77ae8dbeef16da3ec341d06cb437034ac4'
                            }
                            rel="noreferrer"
                        >
                            here.
                        </a>{' '}
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
