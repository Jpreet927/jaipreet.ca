import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { inter } from "@/util/fonts";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
    title: "Jaipreet Singh",
    description: "Jaipreet Singh's personal website.",
    keywords: [
        "Jaipreet Singh",
        "Jai Preet Singh",
        "Jaipreet",
        "Jai Preet",
        "Software",
        "Developer",
        "Graphic",
        "Designer",
    ],
    openGraph: {
        title: "Jaipreet Singh",
        description: "Jaipreet Singh's personal website.",
        url: "https://jaipreet.ca",
        siteName: "Jaipreet Singh",
        images: [
            {
                url: "https://jaipreet.ca/opengraph.jpg",
                width: 1200,
                height: 630,
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        site: "@jpreet_",
        creator: "@jpreet_",
        title: "Jaipreet Singh",
        description: "Jaipreet Singh's personal website.",
        images: "https://jaipreet.ca/opengraph.jpg",
    },
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
