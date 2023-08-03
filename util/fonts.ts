import { Inter, Playfair_Display } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const playfair = Playfair_Display({
    weight: "variable",
    style: "normal",
    subsets: ["latin"],
    variable: "--font-playfair",
});
