import jtweet from "@/assets/images/Project Thumbnails/Jtweet.jpeg";
import harmoni from "@/assets/images/Project Thumbnails/Harmoni.jpg";
import apertureio from "@/assets/images/Project Thumbnails/ApertureIO.jpg";
import unwrapped from "@/assets/images/Project Thumbnails/Spotify-Visualizer-App.jpg";
import ecommerce from "@/assets/images/Project Thumbnails/Ecommerce.jpg";
import entropy from "@/assets/images/Project Thumbnails/Entropy.jpg";
import entertainmenthub from "@/assets/images/Project Thumbnails/Entertainment-Hub.jpg";
import { Project } from "@/components/home/projectcard";

export const projects: Project[] = [
    {
        title: "JTweet (Twitter Clone)",
        description:
            "Jtweet is an interpolation of the popular social media platform 'Twitter' where users can create accounts with their emails, create text and image based posts, interact with other users, and receive a personalized feed with posts from followed users.",
        category: "Web Development",
        src: jtweet,
        link: "https://github.com/Jpreet927/jtweet",
    },
    {
        title: "Harmoni",
        description:
            "Harmoni is an AI Based Health Assitant developed in a team of 4 that uses machine learning and sensor data to aggregate a users risk of contracting cardiovascular disease.",
        category: "App Development",
        src: harmoni,
        link: "https://www.youtube.com/watch?v=b8yH6oT6mlI",
    },
    {
        title: "Aperture.io",
        description:
            "Aperture.io is an online repository where photographers can upload and showcase their work. Built with Next.js, Express.js, Tailwind, and hosted on Google Cloud Platform.",
        category: "Web Development",
        src: apertureio,
        link: "https://github.com/Jpreet927/Aperture.io",
    },
    {
        title: "Spotify Unwrapped",
        description:
            "Spotify Unwrapped is a website where you can view your Spotify listening habits without having to wait for the end of the year. Built with Next.js, Next Auth, Tailwind CSS, Framer Motion, and powered by the Spotify API.",
        category: "Web Development",
        src: unwrapped,
        link: "https://github.com/Jpreet927/Spotify-Unwrapped",
    },
    {
        title: "Allora Salve",
        description:
            "An ecommerce website where users can browse products, add products to their cart, manage item quantity, search for products, sort products by price, and review order details. Designed using Photoshop and Figma and implemented in React.js.",
        category: "Web Development",
        src: ecommerce,
        link: "https://jpreet927.github.io/ecommerce-site/",
    },
    {
        title: "Entropy Gaming",
        description:
            "Established new social media assets and brand guidelines to reflect Entropy Gaming's core brand attributes.",
        category: "Graphic Design",
        src: entropy,
        link: "https://www.behance.net/gallery/148256469/Entropy-Gaming",
    },
];
