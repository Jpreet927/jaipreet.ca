import python from "@/assets/icons/Icon-Python.png";
import aftereffects from "@/assets/icons/aftereffects.png";
import css from "@/assets/icons/css.png";
import figma from "@/assets/icons/figma.png";
import firebase from "@/assets/icons/firebase.png";
import git from "@/assets/icons/git.png";
import html from "@/assets/icons/html.png";
import illustrator from "@/assets/icons/illustrator.png";
import java from "@/assets/icons/java.png";
import javascript from "@/assets/icons/javascript.png";
import mongodb from "@/assets/icons/mongodb.png";
import next from "@/assets/icons/next.png";
import node from "@/assets/icons/node.png";
import photoshop from "@/assets/icons/photoshop.png";
import react from "@/assets/icons/react.png";
import typescript from "@/assets/icons/typescript.png";
import { StaticImageData } from "next/image";

interface skillsIconsType {
    src: StaticImageData;
    alt: string;
}

export const skillsIcons: skillsIconsType[] = [
    {
        src: aftereffects,
        alt: "After Effects Logo",
    },
    {
        src: python,
        alt: "Python Logo",
    },
    {
        src: css,
        alt: "CSS Logo",
    },
    {
        src: firebase,
        alt: "Firebase Logo",
    },
    {
        src: git,
        alt: "Git Logo",
    },
    {
        src: react,
        alt: "React.js Logo",
    },
    {
        src: next,
        alt: "Next.js Logo",
    },
    {
        src: html,
        alt: "HTML Logo",
    },
    {
        src: illustrator,
        alt: "Illustrator Logo",
    },
    {
        src: figma,
        alt: "Figma Logo",
    },
    {
        src: javascript,
        alt: "JavaScript Logo",
    },
    {
        src: mongodb,
        alt: "MongoDB Logo",
    },
    {
        src: node,
        alt: "Node.js Logo",
    },
    {
        src: photoshop,
        alt: "Photoshop Logo",
    },
    {
        src: typescript,
        alt: "TypeScript Logo",
    },
    {
        src: java,
        alt: "Java Logo",
    },
];
