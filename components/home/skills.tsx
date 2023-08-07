import React from "react";
import { playfair } from "@/util/fonts";
import IconBox from "./iconbox";
import { skillsIcons } from "@/data/skills-icons";

const Skills = () => {
    // chunk sizes for 4-col icon grid
    const floor: number = Math.floor(skillsIcons.length / 4);
    const ceiling: number = Math.ceil(skillsIcons.length / 4);

    return (
        <section className="w-full flex flex-col gap-12 2xl:px-64 xl:px-48 lg:px-32 md:px-16 px-8 pt-12 pb-36">
            <h1
                className={`${playfair.className} text-7xl font-bold self-center`}
            >
                My Skills
            </h1>
            <div className="flex xl:flex-row flex-col items-center gap-16">
                {/* SKILLS */}
                <div className="2xl:w-[60%] xl:w-[50%] w-full flex flex-col gap-12">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-2xl font-bold">
                            Frontend Development
                        </h3>
                        <div className="flex sm:flex-row flex-col sm:gap-16 gap-4 text-white/60">
                            <div className="sm:w-[75%] w-full max-w-full">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nam hendrerit nisi sed
                                    sollicitudin pellentesque. Nunc posuere
                                    purus rhoncus pulvinar aliquam. Ut aliquet
                                    tristique nisl vitae volutpat.
                                </p>
                            </div>
                            <div className="sm:w-[25%] sm:flex-col flex flex-row flex-wrap sm:gap-1 gap-4 justify-between w-full">
                                <p className="hover:text-white transition ease-in-out duration-300">
                                    React.js
                                </p>
                                <p className="hover:text-white transition ease-in-out duration-300">
                                    Next.js
                                </p>
                                <p className="hover:text-white transition ease-in-out duration-300">
                                    Angular
                                </p>
                                <p className="hover:text-white transition ease-in-out duration-300">
                                    JavaScript/TypeScript
                                </p>
                                <p className="hover:text-white transition ease-in-out duration-300">
                                    HTML/CSS
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-2xl font-bold">
                            Backend Development
                        </h3>
                        <div className="flex sm:flex-row flex-col sm:gap-16 gap-4 text-white/60">
                            <div className="sm:w-[75%] w-full">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nam hendrerit nisi sed
                                    sollicitudin pellentesque. Nunc posuere
                                    purus rhoncus pulvinar aliquam. Ut aliquet
                                    tristique nisl vitae volutpat.
                                </p>
                            </div>
                            <div className="sm:w-[25%] sm:flex-col flex flex-row flex-wrap sm:gap-1 gap-4 justify-between w-full">
                                <p className="hover:text-white transition ease-in-out duration-300">
                                    Node/Express
                                </p>
                                <p className="hover:text-white transition ease-in-out duration-300">
                                    Java Spring
                                </p>
                                <p className="hover:text-white transition ease-in-out duration-300">
                                    Python
                                </p>
                                <p className="hover:text-white transition ease-in-out duration-300">
                                    MongoDB
                                </p>
                                <p className="hover:text-white transition ease-in-out duration-300">
                                    SQL
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-2xl font-bold">Design</h3>
                        <div className="flex sm:flex-row flex-col sm:gap-16 gap-4 text-white/60">
                            <div className="sm:w-[75%] w-full">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nam hendrerit nisi sed
                                    sollicitudin pellentesque. Nunc posuere
                                    purus rhoncus pulvinar aliquam. Ut aliquet
                                    tristique nisl vitae volutpat.
                                </p>
                            </div>
                            <div className="sm:w-[25%] sm:flex-col flex flex-row flex-wrap sm:gap-1 gap-4 justify-between w-full">
                                <p className="hover:text-white transition ease-in-out duration-300">
                                    Photoshop
                                </p>
                                <p className="hover:text-white transition ease-in-out duration-300">
                                    After Effects
                                </p>
                                <p className="hover:text-white transition ease-in-out duration-300">
                                    Lightroom
                                </p>
                                <p className="hover:text-white transition ease-in-out duration-300">
                                    Figma
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ICONS */}
                <div className="2xl:w-[40%] xl:w-[50%] md:w-[66%] w-[90%] flex gap-4 items-center">
                    <div className="w-[25%] flex flex-col gap-4 translate-y-15">
                        {skillsIcons.slice(0, floor).map((icon) => (
                            <IconBox iconPath={icon.src} iconAlt={icon.alt} />
                        ))}
                    </div>
                    <div className="w-[25%] flex flex-col gap-4 translate-y-5">
                        {skillsIcons
                            .slice(floor, floor + ceiling)
                            .map((icon) => (
                                <IconBox
                                    iconPath={icon.src}
                                    iconAlt={icon.alt}
                                />
                            ))}
                    </div>
                    <div className="w-[25%] flex flex-col gap-4 -translate-y-5">
                        {skillsIcons
                            .slice(floor + ceiling, floor + 2 * ceiling)
                            .map((icon) => (
                                <IconBox
                                    iconPath={icon.src}
                                    iconAlt={icon.alt}
                                />
                            ))}
                    </div>
                    <div className="w-[25%] flex flex-col gap-4 -translate-y-15">
                        {skillsIcons
                            .slice(floor + 2 * ceiling, skillsIcons.length)
                            .map((icon) => (
                                <IconBox
                                    iconPath={icon.src}
                                    iconAlt={icon.alt}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
