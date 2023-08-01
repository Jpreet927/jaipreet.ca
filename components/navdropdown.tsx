"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NavDropDown = () => {
    const path: String = usePathname();
    const [dropdownVisible, setDropdownVisible] = useState(true);

    return (
        dropdownVisible && (
            <ul
                className="absolute top-0 right-0 flex flex-col gap-4 text-right py-12"
                onClick={() => setDropdownVisible(false)}
            >
                <li>
                    <Link
                        href="/portfolio/development"
                        className={
                            path === "/portfolio/development"
                                ? "text-text-blue font-bold"
                                : ""
                        }
                    >
                        Development
                    </Link>
                </li>
                <li>
                    <Link
                        href="/portfolio/design"
                        className={
                            path === "/portfolio/design"
                                ? "text-text-blue font-bold"
                                : ""
                        }
                    >
                        Design
                    </Link>
                </li>
                <li>
                    <Link
                        href="/portfolio/photography"
                        className={
                            path === "/portfolio/photography"
                                ? "text-text-blue font-bold"
                                : ""
                        }
                    >
                        Photography
                    </Link>
                </li>
            </ul>
        )
    );
};

export default NavDropDown;
