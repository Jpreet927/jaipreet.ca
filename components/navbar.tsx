"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logos/JpreetLogo.png";
import NavDropDown from "./navdropdown";

const Navbar = () => {
    const path: String = usePathname();
    const [dropdownVisible, setDropDownVisible] = useState(false);

    return (
        <div className="fixed top-0 left-0 w-screen">
            <nav className="flex justify-between items-center py-12 px-64 flex-shrink-0">
                <div className="relative w-[80px] h-[80px] shrink-0">
                    <Image
                        src={logo}
                        alt="Jpreet Logo"
                        className="flex-shrink-0"
                        fill={true}
                        objectFit="contain"
                    />
                </div>
                <ul className="flex gap-24">
                    <li>
                        <Link
                            href="/"
                            className={path === "/" ? "font-bold" : ""}
                        >
                            Home
                        </Link>
                    </li>
                    <li
                        className="relative"
                        onMouseEnter={() => setDropDownVisible(true)}
                        onMouseLeave={() => setDropDownVisible(false)}
                    >
                        Portfolio
                        {dropdownVisible && <NavDropDown />}
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className={path === "/about" ? "font-bold" : ""}
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
