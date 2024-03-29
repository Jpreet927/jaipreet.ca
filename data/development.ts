import { Project } from "@/components/home/projectcard";

import harmoni from "@/assets/images/Development Images/Harmoni.jpg";
import assets from "@/assets/images/Development Images/ASSETS2024.jpg";
import cdlwiki from "@/assets/images/Development Images/CDLWiki.jpg";
import jtweet from "@/assets/images/Development Images/Jtweet.jpeg";
import apertureio from "@/assets/images/Development Images/ApertureIO.jpg";
import unwrapped from "@/assets/images/Development Images/Spotify-Visualizer-App.jpg";
import blog from "@/assets/images/Development Images/BlogAPI.jpg";
import entertainment from "@/assets/images/Development Images/Entertainment-Hub.jpg";
import ecom from "@/assets/images/Development Images/Ecommerce.jpg";
import weather from "@/assets/images/Development Images/Weather-App.jpg";
import cvapp from "@/assets/images/Development Images/CV-App.jpg";

export const projects: Project[] = [
    {
        title: "Harmoni",
        description:
            "Harmoni is an AI Based Health Assitant developed in a team of 4 that uses machine learning and sensor data to aggregate a users risk of contracting cardiovascular disease.",
        category: "App Development",
        src: harmoni,
        link: "https://www.youtube.com/watch?v=b8yH6oT6mlI&feature=youtu.be",
    },
    {
        title: "ASSETS 2024",
        description:
            "Helped develop the public website for the ASSETS 2024 conference - the premier forum for presenting research on the design, evaluation, use, and education related to computing for people with disabilities and older adults.",
        category: "Web Development",
        src: assets,
        link: "https://assets24.sigaccess.org/",
    },
    {
        title: "Call of Duty League 2023/24",
        description:
            "Designed a relational database model for storing data related to the Call of Duty Esports League 2023/24 season, supplemented with a Spring Boot REST API and a React frontend.",
        category: "Web Development",
        src: cdlwiki,
        link: "https://github.com/Jpreet927/CDL-Wiki",
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
        title: "J-Tweet",
        description:
            "Jtweet is an interpolation of the popular social media platform 'Twitter' where users can create accounts with their emails, create text and image based posts, interact with other users, and receive a personalized feed with posts from followed users.",
        category: "Web Development",
        src: jtweet,
        link: "https://github.com/Jpreet927/jtweet",
    },
    {
        title: "Spotify Unwrapped",
        description:
            "Unwrapped is a web application that allows users to log in with their Spotify accounts to view their recent listening metrics without having to wait for Spotify Wrapped at the end of the year. Built with Next.js.",
        category: "Web Development",
        src: unwrapped,
        link: "https://github.com/Jpreet927/Spotify-Unwrapped",
    },
    {
        title: "Blog Application + CMS",
        description:
            "A blogging platform where users can view blog posts and authors can create and edit blog posts. Developed using React.js, Express.js, Node.js, and MongoDB.",
        category: "Web Development",
        src: blog,
        link: "https://github.com/Jpreet927/Blog-API",
    },
    {
        title: "Entertainment Hub",
        description:
            "A web application that displays movie and television data fetched form the TMDB public API. Built with React.js.",
        category: "Web Development",
        src: entertainment,
        link: "https://jpreet927.github.io/Entertainment-Hub/",
    },
    {
        title: "Allora Salve",
        description:
            "An ecommerce website where users can browse products, add products to their cart, manage item quantity, search for products, sort products by price, and review order details. Designed using Photoshop and Figma and implemented in React.js.",
        category: "Web Development",
        src: ecom,
        link: "https://jpreet927.github.io/ecommerce-site/",
    },
    {
        title: "Weather Network",
        description:
            "A webapp that fetches weather data from the Open Weather API with dynamic icons and background, reflecting the current climate. Built with HTML, CSS, and JavaScript.",
        category: "Web Development",
        src: weather,
        link: "https://jpreet927.github.io/weather-app/",
    },
    // {
    //     title: "Resume Builder",
    //     description:
    //         "A platform to input personal info and work history to generate a Resume. Created in React.js.",
    //     category: "Web Development",
    //     src: cvapp,
    //     link: "https://jpreet927.github.io/cv-project/",
    // },
];
