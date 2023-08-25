import Link from "next/link";
import React from "react";
import { inter } from "../util/fonts";

const NotFound = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center relative overflow-hidden">
            <div className="flex items-center justify-center gap-12 z-10 w-[33%]">
                <h1
                    className={`${inter.className} md:text-8xl text-5xl font-bold`}
                >
                    404
                </h1>
                <div className="h-[125px] w-[1px] bg-white/50"></div>
                <div className="flex flex-col gap-4">
                    <p>
                        Hey, you might be lost. The page you're looking for
                        doesn't exist.
                    </p>
                    <Link href="/">
                        <button className="px-4 py-3 bg-white rounded-full text-black font-bold text-xs hover:bg-gray-200 hover:-translate-y-1 transition ease-in-out duration-300">
                            Back to Home
                        </button>
                    </Link>
                </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute bottom-0 right-0 w-[1750px] h-[1750px] translate-x-[50%] translate-y-[50%] bg-gradient-1 blur-[10rem] rounded-full animate-gradient-pulse-1"></div>
                <div className="absolute bottom-0 right-[25%] w-[500px] h-[500px] translate-y-[50%] bg-gradient-2 blur-[10rem] rounded-full"></div>
                <div className="absolute bottom-[50%] right-0 w-[500px] h-[500px] translate-x-[75%] translate-y-[50%] bg-gradient-3 blur-[10rem] rounded-full animate-gradient-pulse-2"></div>
                <div className="absolute bottom-[33%] right-[10%] w-[250px] h-[250px] translate-x-[50%] translate-y-[50%] bg-gradient-4 blur-[10rem] rounded-full animate-gradient-pulse-3"></div>
                <div className="absolute bottom-0 right-0 w-[250px] h-[250px] translate-x-[50%] translate-y-[50%] bg-white blur-[10rem] rounded-full animate-gradient-pulse-4"></div>
            </div>
        </div>
    );
};

export default NotFound;
