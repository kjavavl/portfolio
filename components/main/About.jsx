import { motion } from 'framer-motion'
import React, { useContext, useEffect } from 'react'
import GraphemeSplitter from "grapheme-splitter";
import GlobalState, { doIt } from "../GlobalState";
import Typewriter from 'typewriter-effect';
import { InView } from "react-intersection-observer";

function About() {

    const [elements, setElements] = useContext(GlobalState);

    const stringSplitter = string => {
        const splitter = new GraphemeSplitter();
        return splitter.splitGraphemes(string);
    };
    return (
        <InView as="div" threshold={0.5} onChange={(inView, entry) => doIt(inView, 0, elements, setElements)}>
            <motion.div initial={{ x: -10 }} animate={{ x: 0 }} transition={{ ease: "easeInOut" }} id="about-sec" className="w-full h-full flex flex-col">
                <div className="py-8 sm:h-16 h-12 w-full " />
                <div className="sm:px-20 px-4 pt-24 h-full w-full bg-gray-100 text-gray-900 sm:rounded-tl-md flex flex-col">
                    <img src="/assets/profile.jpeg" style={{ width: "120px" }} className="rounded-full" />
                    <div className="sm:text-4xl text-2xl text-gray-900 font-semibold pt-16">
                        <p>Hey 👋🏼! I Am Ayoub.</p>
                        <div className="h-32">
                            <Typewriter
                                options={{
                                    strings: ['I Am A Software Engineer.<br>& I Make Apps.', 'I Build Mobile Applications.<br>& Web Ones As Well.'],
                                    autoStart: true,
                                    loop: true,
                                    stringSplitter,
                                }}
                            />
                        </div>

                        {/* 
                        <p>I Am A Software Engineer.</p>
                        <p>& I Make Apps.<span className="font-extrabold animate-pulse">|</span></p> */}
                    </div>
                </div>
                <div className="sm:px-20 px-4 pt-24 bg-gray-100 text-pink-600 text-base font-semibold">
                    ABOUT
                </div>
                <div className="sm:px-20 px-4 pt-10 bg-gray-100 text-gray-700">
                    Well, I am a software engineer. I build mobile apps mainly using Flutter, I build websites using React and Next.js and I have worked on APIs using JEE.
                    The most thing I like about programming is the challenges that come my way and the amount of happiness I get after solving them.
                </div>
                <div className="sm:px-20 px-4 pt-5 bg-gray-100 w-full text-4xl text-gray-900">
                    <img src="/assets/Moussaid Ayoub.png" style={{ width: "250px" }} />
                </div>
                <div className="sm:px-20 px-4 pt-10 pb-20 bg-gray-100 text-gray-700">
                    Find me on <a className="hover:underline" href="https://www.linkedin.com/in/ayoub-moussaid/"><b>LinkedIn</b></a> & <a className="hover:underline" href="https://twitter.com/ayoubmoussaid6"><b>Twitter</b></a>.
                </div>
            </motion.div>
        </InView>
    )
}


export default About