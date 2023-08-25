"use client";

import React from "react";
import { playfair } from "@/util/fonts";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import {
    textOpacityLine,
    textOpacityChar,
    opacityTranslateY,
} from "@/util/framerVariants";

const Hero = () => {
    return (
        <section className="h-screen w-screen overflow-hidden">
            <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="bg-hero-image bg-cover bg-center h-screen w-screen flex flex-col justify-center xl:px-64 lg:px-32 md:px-16 px-8 overflow-y-hidden"
            >
                <div className="flex flex-col gap-4 sm:text-left text-center">
                    <motion.h1
                        variants={textOpacityLine}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1 }}
                        className={`${playfair.className} text-7xl font-bold`}
                    >
                        {"Hey, I'm Jaipreet".split("").map((char, index) => {
                            return (
                                <motion.span
                                    key={index}
                                    variants={textOpacityChar}
                                >
                                    {char}
                                </motion.span>
                            );
                        })}
                    </motion.h1>
                    <motion.p
                        variants={opacityTranslateY}
                        initial="hidden"
                        animate="visible"
                        custom={0.75}
                        transition={{ delay: 1.5, duration: 1 }}
                        className="opacity-75"
                    >
                        I’m a software developer & a graphic designer.
                    </motion.p>
                </div>
                <motion.div
                    variants={opacityTranslateY}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 2, duration: 1 }}
                    className="flex justify-between items-end absolute left-0 bottom-0 w-full xl:px-64 lg:px-32 md:px-16 px-8 py-24"
                >
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
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
