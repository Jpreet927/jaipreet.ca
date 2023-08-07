import React from "react";
import { playfair } from "@/util/fonts";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Hero = () => {
    return (
        <div className="bg-hero-image bg-cover bg-center h-screen w-screen flex flex-col justify-center xl:px-64 lg:px-32 md:px-16 px-8 overflow-y-hidden">
            <div className="flex flex-col gap-4 sm:text-left text-center">
                <h1 className={`${playfair.className} text-7xl font-bold`}>
                    Hey, I'm Jaipreet
                </h1>
                <p className="opacity-75">
                    I’m a software developer & a graphic designer.
                </p>
            </div>
            <div className="flex justify-between items-end absolute left-0 bottom-0 w-full xl:px-64 lg:px-32 md:px-16 px-8 py-24">
                <p>
                    Based in <br />{" "}
                    <span className="font-bold">Toronto, ON</span>
                </p>
                <div className="md:flex hidden lg:gap-24 gap-8 transition-opacity">
                    <div className="flex gap-2 items-center">
                        <ArrowForwardIcon />
                        <a
                            className="opacity-75 hover:opacity-100 transition ease-in delay-400"
                            href="https://www.linkedin.com/in/jaipreetsingh/"
                            target="_blank"
                        >
                            LinkedIn
                        </a>
                    </div>
                    <div className="flex gap-2 items-center">
                        <ArrowForwardIcon />
                        <a
                            className="opacity-75 hover:opacity-100 transition ease-in delay-400"
                            href="https://github.com/Jpreet927"
                            target="_blank"
                        >
                            Github
                        </a>
                    </div>
                    <div className="flex gap-2 items-center">
                        <ArrowForwardIcon />
                        <a
                            className="opacity-75 hover:opacity-100 transition ease-in delay-400"
                            href="https://www.behance.net/jaipreet"
                            target="_blank"
                        >
                            Behance
                        </a>
                    </div>
                    <div className="flex gap-2 items-center">
                        <ArrowForwardIcon />
                        <a
                            className="opacity-75 hover:opacity-100 transition ease-in delay-400"
                            href="https://twitter.com/Jpreet_"
                            target="_blank"
                        >
                            Twitter
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
