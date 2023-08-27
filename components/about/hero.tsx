import React from "react";
import { motion } from "framer-motion";
import { playfair } from "@/util/fonts";
import Image from "next/image";
import ticket from "@/assets/branding/Ticket.jpg";

const containerVariant = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { delayChildren: 0.1, staggerChildren: 0.5 },
    },
};

const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    show: (opacityVal: number) => ({
        opacity: opacityVal ? opacityVal : 1,
        y: 0,
        transition: { duration: 1 },
    }),
};

const Hero = () => {
    return (
        <div>
            <section className="relative overflow-hidden w-screen h-screen bg-banner-image bg-cover md:bg-center bg-right-bottom flex xl:flex-row flex-col xl:px-64 lg:px-32 md:px-16 px-8 justify-center items-center xl:gap-12 gap-4 text-left">
                <motion.div
                    variants={containerVariant}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col gap-2 lg:w-[50%] md:w-[75%] w-full"
                >
                    <motion.p
                        variants={itemVariant}
                        custom={0.75}
                        className="opacity-50"
                    >
                        Thanks for visiting my portfolio! Here you can learn
                        more...
                    </motion.p>
                    <motion.h1
                        variants={itemVariant}
                        className={`${playfair.className} md:text-7xl text-6xl font-bold`}
                    >
                        About Me,
                    </motion.h1>
                    <motion.h1
                        variants={itemVariant}
                        className={`${playfair.className} md:text-7xl text-6xl font-bold`}
                    >
                        Jaipreet Singh
                    </motion.h1>
                </motion.div>
                <div className="lg:w-[50%] md:w-[75%] w-full xl:h-full h-[25%] md:flex hidden justify-center items-center">
                    <div className="h-[250px] w-[100%] relative flex-grow">
                        <Image
                            src={ticket}
                            fill={true}
                            objectFit="contain"
                            alt="Jpreet Ticket Image"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
