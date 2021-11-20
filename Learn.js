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
                    ROADMAP
                </h2>

                <div className="container mx-auto flex flex-wrap justify-around">
                    <img
                        src={strategyIllustration}
                        alt="illustrates a man making business decisions"
                        className="w-2/5"
                    />
                    <p className="w-2/5 text-2xl">
                        • November 2021: KROM token launch live on Ethereum mainnet. Initial liquidity available for
                        trading on Uniswap V3 MAINNET. We are here now.
                        <br />
                        <br />
                        <br />
                        • November 2021: DAPP Beta launch on Kovan testnet and Layer 2 testnet. Smart contract audit.
                        <br />
                        <br />
                        <br />
                        • December 2021: Trading the token on Layer2. Launching the DAPP live on Layer 2: Arbitrum ONE
                        and Optimism.
                        <br />
                        <br />
                        <br />• Jan 2022: Launching the DAPP live on ETHereum mainnet.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
