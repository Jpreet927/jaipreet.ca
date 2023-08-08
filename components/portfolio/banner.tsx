import React from "react";
import Image, { StaticImageData } from "next/image";
import bg from "@/assets/branding/Personal-Website-Gradient.jpg";
import { playfair } from "@/util/fonts";

const Banner = ({
    images,
    title,
}: {
    images: { title: string; src: StaticImageData }[];
    title: string;
}) => {
    return (
        <div className="relative h-[66vh] flex items-center w-screen bg-background overflow-hidden">
            <div className="absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] z-30">
                <h1 className={`${playfair.className} text-6xl font-bold`}>
                    {title}
                </h1>
            </div>
            <div className="grid grid-cols-4 w-full scale-[1.1] gap-16 opacity-60 hover:scale-[1.05] transition-all ease-in-out duration-700 z-10">
                {images.slice(0, 8).map((img) => (
                    <Image
                        src={img.src}
                        alt={img.title}
                        quality={10}
                        draggable={false}
                    />
                ))}
            </div>
            <div className="absolute top-0 left-0 w-full h-[50%] bg-gradient-to-b from-black to-black/0 opacity-75 z-20"></div>
            <div className="absolute top-0 left-0 opacity-20 h-full">
                <Image
                    src={bg}
                    alt="Background Image"
                    style={{ objectFit: "cover" }}
                />
            </div>
        </div>
    );
};

export default Banner;
