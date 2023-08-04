"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface props {
    dropdownVisible: boolean;
    setDropDownVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavDropDown = ({ dropdownVisible, setDropDownVisible }: props) => {
    const path: String = usePathname();

    return (
        <div className="absolute top-16 right-0 bg-black bg-opacity-50 backdrop-blur-xl py-8 px-12 w-[250px] rounded-lg transition-all">
            <ul
                className="flex flex-col gap-4"
                onClick={() => setDropDownVisible(false)}
            >
                <li>
                    <Link
                        href="/portfolio/development"
                        className={
                            path === "/portfolio/development" ? "font-bold" : ""
                        }
                    >
                        Development
                    </Link>
                </li>
                <li>
                    <Link
                        href="/portfolio/design"
                        className={
                            path === "/portfolio/design" ? "font-bold" : ""
                        }
                    >
                        Design
                    </Link>
                </li>
                <li>
                    <Link
                        href="/portfolio/photography"
                        className={
                            path === "/portfolio/photography" ? "font-bold" : ""
                        }
                    >
                        Photography
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default NavDropDown;
