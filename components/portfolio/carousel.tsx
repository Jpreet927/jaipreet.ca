"use client";

import React, { useState } from "react";
import { Artwork, artwork } from "@/data/design";
import Image from "next/image";
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
    index = 0,
    closeCarousel,
}: {
    images: Artwork[];
    index: number;
    closeCarousel: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const [currentIndex, setCurrentIndex] = useState(index);
    const [currentImage, setCurrentImage] = useState(images[currentIndex]);

    const setNextImage = () => {
        console.log(currentIndex);
        setCurrentIndex((currentIndex + 1) % artwork.length);
        setCurrentImage(images[currentIndex]);
    };

    const setPrevImage = () => {
        console.log(currentIndex);
        setCurrentIndex((currentIndex - 1 + artwork.length) % artwork.length);
        setCurrentImage(images[currentIndex]);
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
                    className="max-w-[80%] h-full relative py-12"
                >
                    <Image
                        src={currentImage.src}
                        alt={currentImage.title}
                        width={0}
                        height={0}
                        quality={50}
                        sizes="100vw"
                        style={{ width: "100%", height: "100%" }}
                    />
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default Carousel;
