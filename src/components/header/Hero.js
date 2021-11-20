import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyleRoot } from 'radium';
import React from 'react';

import cmc from '../../assets/img/cmc_icon@2x.png';
import etherscan from '../../assets/img/etherscan@2x.png';
import instagram from '../../assets/img/instagram-social-icon@2x.png';
import telegram from '../../assets/img/telegram-social-icon@2x.png';
import twiter from '../../assets/img/twitter-social-icon@2x.png';

const Hero = ({ bounceInAnimation, executeScroll }) => {
    return (
        <div id="hero">
            <div
                className="container mx-auto px-4 w-full h-full flex flex-col justify-center items-start
							              text-white text-left relative"
            >
                <h1
                    className="text-9xl mb-5 subpixel-antialiased"
                    style={{
                        letterSpacing: '-5px',
                        fontWeight: '500'
                    }}
                >
                    KROMATIKA — next generation DEX Trading, powered by Uniswap and Chainlink
                </h1>
                <p
                    className="text-4xl mb-10 w-3/5 text-regular subpixel-antialiased leading-tight
							                  leading-snug"
                >
                    <br />
                    Audited smart contracts for creating trades and processing them, all powered by Uniswap
                    <br />
                    <br />
                    UI for interacting with KROMatika smart contracts
                    <br />
                    <br />
                    Off-chain decentralized processing services
                    <br />
                    <br />
                    KROM token — utility ERC20 token used for paying the service fee
                    <br />
                </p>
                <div>
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
                        BUY NOW ON UNISWAP
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
                                'https://telegra.ph/How-to-buy-KROM-using-MetaMaskand-import-in-on-your-Wallet-11-19',
                                'blank'
                            );
                        }}
                    >
                        HOW TO BUY
                    </button>
                    <br />
                    <br />
                    <div className="padding-top:15px flex flex-col">
                        <div className="flex">
                            <a
                                href="https://twitter.com/KromatikaFi"
                                className="social-icon button flex flex-col"
                                width="50px"
                                height="50px"
                            >
                                <img width="50px" height="50px" src={twiter} alt=""></img>
                            </a>
                            <a
                                href="https://t.me/joinchat/09jBPxB1cl85OTBk"
                                className="social-icon button flex flex-col"
                                width="50px"
                                height="50px"
                            >
                                <img width="50px" height="50px" src={telegram} alt=""></img>
                            </a>
                            <a
                                href="https://instagram.com"
                                className="social-icon button flex flex-col"
                                width="50px"
                                height="50px"
                            >
                                <img width="50px" height="50px" src={instagram} alt=""></img>
                            </a>
                            <a
                                href="https://etherscan.io/token/0x3af33bef05c2dcb3c7288b77fe1c8d2aeba4d789"
                                className="social-icon button flex flex-col"
                                width="50px"
                                height="50px"
                            >
                                <img width="50px" height="50px" src={etherscan} alt=""></img>
                            </a>
                            <a
                                href="https://coinmarketcap.com/currencies/kromatika/"
                                className="social-icon button flex flex-col"
                                width="50px"
                                height="50px"
                            >
                                <img width="50px" height="50px" src={cmc} alt=""></img>
                            </a>
                        </div>
                    </div>
                </div>
                <StyleRoot>
                    <div
                        className="container mx-auto flex justify-center item-center absolute bottom-20"
                        style={bounceInAnimation.bounceIn}
                    >
                        <FontAwesomeIcon
                            className="cursor-pointer"
                            id="angleDoubleDown"
                            icon={faAngleDoubleDown}
                            size="3x"
                            onClick={executeScroll}
                        />
                    </div>
                </StyleRoot>
            </div>
        </div>
    );
};

export default Hero;
