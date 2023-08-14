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
            <section className="relative overflow-hidden w-screen h-screen bg-banner-image bg-cover flex px-64 justify-center items-center gap-24">
                <motion.div
                    variants={containerVariant}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col gap-2 w-[50%]"
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
                        className={`${playfair.className} text-8xl font-bold`}
                    >
                        About Me,
                    </motion.h1>
                    <motion.h1
                        variants={itemVariant}
                        className={`${playfair.className} text-8xl font-bold`}
                    >
                        Jaipreet Singh
                    </motion.h1>
                </motion.div>
                <div className="w-[50%] h-full flex justify-center items-center">
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
