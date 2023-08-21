import Navbar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { inter } from "@/util/fonts";
import Footer from "@/components/footer";

export const metadata: Metadata = {
    title: "Jaipreet Singh",
    description: "Jaipreet Singh's personal website.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} w-screen`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
