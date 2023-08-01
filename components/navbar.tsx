"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/images/logos/JpreetLogo.png";
import NavDropDown from "./navdropdown";

const Navbar = () => {
    const path: String = usePathname();
    const [dropdownVisible, setDropDownVisible] = useState(false);

    return (
        <div className="fixed w-full">
            <nav className="flex justify-between items-center py-12 px-48">
                <Image src={logo} alt="Jpreet Logo" width={77} />
                <ul className="flex gap-12">
                    <li>
                        <Link
                            href="/"
                            className={
                                path === "/" ? "text-text-blue font-bold" : ""
                            }
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
                            className={
                                path === "/about"
                                    ? "text-text-blue font-bold"
                                    : ""
                            }
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
