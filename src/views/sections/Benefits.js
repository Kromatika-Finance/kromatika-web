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
                        KROM token is a non-mintable ERC20 token, secured by OpenZepellin and audited by MythX, having
                        100 millions of total supply EVER.
                        <br />
                        <br />
                        <br />
                        <br />
                        60 millions KROM tokens will be available for trading on Uniswap V3 MAINNET. For better security
                        and prevention from rug pulls hacks, the proof of liquidity (position) will be burned, leaving
                        the majority of the token supply to the community FOREVER.
                        <br />
                        <br />
                        <br />
                        <br />
                        20 millions KROM tokens will be available for trading on Layer2 Uniswap (Arbitrum and Optimism).
                        <br />
                        <br />
                        <br />
                        <br />
                        20 millions KROM tokens will be held in a multisignature Gnosis Safe wallet and be used for
                        project funding.
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
