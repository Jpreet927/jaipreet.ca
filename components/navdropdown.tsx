"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navDropdown } from "@/util/framerVariants";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import ViewQuiltOutlinedIcon from "@mui/icons-material/ViewQuiltOutlined";
import CameraEnhanceOutlinedIcon from "@mui/icons-material/CameraEnhanceOutlined";

interface props {
    dropdownVisible: boolean;
    setDropDownVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavDropDown = ({ dropdownVisible, setDropDownVisible }: props) => {
    const path: String = usePathname();

    return (
        <motion.div
            variants={navDropdown}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="absolute top-16 right-0 bg-black bg-opacity-50 backdrop-blur-xl p-4 w-[250px] rounded-lg transition-all"
        >
            <ul
                className="flex flex-col"
                onClick={() => setDropDownVisible(false)}
            >
                <li>
                    <Link
                        href="/portfolio/development"
                        className={
                            path === "/portfolio/development" ? "font-bold" : ""
                        }
                    >
                        <div className="flex gap-2 hover:bg-black/25 py-2 px-4 rounded-lg transition ease-out duration-500">
                            <CodeOutlinedIcon />
                            <p>Development</p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link
                        href="/portfolio/design"
                        className={
                            path === "/portfolio/design" ? "font-bold" : ""
                        }
                    >
                        <div className="flex gap-2 hover:bg-black/25 py-2 px-4 rounded-lg transition ease-out duration-500">
                            <ViewQuiltOutlinedIcon />
                            <p>Design</p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link
                        href="/portfolio/photography"
                        className={
                            path === "/portfolio/photography" ? "font-bold" : ""
                        }
                    >
                        <div className="flex gap-2 hover:bg-black/25 py-2 px-4 rounded-lg transition ease-out duration-500">
                            <CameraEnhanceOutlinedIcon />
                            <p>Photography</p>
                        </div>
                    </Link>
                </li>
            </ul>
        </motion.div>
    );
};

export default NavDropDown;
