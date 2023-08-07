{
    /* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div> */
}

import React from "react";
import { playfair } from "@/util/fonts";
import BusinessCard from "./businesscard";
import GridLine from "../gridline";

const Contact = () => {
    return (
        <section className="h-screen w-full relative grid items-center overflow-hidden">
            <div className="w-full xl:px-64 lg:px-32 md:px-16 px-8 flex z-10 items-center lg:flex-row flex-col lg:gap-0 gap-12">
                <div className="lg:w-[50%] w-[100%] flex flex-col gap-4 px-8">
                    <h1 className={`${playfair.className} text-7xl font-bold`}>
                        Let's Talk
                    </h1>
                    <p className="opacity-75">
                        If you'd like to get in touch with me, you can shoot me
                        an email or contact me through social media!
                    </p>
                </div>
                <div className="lg:w-[50%] w-[100%] lg:h-full h-[25%] flex justify-center items-center px-8 relative lg:pb-[75%] pb-0">
                    <BusinessCard />
                </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex justify-between xl:px-64 lg:px-32 md:px-8">
                <GridLine />
                <GridLine />
                <GridLine />
                <GridLine />
                <GridLine />
            </div>
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute bottom-0 right-0 w-[1750px] h-[1750px] translate-x-[50%] translate-y-[50%] bg-gradient-1 blur-[10rem] rounded-full animate-gradient-pulse-1"></div>
                <div className="absolute bottom-0 right-[25%] w-[500px] h-[500px] translate-y-[50%] bg-gradient-2 blur-[10rem] rounded-full"></div>
                <div className="absolute bottom-[50%] right-0 w-[500px] h-[500px] translate-x-[75%] translate-y-[50%] bg-gradient-3 blur-[10rem] rounded-full animate-gradient-pulse-2"></div>
                <div className="absolute bottom-[33%] right-[10%] w-[250px] h-[250px] translate-x-[50%] translate-y-[50%] bg-gradient-4 blur-[10rem] rounded-full animate-gradient-pulse-3"></div>
                <div className="absolute bottom-0 right-0 w-[250px] h-[250px] translate-x-[50%] translate-y-[50%] bg-white blur-[10rem] rounded-full animate-gradient-pulse-4"></div>
            </div>
        </section>
    );
};

export default Contact;
