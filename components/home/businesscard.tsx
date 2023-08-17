"use client";

import React, { useRef } from "react";

const BusinessCard = () => {
    const ref = useRef<HTMLDivElement>(null);

    const handleMouseOver = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ): void => {
        let boundingRect;
        if (ref.current) {
            boundingRect = ref.current.getBoundingClientRect();
            const width = ref.current.offsetWidth;
            const height = ref.current.offsetHeight;

            const centerX = boundingRect.left + width / 2;
            const centerY = boundingRect.top + height / 2;
            const mouseX = e.clientX - centerX;
            const mouseY = e.clientY - centerY;

            const rotateX = (15 * mouseY) / (height / 2);
            const rotateY = (-1 * (15 * mouseX)) / (width / 2);

            ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }
    };

    const handleMouseLeave = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (ref.current) {
            ref.current.style.transform = `none`;
        }
    };

    return (
        <div
            className="flex flex-col justify-between h-[40%] sm:min-h-[300px] sm:min-w-[450px] min-h-[250px] min-w-[400px] max-w-[700px] w-full lg:absolute static top-[30%] left-0 bg-black/50 xl:p-12 sm:p-8 p-6 backdrop-blur-xl border-slate-700/40 rounded-xl border transform-none hover:bg-black/40 hover:scale-[0.97] transition duration-300 ease-[cubic-bezier(0.03,0.98,0.52,0.99)]"
            onMouseOver={(e) => handleMouseOver(e)}
            onMouseLeave={(e) => handleMouseLeave(e)}
            ref={ref}
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
