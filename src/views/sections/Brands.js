import './brand.css';

import React from 'react';

import { cmc, coingecko, dextool, nomics } from './imports';

const Brand = () => (
    <div className="bg-gray-900 gpt3__brand section__padding">
        <div>
            <a
                href="https://www.dextools.io/app/ether/pair-explorer/0x6ae0cdc5d2b89a8dcb99ad6b3435b3e7f7290077"
                target="_blank"
                rel="noreferrer"
            >
                <img src={dextool} alt="" />
            </a>
        </div>
        <div className="bg-gray-900">
            <a href="https://coinmarketcap.com/currencies/kromatika/" target="_blank" rel="noreferrer">
                <img src={cmc} alt="" />
            </a>
        </div>
        <div>
            <a href="https://www.coingecko.com/en/coins/kromatika" target="_blank" rel="noreferrer">
                <img src={coingecko} alt="" />
            </a>
        </div>
        <div>
            <a href="https://nomics.com/assets/krom-kromatika" target="_blank" rel="noreferrer">
                <img src={nomics} alt="" />
            </a>
        </div>
    </div>
);

export default Brand;
