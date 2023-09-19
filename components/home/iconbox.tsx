import Image, { StaticImageData } from "next/image";
import React from "react";

const IconBox = ({
    iconPath,
    iconAlt,
}: {
    iconPath: StaticImageData;
    iconAlt: string;
}) => {
    return (
        <div className="relative aspect-square flex justify-center items-center bg-slate-700/10 rounded-xl border-white/5 border hover:-translate-y-2 transition-transform ease-in-out duration-500">
            <Image
                src={iconPath}
                alt={iconAlt}
                objectFit="contain"
                className="w-[40%]"
            />
            <div className="flex justify-center items-center w-full h-full absolute top-0 left-0">
                <Image
                    src={iconPath}
                    alt={iconAlt}
                    className="blur-xl w-[60%] opacity-40 hover:opacity-60 transition-opacity ease-in-out duration-500"
                    objectFit="contain"
                />
            </div>
        </div>
    );
};

export default IconBox;
