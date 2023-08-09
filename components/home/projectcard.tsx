import Image, { StaticImageData } from "next/image";
import React from "react";
import lrr from "@/assets/images/LRR-Gameday.png";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Link from "next/link";

export interface Project {
    title: string;
    description: string;
    category: string;
    src: StaticImageData;
    link: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <div className="relative group overflow-hidden h-[400px] w-full">
            <div className=" absolute bottom-0 left-0 h-[75%] w-full bg-gradient-to-t from-black to-black-0 opacity-50 group-hover:opacity-90 transition ease-out duration-500"></div>
            <div className="absolute bottom-0 left-0 p-4 w-full flex flex-col gap-1 group">
                <p className="text-[0.6rem] tracking-[0.2rem] opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition ease-in-out duration-700">
                    {project.category.toUpperCase()}
                </p>
                <div className="flex justify-between translate-y-10 group-hover:translate-y-0 transition ease-in-out duration-700">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <Link href={project.link} target="_blank">
                        <ArrowOutwardIcon />
                    </Link>
                </div>
                <p className="text-xs opacity-0 translate-y-10 group-hover:opacity-75 group-hover:translate-y-0 transition ease-in-out duration-700">
                    {project.description}
                </p>
            </div>
            <Image
                src={project.src}
                alt={project.title}
                style={{ objectFit: "cover", height: "100%" }}
            />
        </div>
    );
};

export default ProjectCard;
