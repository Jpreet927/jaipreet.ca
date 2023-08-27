import React from "react";
import { playfair } from "@/util/fonts";
import Image from "next/image";
import me from "@/assets/me.jpg";
import Sinewave from "@/components/about/sinewave";
import TransformBox from "@/components/about/transformbox";
import HTMLTag from "@/components/about/htmltag";

const AboutMe = () => {
    return (
        <section className="flex flex-col xl:px-64 lg:px-32 md:px-16 px-8 py-24 gap-24">
            <div className="flex lg:flex-row flex-col gap-12">
                <div className="lg:w-[50%] lg:px-0 px-0 w-full flex flex-col gap-16 [&>p]:opacity-75">
                    <h1
                        className={`${playfair.className} md:text-7xl text-5xl font-bold`}
                    >
                        "Who Am I?"
                    </h1>
                    <p className="leading-7 sm:text-base text-sm">
                        My name is Jaipreet and I'm a full-stack software
                        developer based in Toronto, Ontario, Canada. I
                        specialize in creating beautiful, user-first digital
                        experiences using web technologies.
                    </p>
                    <p className="leading-7 sm:text-base text-sm">
                        I absolutely love learning and embarking on new
                        adventures to keep up with the latest tech and improve
                        myself as a developer. I'm currently exploring Next.js,
                        Tailwind CSS, and animation libraries like Framer
                        Motion!
                    </p>
                    <p className="leading-7 sm:text-base text-sm">
                        My main hustle outside of work is graphic design and
                        digital art, meaning I pretty much spend all day at my
                        computer. Otherwise I'm probably at the gym, reading,
                        taking photos, playing my guitar, or watching anime
                        (Gintama atm) 😊
                    </p>
                </div>
                <div className="lg:w-[50%] w-full 2xl:px-24 xl:px-12 lg:px-6 md:px-36 px-12 sm:flex hidden flex-col gap-4">
                    <Image src={me} alt="Portrait of Jaipreet" />
                    <p className="opacity-75 font-light text-xs">
                        A photo from my most recent trip to Japan! Taken by
                        Suraj Goraya.
                    </p>
                </div>
            </div>
            <div className="bg-white/25 h-[1px] w-full"></div>
            <div className="flex xl:flex-row flex-col justify-between gap-12 w-full">
                <div className="flex flex-col gap-4 xl:w-[33%] w-full">
                    <Sinewave />
                    <h3 className="text-xl font-bold">
                        My Academic Background
                    </h3>
                    <p className="opacity-75 leading-7 sm:text-base text-sm">
                        Leaning on my strengths in Math & Physics, I entered
                        university enrolled in an Electrical Engineering
                        program. Powering through a rigorous curriculum and
                        interning at various companies granted me the
                        opportunities to tackle complex problems and to work
                        with teams of engineers to achieve a common goal.
                    </p>
                </div>
                <div className="flex flex-col gap-4 xl:w-[33%] w-full">
                    <TransformBox />
                    <h3 className="text-xl font-bold">A Creative At Heart</h3>
                    <p className="opacity-75 leading-7 sm:text-base text-sm">
                        I’ve been a creator ever since I was a child. I would
                        spend hours drawing my favourite cartoon/anime
                        characters, filling out my sketchbooks. As I got older,
                        I ventured into digital art using Photoshop,
                        specializing in photomanipulation and graphic design,
                        and eventually building a freelance client base. You can
                        view some of my work on my Behance profile!
                    </p>
                </div>
                <div className="flex flex-col gap-4 xl:w-[33%] w-full">
                    <HTMLTag />
                    <h3 className="text-xl font-bold">
                        My Journey as a Developer
                    </h3>
                    <p className="opacity-75 leading-7 sm:text-base text-sm">
                        A couple years ago I eventually found myself getting
                        into web development. Given my extensive background in
                        graphic design and my education in Engineering I was
                        able to catch on pretty quick and it felt like the
                        perfect path to pursue moving forward, where I can
                        exercise my problem solving skills while expressing my
                        creative side.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
