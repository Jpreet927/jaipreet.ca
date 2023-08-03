import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <div className="px-64 py-12 flex justify-between">
            <div>
                <h3 className="text-2xl">
                    <b>© 2023 JAIPREET SINGH</b>
                </h3>
            </div>
            <div className="flex gap-48">
                <div className="flex flex-col gap-1.5">
                    <p className="mb-4">
                        <b>Built With</b>
                    </p>
                    <p className="opacity-75 hover:opacity-100 transition ease-in delay-400">
                        Next.js
                    </p>
                    <p className="opacity-75 hover:opacity-100 transition ease-in delay-400">
                        Tailwind
                    </p>
                    <p className="opacity-75 hover:opacity-100 transition ease-in delay-400">
                        Framer Motion
                    </p>
                </div>
                <div className="flex flex-col gap-1.5">
                    <p className="mb-4">
                        <b>Connect</b>
                    </p>
                    <a
                        className="opacity-75 hover:opacity-100 transition ease-in delay-400"
                        href=""
                    >
                        Twitter
                    </a>
                    <a
                        className="opacity-75 hover:opacity-100 transition ease-in delay-400"
                        href=""
                    >
                        Instagram
                    </a>
                    <a
                        className="opacity-75 hover:opacity-100 transition ease-in delay-400"
                        href=""
                    >
                        LinkedIn
                    </a>
                    <a
                        className="opacity-75 hover:opacity-100 transition ease-in delay-400"
                        href=""
                    >
                        Behance
                    </a>
                    <a
                        className="opacity-75 hover:opacity-100 transition ease-in delay-400"
                        href=""
                    >
                        Github
                    </a>
                    <a
                        className="opacity-75 hover:opacity-100 transition ease-in delay-400"
                        href=""
                    >
                        Unsplash
                    </a>
                </div>
                <div className="flex flex-col gap-1.5">
                    <p className="mb-4">
                        <b>Menu</b>
                    </p>
                    <Link
                        href="/"
                        className="opacity-75 hover:opacity-100 transition ease-in delay-400"
                    >
                        Home
                    </Link>
                    <Link
                        href="/portfolio/development"
                        className="opacity-75 hover:opacity-100 transition ease-in delay-400"
                    >
                        Development
                    </Link>
                    <Link
                        href="/portfolio/design"
                        className="opacity-75 hover:opacity-100 transition ease-in delay-400"
                    >
                        Design
                    </Link>
                    <Link
                        href="/portfolio/photography"
                        className="opacity-75 hover:opacity-100 transition ease-in delay-400"
                    >
                        Photography
                    </Link>
                    <Link
                        href="/about"
                        className="opacity-75 hover:opacity-100 transition ease-in delay-400"
                    >
                        About
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
