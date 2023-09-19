"use client";

import React, { useEffect, useState } from "react";
import { Artwork } from "@/data/design";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
    enter: {
        x: -1000,
        opacity: 0,
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: {
        zIndex: 0,
        x: 1000,
        opacity: 0,
    },
};

const Carousel = ({
    images,
    index,
    closeCarousel,
}: {
    images: Artwork[];
    index: number;
    closeCarousel: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const [currentIndex, setCurrentIndex] = useState(index);

    const setNextImage = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const setPrevImage = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    return (
        <AnimatePresence initial={false}>
            <div className="fixed top-0 left-0 h-screen w-screen flex gap-16 justify-center items-center z-[60] bg-black overflow-y-hidden">
                <div className="absolute top-0 right-0 flex items-end justify-end px-12 py-6 w-full z-[61]">
                    <CloseIcon
                        onClick={() => closeCarousel(false)}
                        className="cursor-pointer"
                    />
                </div>
                <div className="absolute top-[50%] left-[5%] -translate-y-[50%] z-[61] border border-white/50 backdrop-blur-lg rounded-full h-[50px] w-[50px] flex items-center justify-center cursor-pointer hover:bg-gray-900/50 transition ease-in-out duration-500">
                    <button onClick={() => setPrevImage()}>
                        <ArrowBackIcon />
                    </button>
                </div>
                <div className="absolute top-[50%] right-[5%] -translate-y-[50%] z-[61] border border-white/50 backdrop-blur-lg rounded-full h-[50px] w-[50px] flex items-center justify-center cursor-pointer hover:bg-gray-900/50 transition ease-in-out duration-500">
                    <button onClick={() => setNextImage()}>
                        <ArrowForwardIcon />
                    </button>
                </div>
                <motion.div
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="w-[80%] h-[90%] flex justify-center items-center"
                >
                    <img
                        src={images[currentIndex].src.src}
                        alt={images[currentIndex].title}
                        className="max-h-full max-w-full w-auto h-auto"
                    />
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default Carousel;
