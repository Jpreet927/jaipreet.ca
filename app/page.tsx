import Image from "next/image";
import { playfair } from "@/util/fonts";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Hero from "@/components/home/hero";
import Projects from "@/components/home/projects";
import Skills from "@/components/home/skills";
import Contact from "@/components/home/contact";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center max-w-full">
            <Hero />
            <Projects />
            <Skills />
            <Contact />
        </main>
    );
}
