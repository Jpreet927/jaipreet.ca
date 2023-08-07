"use client";

import React from "react";

const BusinessCard = () => {
    const handleMouseOver = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ): void => {
        console.log(e);
    };

    return (
        <div
            className="flex flex-col justify-between h-[40%] sm:min-h-[300px] sm:min-w-[450px] min-h-[250px] min-w-[400px] max-w-[700px] w-full lg:absolute static top-[30%] left-0 bg-black/50 xl:p-12 sm:p-8 p-6 backdrop-blur-xl border-slate-700/40 rounded-xl border hover:bg-black/40 hover:scale-[0.97] transition ease-in-out duration-700"
            onMouseOver={(e) => handleMouseOver(e)}
        >
            <div className="flex gap-6">
                <div className="flex flex-col xl:gap-6 gap-2 w-[50%]">
                    <h3 className="sm:text-3xl text-2xl font-bold">
                        JAIPREET SINGH
                    </h3>
                    <div className="text-xs">
                        <p className="text-xs opacity-75">Software Developer</p>
                        <p className="text-xs opacity-75">Graphic Designer</p>
                    </div>
                    <p className="text-xs opacity-75">Toronto, ON</p>
                </div>
                <div className="flex flex-col xl:gap-6 gap-2 w-[50%]">
                    <div>
                        <p className="text-xs opacity-75">Email</p>
                        <p className="text-xs font-bold">
                            JaipreetBSingh@gmail.com
                        </p>
                    </div>
                    <div>
                        <p className="text-xs opacity-75">LinkedIn</p>
                        <p className="text-xs font-bold">/in/JaipreetSingh</p>
                    </div>
                    <div>
                        <p className="text-xs opacity-75">Twitter</p>
                        <p className="text-xs font-bold">@jpreet_</p>
                    </div>
                    <div>
                        <p className="text-xs opacity-75">Instagram</p>
                        <p className="text-xs font-bold">@jpreetcreate</p>
                    </div>
                </div>
            </div>
            <div className="bg-white w-full h-[1px]"></div>
        </div>
    );
};

export default BusinessCard;
