import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { inter } from "@/util/fonts";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

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
                <Analytics />
            </body>
        </html>
    );
}
