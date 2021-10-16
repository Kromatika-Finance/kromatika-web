import React from 'react';

import processSvg from '../../assets/img/process.svg';

const HowItWorks = ({ elRef }) => {
    return (
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

                <div className="container mx-auto flex justify-around">
                    <img src={processSvg} alt="describes the yield farming process" />

                    <p className="w-2/5 text-2xl">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autumn distinctio dolore ducimus et ex
                        harum hic, iure labore laudanum magni natus nihil, magni natus nihil, magni natus nihil, nobs
                        officiis porro provident qui quia quos qui quia quos reiciendis repellat repellendus rerum sint
                        tempora vero voluptatum.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipose corporis culpa cupiditate
                        deserunt dolore ducimus ea eaque enum incidunt iusto, magnam modi necessitatibus odio odit
                        officia omnibus quas quo quod quas quo quod quas quo quod quas quo quod quas quo quod
                        reprehended saepe sit asperiores aut corporis delectus dignissimos dolor eius expedita fugiat,
                        labore libero nemo quo repellat ut voluptate. voluptate. Inventore, laudantium?
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci aperiam asperiores dolore,
                        dolorem eos id inventore ipsum iure mollitia nemo pariatur porro!
                    </p>
                </div>
            </div>
        </section>
    );
};
export default HowItWorks;
