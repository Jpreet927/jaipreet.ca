"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/branding/JpreetLogo.png";
import NavDropDown from "./navdropdown";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { SourceTextModule } from "vm";

const Navbar = () => {
    const path: String = usePathname();
    const [dropdownVisible, setDropDownVisible] = useState(false);
    const [navBackgroundVisible, setNavBackgroundVisible] = useState(false);
    const [mobileViewVisible, setMobileViewVisible] = useState(false);

    useEffect(() => {
        const toggleBackground = () => {
            if (window.scrollY > 100) {
                setNavBackgroundVisible(true);
            } else {
                setNavBackgroundVisible(false);
            }
        };

        const removeNavBackground = () => {
            if (window.innerWidth > 640) {
                setMobileViewVisible(false);
            }
        };

        window.addEventListener("scroll", toggleBackground);
        window.addEventListener("resize", removeNavBackground);
    }, []);

    return (
        <div
            className={`fixed top-0 left-0 w-screen z-50 transition-all ease-in-out duration-500 ${
                mobileViewVisible ? "h-screen overflow-y-hidden" : "h-fit"
            }`}
        >
            <nav
                className={`flex sm:flex-row flex-col sm:justify-between items-center sm:h-fit h-full px-8 xl:px-64 lg:px-32 md:px-16 flex-shrink-0 transition-all ease-in-out duration-500 ${
                    navBackgroundVisible || mobileViewVisible
                        ? "bg-black sm:py-1"
                        : "sm:py-12"
                }`}
            >
                <div className="relative sm:w-[80px] w-full h-[80px] shrink-0 flex justify-between items-center">
                    <Image
                        src={logo}
                        alt="Jpreet Logo"
                        className="flex-shrink-0"
                        style={{ objectFit: "contain", width: "80px" }}
                    />
                    <div className="sm:hidden block">
                        {mobileViewVisible ? (
                            <CloseIcon
                                onClick={() => setMobileViewVisible(false)}
                                className="cursor-pointer"
                            />
                        ) : (
                            <MenuIcon
                                onClick={() => setMobileViewVisible(true)}
                                className="cursor-pointer"
                            />
                        )}
                    </div>
                </div>
                <ul
                    className={`sm:flex sm:flex-row flex-col sm:gap-24 gap-12 sm:h-[80px] h-full sm:justify-center justify-start sm:items-center items-start sm:w-auto w-full sm:py-0 py-12 sm:opacity-100 transition-opacity ease-in-out duration-300 ${
                        mobileViewVisible
                            ? "opacity-100f flex"
                            : "opacity-0 hidden"
                    }`}
                >
                    <li
                        className="flex items-center sm:h-full"
                        onClick={() => setMobileViewVisible(false)}
                    >
                        <Link
                            href="/"
                            className={`sm:text-base text-2xl ${
                                path === "/"
                                    ? "opacity-100"
                                    : "opacity-70 hover:opacity-100 transition-opacity duration-500"
                            }`}
                        >
                            Home
                        </Link>
                    </li>
                    <li
                        className={`relative sm:flex hidden items-center gap-2 group sm:h-full ${
                            path.includes("portfolio")
                                ? "opacity-100"
                                : "opacity-70 hover:opacity-100 transition-opacity duration-500"
                        }`}
                        onMouseEnter={() => setDropDownVisible(true)}
                        onMouseLeave={() => setDropDownVisible(false)}
                        onClick={() => setMobileViewVisible(false)}
                    >
                        Portfolio{" "}
                        <KeyboardArrowDownIcon className="group-hover:rotate-180 transition ease-out duration-500" />
                        {dropdownVisible && (
                            <NavDropDown
                                dropdownVisible={dropdownVisible}
                                setDropDownVisible={setDropDownVisible}
                            />
                        )}
                    </li>
                    <div className="sm:hidden flex flex-col gap-12 sm:items-center items-start">
                        <Link
                            href="/portfolio/development"
                            className={`sm:text-base text-2xl ${
                                path === "/portfolio/development"
                                    ? "font-bold"
                                    : ""
                            }`}
                            onClick={() => setMobileViewVisible(false)}
                        >
                            Development
                        </Link>
                        <Link
                            href="/portfolio/design"
                            className={`sm:text-base text-2xl ${
                                path === "/portfolio/design" ? "font-bold" : ""
                            }`}
                            onClick={() => setMobileViewVisible(false)}
                        >
                            Design
                        </Link>
                        <Link
                            href="/portfolio/photography"
                            className={`sm:text-base text-2xl ${
                                path === "/portfolio/photography"
                                    ? "font-bold"
                                    : ""
                            }`}
                            onClick={() => setMobileViewVisible(false)}
                        >
                            Photography
                        </Link>
                    </div>
                    <li
                        className="flex items-center sm:h-full"
                        onClick={() => setMobileViewVisible(false)}
                    >
                        <Link
                            href="/about"
                            className={`sm:text-base text-2xl ${
                                path === "/about"
                                    ? "opacity-100"
                                    : "opacity-70 hover:opacity-100 transition-opacity duration-500"
                            }`}
                        >
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
