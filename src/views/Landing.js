import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Radium, { StyleRoot } from 'radium';
import React, { useRef } from 'react';
import { bounceIn } from 'react-animations';

import balance from '../assets/img/balance.png';
import strategyIllustration from '../assets/img/business_decisions.svg';
import deposit from '../assets/img/deposit.png';
import processSvg from '../assets/img/process.svg';
import redeem from '../assets/img/redeem.png';
import strategy from '../assets/img/strategy.png';
import FooterComponent from '../components/FooterComponent';
import Navbar from '../components/NavBar';

const styles = {
    bounceIn: {
        animation: '1s infinite',
        animationName: Radium.keyframes(bounceIn, 'bounceIn')
    }
};

const onButtonClick = () => {
    const input = prompt("Type 'test'");

    if (input.toLowerCase().trim() === 'test') {
        alert('It works!');
    } else {
        alert("Doesn't work");
    }
};

const useScroll = () => {
    const elRef = useRef(null);
    const executeScroll = () =>
        elRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

    return [executeScroll, elRef];
};

const Landing = () => {
    const [executeScroll, elRef] = useScroll();

    return (
        <>
            <main>
                <section id="header">
                    <Navbar />
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
                                Kromatika Robo-advisor
                            </h1>
                            <p
                                className="text-4xl mb-10 w-3/5 text-regular subpixel-antialiased leading-tight
							                  leading-snug"
                            >
                                Kromatika is a digital platform that provides automated, algorithm-driven financial
                                planning services with little to no human supervision.
                                <br />
                                Algorithm-driven strategies that automatically generate yield based on opportunities
                                present in the market
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
                                    onClick={onButtonClick}
                                >
                                    Read More
                                </button>
                                <button
                                    id="btn-see-demo"
                                    className="text-xl font-bold uppercase px-6 py-4 rounded-sm shadow
									hover:shadow-xm outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                                    type="button"
                                    style={{
                                        transition: 'all .15s ease'
                                    }}
                                    onClick={onButtonClick}
                                >
                                    See Demo
                                </button>
                            </div>
                            <StyleRoot>
                                <div
                                    className="container mx-auto flex justify-center item-center absolute bottom-20"
                                    style={styles.bounceIn}
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
                </section>
                <section id="howItWorks" ref={elRef}>
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
                            How it works
                        </h2>
                        <img src={processSvg} alt="describes the yield farming process" />
                    </div>
                </section>

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
                            <div
                                className="max-w-md pt-4 pb-8 px-8 feature-card border border-blue-400 shadow-lg
                                rounded-lg mx-20 my-20"
                            >
                                <div className="flex justify-center md:justify-end -mt-16">
                                    <img
                                        className="w-20 h-20 object-cover rounded-full border-2 border-blue-400
                                        bg-gray-800 p-2"
                                        src={strategy}
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <h2 className="text-blue-400 text-3xl font-semibold">Pick a Strategy</h2>
                                    <p className="mt-2 text-white">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. ea ea doloremque natus
                                        error, rerum quas odio quaerat nam ex in in a veritatis pariatur minus
                                        consequuntur!
                                    </p>
                                </div>
                            </div>
                            <div
                                className="max-w-md pt-4 pb-8 px-8 feature-card border border-blue-400 shadow-lg
                            rounded-lg mx-20 my-20"
                            >
                                <div className="flex justify-center md:justify-end -mt-16">
                                    <img
                                        className="w-20 h-20 object-cover rounded-full border-2 border-blue-400
                                        bg-gray-800 p-2"
                                        src={deposit}
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <h2 className="text-blue-400 text-3xl font-semibold">Deposit</h2>
                                    <p className="mt-2 text-white">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. ea ea doloremque natus
                                        error, rerum quas odio quaerat nam ex pariatur minus consequuntur!
                                    </p>
                                </div>
                            </div>
                            <div
                                className="max-w-md pt-4 pb-8 px-8 feature-card border border-blue-400 shadow-lg
                            rounded-lg mx-20 my-20"
                            >
                                <div className="flex justify-center md:justify-end -mt-16">
                                    <img
                                        className="w-20 h-20 object-cover rounded-full border-2 border-blue-400
                                        bg-gray-800 p-2"
                                        src={balance}
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <h2 className="text-blue-400 text-3xl font-semibold">Rebalance</h2>
                                    <p className="mt-2 text-white">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt
                                        Quae dolores deserunt ea doloremque odious quaerat nam ex commodi hic, suscipit
                                        in a veritatis in a veritatis pariatur minus consequuntur!
                                    </p>
                                </div>
                            </div>
                            <div
                                className="max-w-md pt-4 pb-8 px-8 feature-card border border-blue-400 shadow-lg
                            rounded-lg mx-20 my-20"
                            >
                                <div className="flex justify-center md:justify-end -mt-16">
                                    <img
                                        className="w-20 h-20 object-cover rounded-full border-2 border-blue-400
                                        bg-gray-800 p-2"
                                        src={redeem}
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <h2 className="text-blue-400 text-3xl font-semibold">Redeem</h2>
                                    <p className="mt-2 text-white">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. ea ea doloremque natus
                                        error, rerum quas odio quaerat nam ex in in a veritatis pariatur minus
                                        consequuntur!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

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
                            Benefits
                        </h2>

                        <div className="container mx-auto flex justify-around">
                            <p className="w-2/5 text-2xl">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autumn distinctio dolore
                                ducimus et ex harum hic, iure labore laudanum magni natus nihil, magni natus nihil,
                                magni natus nihil, nobs officiis porro provident qui quia quos qui quia quos reiciendis
                                repellat repellendus rerum sint tempora vero voluptatum.
                                <br />
                                <br />
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipose corporis culpa
                                cupiditate deserunt dolore ducimus ea eaque enum incidunt iusto, magnam modi
                                necessitatibus odio odit officia omnibus quas quo quod quas quo quod quas quo quod quas
                                quo quod quas quo quod reprehended saepe sit asperiores aut corporis delectus
                                dignissimos dolor eius expedita fugiat, labore libero nemo quo repellat ut voluptate.
                                voluptate. Inventore, laudantium?
                                <br />
                                <br />
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci aperiam asperiores
                                dolore, dolorem eos id inventore ipsum iure mollitia nemo pariatur porro!
                            </p>
                            <img
                                src={strategyIllustration}
                                alt="illustrates a man making bussiness decisions"
                                className="w-2/5"
                            />
                        </div>
                    </div>
                </section>
            </main>
            <FooterComponent />
        </>
    );
};

export default Landing;
