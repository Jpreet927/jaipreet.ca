"use client";

import Image from "next/image";
import React from "react";
import ticket from "@/assets/branding/Ticket.jpg";
import me from "@/assets/me.jpg";
import { playfair } from "@/util/fonts";
import Sinewave from "@/components/about/sinewave";
import TransformBox from "@/components/about/transformbox";
import HTMLTag from "@/components/about/htmltag";
import { motion } from "framer-motion";

const AboutPage = () => {
    return (
        <main className="w-screen flex flex-col">
            <section className="relative overflow-hidden w-screen h-screen flex px-64 justify-center items-center gap-24">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute bottom-0 right-0 w-[1750px] h-[1750px] translate-x-[50%] translate-y-[50%] bg-gradient-1 blur-[10rem] rounded-full animate-gradient-pulse-1"></div>
                    <div className="absolute bottom-0 right-[25%] w-[500px] h-[500px] translate-y-[50%] bg-gradient-2 blur-[10rem] rounded-full"></div>
                    <div className="absolute bottom-[50%] right-0 w-[500px] h-[500px] translate-x-[75%] translate-y-[50%] bg-gradient-3 blur-[10rem] rounded-full animate-gradient-pulse-2"></div>
                    <div className="absolute bottom-[33%] right-[10%] w-[250px] h-[250px] translate-x-[50%] translate-y-[50%] bg-gradient-4 blur-[10rem] rounded-full animate-gradient-pulse-3"></div>
                    <div className="absolute bottom-0 right-0 w-[250px] h-[250px] translate-x-[50%] translate-y-[50%] bg-white blur-[10rem] rounded-full animate-gradient-pulse-4"></div>
                </div>
                <div className="flex flex-col gap-2 w-[50%]">
                    <motion.p className="opacity-75">
                        Thanks for visiting my portfolio! Here you can learn
                        more...
                    </motion.p>
                    <h1 className={`${playfair.className} text-8xl font-bold`}>
                        About Me, Jaipreet Singh
                    </h1>
                </div>
                <div className="w-[50%] h-full flex justify-center items-center">
                    <div className="h-[250px] w-[100%] relative flex-grow rotate-3">
                        <Image
                            src={ticket}
                            fill={true}
                            objectFit="contain"
                            alt="Jpreet Ticket Image"
                        />
                    </div>
                </div>
            </section>
            <section className="flex flex-col px-80 py-24 gap-24">
                <div className="flex gap-12">
                    <div className="w-[50%] flex flex-col gap-16 [&>p]:opacity-75">
                        <h1
                            className={`${playfair.className} text-7xl font-bold`}
                        >
                            "Lorem Ipsum"
                        </h1>
                        <p>
                            My name is Jaipreet and I'm a full-stack software
                            developer based in Toronto, Ontario, Canada. I
                            specialize in creating beautiful, user-first digital
                            experiences using web technologies.
                        </p>
                        <p>
                            I absolutely love learning and embarking on new
                            adventures to keep up with the latest tech and
                            improve myself as a developer. I'm currently
                            exploring Next.js, Tailwind CSS, and animation
                            libraries like Framer Motion!
                        </p>
                        <p>
                            My main hustle outside of work is graphic design,
                            meaning I pretty much spend all day at my computer.
                            Otherwise I'm probably at the gym, reading, taking
                            photos, playing my guitar, or watching anime
                            (Gintama atm) :)
                        </p>
                    </div>
                    <div className="w-[50%] px-24 flex flex-col gap-4">
                        <Image src={me} alt="Porttrait of Jaipreet" />
                        <p className="opacity-75 italic font-light text-xs">
                            A photo from my most recent trip to Japan! Taken by
                            Suraj Goraya.
                        </p>
                    </div>
                </div>
                <div className="bg-white/25 h-[1px] w-full"></div>
                <div className="flex justify-between gap-12 w-full">
                    <div className="flex flex-col gap-4 w-[33%]">
                        <Sinewave />
                        <h3 className="text-xl font-bold">Engineer By Trade</h3>
                        <p className="opacity-75">
                            Leaning on my strengths in Math & Physics, I entered
                            university enrolled in an Electrical Engineering
                            program. Powering through a rigorous curriculum and
                            interning at various companies granted me the
                            opportunities to tackle complex problems and to work
                            with teams of engineers to achieve a common goal.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 w-[33%]">
                        <TransformBox />
                        <h3 className="text-xl font-bold">Creative At Heart</h3>
                        <p className="opacity-75">
                            I’ve been a creator ever since I was a child. I
                            would spend hours drawing my favourite anime
                            characters, filling out my sketchbooks. As I got
                            older, I ventured into digital art using Photoshop,
                            specializing in photomanipulation and graphic
                            design, and eventually building a freelance client
                            base. You can view some of my work on my Behance
                            profile!
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 w-[33%]">
                        <HTMLTag />
                        <h3 className="text-xl font-bold">
                            The Perfect Fusion
                        </h3>
                        <p className="opacity-75">
                            A couple years ago I eventually found myself getting
                            into web development. Given my extensive background
                            in graphic design and my education in Engineering I
                            was able to catch on pretty quick and it felt like
                            the perfect path to pursue moving forward, enabling
                            me to exercise my problem solving skills while
                            allowing me to express my creativity.
                        </p>
                    </div>
                </div>
                <div className="bg-white/25 h-[1px] w-full"></div>
            </section>
        </main>
    );
};

export default AboutPage;
