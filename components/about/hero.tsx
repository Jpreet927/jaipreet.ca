import React from "react";
import { motion } from "framer-motion";
import { playfair } from "@/util/fonts";
import Image from "next/image";
import ticket from "@/assets/branding/Ticket.jpg";
import { textOpacityChar, textOpacityLine } from "@/util/framerVariants";

const containerVariant = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { delayChildren: 0.1, staggerChildren: 0.5 },
    },
};

const itemVariant = {
    hidden: { opacity: 0 },
    show: (opacityVal: number) => ({
        opacity: opacityVal ? opacityVal : 1,
        transition: { duration: 1 },
    }),
};

const Hero = () => {
    return (
        <div>
            <section className="relative overflow-hidden w-screen h-screen bg-banner-image-2 bg-cover bg-center flex xl:flex-row flex-col xl:px-64 lg:px-32 md:px-16 px-8 justify-center items-center xl:gap-12 gap-4 text-left">
                <motion.div
                    variants={containerVariant}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col lg:w-[75%] md:w-[75%] w-full items-center text-center drop-shadow-2xl"
                >
                    <motion.p variants={itemVariant} custom={1}>
                        Thanks for visiting my portfolio!
                    </motion.p>
                    {/* <motion.h1
                        variants={itemVariant}
                        className={`${playfair.className} md:text-8xl text-6xl font-bold`}
                    >
                        Here, you can learn more about me.
                    </motion.h1> */}
                    <motion.h1
                        variants={textOpacityLine}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 2 }}
                        className={`${playfair.className} text-8xl font-bold`}
                    >
                        {"Here, you can learn more about me."
                            .split("")
                            .map((char, index) => {
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
                </motion.div>
            </section>
        </div>
    );
};

export default Hero;
