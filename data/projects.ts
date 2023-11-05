import jtweet from "@/assets/images/Project Thumbnails/Jtweet.jpeg";
import harmoni from "@/assets/images/Project Thumbnails/Harmoni.jpg";
import apertureio from "@/assets/images/Project Thumbnails/ApertureIO.jpg";
import unwrapped from "@/assets/images/Project Thumbnails/Spotify-Visualizer-App.jpg";
import blog from "@/assets/images/Development Images/BlogAPI-2.png";
import rush from "@/assets/images/Design Images/project thumbnails/Rush-Rebrand.jpg";
import { Project } from "@/components/home/projectcard";

export const projects: Project[] = [
    {
        title: "JTweet (Twitter Clone)",
        description:
            "Jtweet is an interpolation of the popular social media platform 'Twitter' where users can create accounts with their emails, create text and image based posts, interact with other users, and receive a personalized feed.",
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
        title: "Blog Application + CMS",
        description:
            "A blogging platform where users can view blog posts and authors/admins can moderate site content through CRUD operations. Developed using React.js, Express.js, Node.js, and MongoDB.",
        category: "Web Development",
        src: blog,
        link: "https://github.com/Jpreet927/Blog-API",
    },
    {
        title: "Rush Gaming",
        description:
            "A brand identity project consisting of social media graphics and animations. Built on top of Rush Gamings core values to invoke a streetwear inspired visual identity.",
        category: "Graphic Design",
        src: rush,
        link: "https://www.behance.net/gallery/116128699/Rush-Gaming",
    },
];
