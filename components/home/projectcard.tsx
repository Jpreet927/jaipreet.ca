import Image from "next/image";
import React from "react";
import lrr from "@/assets/images/LRR-Gameday.png";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const ProjectCard = () => {
    return (
        <div className="relative group">
            <div className=" absolute bottom-0 left-0 h-[75%] w-full bg-gradient-to-t from-black to-black-0 opacity-50 group-hover:opacity-90 transition ease-out duration-500"></div>
            <div className="absolute bottom-0 left-0 p-4 w-full flex flex-col gap-1 group">
                <p className="text-[0.6rem] tracking-[0.2rem] opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition ease-in-out duration-700">
                    WEB DEVELOPMENT
                </p>
                <div className="flex justify-between translate-y-10 group-hover:translate-y-0 transition ease-in-out duration-700">
                    <h3 className="text-xl font-bold">Project Name</h3>
                    <ArrowOutwardIcon />
                </div>
                <p className="text-xs opacity-0 translate-y-10 group-hover:opacity-75 group-hover:translate-y-0 transition ease-in-out duration-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                </p>
            </div>
            <Image src={lrr} alt="image" />
        </div>
    );
};

export default ProjectCard;
