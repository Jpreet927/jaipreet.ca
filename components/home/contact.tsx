"use client";

import React from "react";
import { playfair } from "@/util/fonts";
import BusinessCard from "./businesscard";
import GridLine from "../gridline";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <section className="h-screen w-full relative flex justify-center items-center overflow-hidden">
            <div className="w-full max-w-[2560px] xl:px-64 lg:px-32 md:px-16 px-4 flex z-10 items-center lg:flex-row flex-col lg:gap-0 gap-12">
                <div className="lg:w-[50%] w-[100%] flex flex-col gap-4 px-8">
                    <h1
                        className={`${playfair.className} sm:text-7xl text-5xl font-bold`}
                    >
                        Let's Talk
                    </h1>
                    <p className="opacity-75 sm:text-base text-sm">
                        If you'd like to get in touch with me, you can shoot me
                        an email or contact me through social media!
                    </p>
                </div>
                <div className="lg:w-[50%] w-[100%] lg:h-full h-[25%] flex justify-center items-center px-8 relative lg:pb-[75%] pb-0">
                    <BusinessCard />
                </div>
            </div>
            <motion.div
                initial={{ y: 500, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
                className="absolute top-0 left-0 w-full h-full flex justify-between xl:px-64 lg:px-32 md:px-8"
            >
                <GridLine />
                <GridLine />
                <GridLine />
                <GridLine />
                <GridLine />
            </motion.div>
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute bottom-0 right-0 w-[1750px] h-[1750px] translate-x-[50%] translate-y-[50%] bg-gradient-1 blur-[10rem] rounded-full animate-gradient-pulse-1"></div>
                <div className="absolute bottom-0 right-[25%] w-[500px] h-[500px] translate-y-[50%] bg-gradient-2 blur-[10rem] rounded-full"></div>
                <div className="absolute bottom-[50%] right-0 w-[500px] h-[500px] translate-x-[75%] translate-y-[50%] bg-gradient-3 blur-[10rem] rounded-full animate-gradient-pulse-2"></div>
                <div className="absolute bottom-[33%] right-[10%] w-[250px] h-[250px] translate-x-[50%] translate-y-[50%] bg-gradient-4 blur-[10rem] rounded-full animate-gradient-pulse-3"></div>
                <div className="absolute bottom-0 right-0 w-[250px] h-[250px] translate-x-[50%] translate-y-[50%] bg-white blur-[10rem] rounded-full animate-gradient-pulse-4"></div>
            </div>
        </section>
    );
};

export default Contact;
