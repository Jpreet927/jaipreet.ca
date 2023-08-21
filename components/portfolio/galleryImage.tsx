import { Artwork } from "@/data/design";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const GalleryImage = ({ img }: { img: Artwork }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 1,
                delay: 0.5,
                ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="relative hover:scale-[0.99] transition-all ease-in-out duration-500 cursor-pointer"
        >
            <div className="absolute bottom-0 left-0 h-[75%] w-full bg-gradient-to-t from-black to-black-0 opacity-0 hover:opacity-50 transition ease-out duration-500"></div>
            <Image
                src={img.src}
                alt={img.title}
                style={{ marginBottom: "16px" }}
                quality={10}
                placeholder="blur"
            />
        </motion.div>
    );
};

export default GalleryImage;
