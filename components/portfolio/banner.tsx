import React from "react";
import Image, { StaticImageData } from "next/image";
import bg from "@/assets/branding/Personal-Website-Gradient.jpg";
import { playfair } from "@/util/fonts";

const Banner = ({
    banner,
    title,
}: {
    banner: { src: StaticImageData; alt: string };
    title: string;
}) => {
    return (
        <div className="relative h-[50vh] flex items-center w-screen bg-background overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-30">
                <h1
                    className={`${playfair.className} md:text-6xl text-5xl font-bold`}
                >
                    {title}
                </h1>
            </div>
            <div className="w-full h-full scale-[1.1] hover:scale-[1.05] transition-all ease-in-out duration-700 z-10">
                <Image
                    src={banner.src}
                    alt={banner.alt}
                    quality={75}
                    draggable={false}
                    className="h-full"
                    style={{ objectFit: "cover" }}
                />
            </div>
            <div className="absolute top-0 left-0 w-full h-[50%] bg-gradient-to-b from-black to-black/0 opacity-75 z-20"></div>
        </div>
    );
};

export default Banner;
