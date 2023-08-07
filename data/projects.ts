import { StaticImageData } from "next/image";
import jtweet from "@/assets/images/Project Thumbnails/Jtweet.jpeg";
import harmoni from "@/assets/images/Project Thumbnails/Harmoni.jpg";
import ecommerce from "@/assets/images/Project Thumbnails/Ecommerce.jpg";
import entertainmenthub from "@/assets/images/Project Thumbnails/Entertainment-Hub.jpg";

interface Project {
    title: string;
    description: string;
    category: string;
    thumbnail: StaticImageData;
    link: string;
}

export const projects: Project[] = [
    {
        title: "JTweet (Twitter Clone)",
        description:
            "Jtweet is an interpolation of the popular social media platform 'Twitter' where users can create accounts with their emails, create text and image based posts, interact with other users, and receive a personalized feed with posts from followed users.",
        category: "Web Development",
        thumbnail: jtweet,
        link: "https://github.com/Jpreet927/jtweet",
    },
    {
        title: "Harmoni",
        description:
            "Harmoni is an AI Based Health Assitant developed in a team of 4 to assist users in tracking their health and fitness progress over time. There is a rising prevalence of cardiovascular diseases such as diabetes and stroke, and our team's commitment is to design a solution to provide an easy, simple product for individuals to take the next step in their journey towards improved health.",
        category: "App Development",
        thumbnail: harmoni,
        link: "https://www.youtube.com/watch?v=b8yH6oT6mlI",
    },
    {
        title: "Allora Salve",
        description:
            "An ecommerce website where users can browse products, add products to their cart, manage item quantity, search for products, sort products by price, and review order details. Designed using Photoshop and Figma and implemented in React.js.",
        category: "Web Development",
        thumbnail: ecommerce,
        link: "https://jpreet927.github.io/ecommerce-site/",
    },
    {
        title: "Entertainment Hub",
        description:
            "A web application that displays movie and television data fetched form the TMDB public API. Built with React.js.",
        category: "Web Development",
        thumbnail: entertainmenthub,
        link: "https://jpreet927.github.io/ecommerce-site/",
    },
];
