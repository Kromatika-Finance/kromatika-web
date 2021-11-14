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
                    Features
                </h2>

                <div className="flex flex-wrap flex-grow justify-center mx-auto pt-20">
                    <p className="w-2/5 text-2xl">
                        When doing swaps on Uniswap V3, the user pays what is called a swap fee that is: 0.05%, 0.3% or
                        1%. When placing limit orders on KROMatika, the user does not pay swap fee, but pays FIXED
                        service fee instead.
                        <br />
                        <br />
                        The service fee in KROMATIKA is paid in KROM token; However the actual cost of processing the
                        limit order is fixed and made in ETH, meaning early KROM holders will be able to process more
                        limit orders over time as the value of KROM increases.
                        <br />
                        <br />
                        The user can choose a lower target gas price for the automatik processing of their limit order,
                        even further lowering the service fee, sacrificing some processing speed for lower service fees.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Features;
