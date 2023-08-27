"use client";

import { playfair } from "@/util/fonts";
import React from "react";
import ProjectCard from "./projectcard";
import GridLine from "../gridline";
import Link from "next/link";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <div className="relative flex flex-col items-center gap-12 xl:px-64 lg:px-32 md:px-16 px-8 py-24">
            <div className="w-full h-[25%] absolute bottom-0 left-0 bg-gradient-to-t from-background to-black-0 z-10"></div>
            <motion.div
                initial={{ scaleY: 0, opacity: 0 }}
                whileInView={{ scaleY: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
                className="absolute top-0 left-0 w-full h-full xl:px-64 lg:px-32 md:px-16 px-8 flex gap-4"
            >
                <div className="flex w-full justify-between">
                    <GridLine />
                    <GridLine />
                </div>
                <div className="flex w-full justify-between">
                    <GridLine />
                    <GridLine />
                </div>
            </motion.div>
            <div className="md:w-[50%] w-[80%] flex flex-col items-center gap-12">
                <h1
                    className={`${playfair.className} sm:text-7xl text-5xl font-bold self-center`}
                >
                    Projects
                </h1>
                <p className="opacity-75 text-center sm:text-base text-sm">
                    Below you can find some of my most notable personal and
                    academic projects. Source code for software projects can be
                    found on my Github!
                </p>
            </div>
            <div className="z-20 flex flex-col gap-12 items-center">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                    {projects.map((project, index) => {
                        return (
                            <div key={index}>
                                <ProjectCard project={project} />
                            </div>
                        );
                    })}
                </div>
                <Link href="/portfolio/development">
                    <button className="px-8 py-4 bg-white rounded-full text-black font-bold hover:bg-gray-200 hover:-translate-y-1 transition ease-in-out duration-300">
                        View More
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Projects;
