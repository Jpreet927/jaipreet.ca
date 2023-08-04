import { playfair } from "@/util/fonts";
import React from "react";
import ProjectCard from "./projectcard";
import GridLine from "../gridline";

const Projects = () => {
    return (
        <div className="relative flex flex-col gap-12 px-64 py-24">
            <div className="absolute top-0 left-0 w-full h-full px-64 flex gap-4">
                <div className="flex w-full justify-between">
                    <GridLine />
                    <GridLine />
                </div>
                <div className="flex w-full justify-between">
                    <GridLine />
                    <GridLine />
                </div>
            </div>
            <h1
                className={`${playfair.className} text-7xl font-bold self-center`}
            >
                Projects
            </h1>
            <div className="flex gap-4">
                <div className="flex flex-col gap-4">
                    <ProjectCard />
                    <ProjectCard />
                </div>
                <div className="flex flex-col gap-4">
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
        </div>
    );
};

export default Projects;
