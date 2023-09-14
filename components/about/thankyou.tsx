import React from "react";
import { playfair } from "@/util/fonts";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import GridLine from "@/components/gridline";

const ThankYou = () => {
    return (
        <section className="relative overflow-hidden w-screen h-screen bg-black flex justify-center items-center">
            <div className="z-10 xl:w-[40%] w-[66%] flex flex-col justify-center items-center gap-12">
                <h1
                    className={`${playfair.className} 2xl:text-9xl lg:text-8xl sm:text-7xl text-5xl font-bold`}
                >
                    Thank you.
                </h1>
                <p className="text-center sm:text-base text-sm">
                    <span className="opacity-75">
                        I'm always open to new opportunities, feel free to
                        contact me at{" "}
                    </span>
                    <span className="opacity-100 font-bold">
                        JaipreetBSingh@gmail.com
                    </span>{" "}
                    <span className="opacity-75">
                        if you'd like to get in touch!
                    </span>
                </p>
                <div className="md:flex hidden lg:gap-24 gap-12 transition-opacity">
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
            <motion.div
                initial={{ y: 500, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
                className="absolute top-0 left-0 w-full h-full flex justify-between xl:px-64 lg:px-32 md:px-8"
            >
                {[...Array(8)].map((x, i) => (
                    <GridLine key={i} />
                ))}
            </motion.div>
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-56 left-[18%] w-[1200px] h-[1200px] bg-gradient-1 blur-[10rem] rounded-full"></div>
                <div className="absolute bottom-0 left-[25%] w-[500px] h-[500px] translate-y-[50%] bg-white opacity-50 blur-[10rem] rounded-full"></div>
                <div className="absolute bottom-[0] left-[0] w-[500px] h-[500px] translate-x-[75%] translate-y-[50%] bg-gradient-1 blur-[10rem] rounded-full animate-gradient-pulse-2"></div>
            </div>
        </section>
    );
};

export default ThankYou;
