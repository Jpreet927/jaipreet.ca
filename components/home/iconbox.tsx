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
        <div className="relative 2xl:p-8 xl:p-6 sm:p-10 p-5 bg-slate-700/10 rounded-xl border-white/5 border hover:-translate-y-2 transition-transform ease-in-out duration-500">
            <Image src={iconPath} alt={iconAlt} objectFit="contain" />
            <Image
                src={iconPath}
                alt={iconAlt}
                className="absolute top-0 left-0 blur-xl 2xl:p-8 xl:p-6 sm:p-10 p-6 opacity-60 hover:opacity-90 transition-opacity ease-in-out duration-500"
                objectFit="contain"
            />
        </div>
    );
};

export default IconBox;
