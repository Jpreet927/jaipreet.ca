"use client";

import React from "react";
import { playfair } from "@/util/fonts";
import IconBox from "./iconbox";
import { skillsIcons } from "@/data/skills-icons";
import { motion } from "framer-motion";
import { opacityTranslateY } from "@/util/framerVariants";

const iconColVariant = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
    },
};

const iconVariant = {
    hidden: { opacity: 0, y: 20 },
    show: (index = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 1, delay: 0.2 * index },
    }),
};

const Skills = () => {
    // chunk sizes for 4-col icon grid
    const floor: number = Math.floor(skillsIcons.length / 4);
    const ceiling: number = Math.ceil(skillsIcons.length / 4);

    return (
        <section className="w-full flex flex-col gap-12 2xl:px-64 xl:px-48 lg:px-32 md:px-16 px-8 pt-12 pb-36">
            <h1
                className={`${playfair.className} sm:text-7xl text-5xl font-bold self-center`}
            >
                My Skills
            </h1>
            <div className="flex xl:flex-row flex-col items-center gap-16">
                {/* SKILLS */}
                <motion.div
                    variants={opacityTranslateY}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="2xl:w-[60%] xl:w-[50%] w-full flex flex-col gap-12"
                >
                    <div className="flex flex-col gap-2">
                        <h3 className="sm:text-2xl text-xl font-bold">
                            Frontend Development
                        </h3>
                        <div className="flex sm:flex-row flex-col sm:gap-16 gap-4 text-white/60">
                            <div className="sm:w-[75%] w-full">
                                <p className="sm:text-base text-sm">
                                    The frontend is my forté. Drawing from my
                                    background in design, I'm able to whip up
                                    detailed wireframes with ease, then break
                                    them down into web page components to
                                    compose a pixel perfect user experience.
                                </p>
                            </div>
                            <div className="sm:w-[25%] sm:flex-col flex flex-row flex-wrap sm:gap-1 gap-4 justify-between w-full">
                                <p className="sm:text-base text-sm hover:text-white transition ease-in-out duration-300">
                                    React.js
                                </p>
                                <p className="sm:text-base text-sm hover:text-white transition ease-in-out duration-300">
                                    Next.js
                                </p>
                                <p className="sm:text-base text-sm hover:text-white transition ease-in-out duration-300">
                                    Angular
                                </p>
                                <p className="sm:text-base text-sm hover:text-white transition ease-in-out duration-300">
                                    JavaScript
                                </p>
                                <p className="sm:text-base text-sm hover:text-white transition ease-in-out duration-300">
                                    HTML/CSS
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="sm:text-2xl text-xl font-bold">
                            Backend Development
                        </h3>
                        <div className="flex sm:flex-row flex-col sm:gap-16 gap-4 text-white/60">
                            <div className="sm:w-[75%] w-full">
                                <p className="sm:text-base text-sm">
                                    My experience encompasses architecting
                                    RESTful APIs, integrating SQL and NoSQL
                                    databases, and implementing user
                                    authentication and authorization systems to
                                    guarantee security and power the backbone of
                                    an application.
                                </p>
                            </div>
                            <div className="sm:w-[25%] sm:flex-col flex flex-row flex-wrap sm:gap-1 gap-4 justify-between w-full">
                                <p className="sm:text-base text-sm hover:text-white transition ease-in-out duration-300">
                                    Node/Express
                                </p>
                                <p className="sm:text-base text-sm hover:text-white transition ease-in-out duration-300">
                                    Java Spring
                                </p>
                                <p className="sm:text-base text-sm hover:text-white transition ease-in-out duration-300">
                                    Python
                                </p>
                                <p className="sm:text-base text-sm hover:text-white transition ease-in-out duration-300">
                                    MongoDB
                                </p>
                                <p className="sm:text-base text-sm hover:text-white transition ease-in-out duration-300">
                                    SQL
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="sm:text-2xl text-xl font-bold">
                            Design
                        </h3>
                        <div className="flex sm:flex-row flex-col sm:gap-16 gap-4 text-white/60">
                            <div className="sm:w-[75%] w-full">
                                <p className="sm:text-base text-sm">
                                    I have almost 7 years of graphic design
                                    experience, encompassing art direction,
                                    branding, photomanipulation, illustration,
                                    and motion design. With the dexterity I've
                                    acquired in my design tools, I can bring any
                                    idea to fruition.
                                </p>
                            </div>
                            <div className="sm:w-[25%] sm:flex-col flex flex-row flex-wrap sm:gap-1 gap-4 justify-between w-full">
                                <p className="sm:text-base text-sm hover:text-white transition ease-in-out duration-300">
                                    Photoshop
                                </p>
                                <p className="sm:text-base text-sm hover:text-white transition ease-in-out duration-300">
                                    After Effects
                                </p>
                                <p className="sm:text-base text-sm hover:text-white transition ease-in-out duration-300">
                                    Lightroom
                                </p>
                                <p className="sm:text-base text-sm hover:text-white transition ease-in-out duration-300">
                                    Figma
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
                {/* ICONS */}
                <div className="2xl:w-[40%] xl:w-[50%] md:w-[66%] w-[90%] flex gap-4 items-center">
                    <motion.div
                        variants={iconColVariant}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        transition={{ delay: 0 }}
                        className="w-[25%] flex flex-col gap-4 translate-y-15"
                    >
                        {skillsIcons.slice(0, floor).map((icon, index) => (
                            <motion.div
                                key={index}
                                variants={iconVariant}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                custom={index}
                            >
                                <IconBox
                                    iconPath={icon.src}
                                    iconAlt={icon.alt}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.div
                        variants={iconColVariant}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        transition={{ delay: 0.25 }}
                        className="w-[25%] flex flex-col gap-4 translate-y-5"
                    >
                        {skillsIcons
                            .slice(floor, floor + ceiling)
                            .map((icon, index) => (
                                <motion.div
                                    key={index}
                                    variants={iconVariant}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    custom={index}
                                >
                                    <IconBox
                                        iconPath={icon.src}
                                        iconAlt={icon.alt}
                                    />
                                </motion.div>
                            ))}
                    </motion.div>
                    <motion.div
                        variants={iconColVariant}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="w-[25%] flex flex-col gap-4 -translate-y-5"
                    >
                        {skillsIcons
                            .slice(floor + ceiling, floor + 2 * ceiling)
                            .map((icon, index) => (
                                <motion.div
                                    key={index}
                                    variants={iconVariant}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    custom={index}
                                >
                                    <IconBox
                                        iconPath={icon.src}
                                        iconAlt={icon.alt}
                                    />
                                </motion.div>
                            ))}
                    </motion.div>
                    <motion.div
                        variants={iconColVariant}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        transition={{ delay: 0.75 }}
                        className="w-[25%] flex flex-col gap-4 -translate-y-15"
                    >
                        {skillsIcons
                            .slice(floor + 2 * ceiling, skillsIcons.length)
                            .map((icon, index) => (
                                <motion.div
                                    key={index}
                                    variants={iconVariant}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    custom={index}
                                >
                                    <IconBox
                                        iconPath={icon.src}
                                        iconAlt={icon.alt}
                                    />
                                </motion.div>
                            ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
