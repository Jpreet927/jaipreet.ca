import { Artwork } from "@/data/design";
import Image from "next/image";
import React from "react";

const GalleryImage = ({ img }: { img: Artwork }) => {
    return (
        <div className="relative hover:scale-[0.99] transition-all ease-in-out duration-500 cursor-pointer">
            <div className="absolute bottom-0 left-0 h-[75%] w-full bg-gradient-to-t from-black to-black-0 opacity-0 hover:opacity-50 transition ease-out duration-500"></div>
            <Image
                src={img.src}
                alt={img.title}
                style={{ marginBottom: "16px" }}
            />
        </div>
    );
};

export default GalleryImage;
