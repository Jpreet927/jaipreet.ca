import Image from "next/image";
import { playfair } from "@/util/fonts";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center max-w-full">
            <div className="bg-hero-image bg-cover bg-center h-screen w-screen flex flex-col justify-center px-64 overflow-y-hidden">
                <div className="flex flex-col gap-4">
                    <h1 className={`${playfair.className} text-7xl font-bold`}>
                        Hey, I'm Jaipreet
                    </h1>
                    <p className="opacity-75">
                        I’m a software developer & a graphic designer.
                    </p>
                </div>
                <div className="flex justify-between items-end absolute left-0 bottom-0 w-full px-64 py-24">
                    <p>
                        Based in <br />{" "}
                        <span className="font-bold">Toronto, ON</span>
                    </p>
                    <div className="flex gap-24 transition-opacity">
                        <a
                            className="opacity-75 hover:opacity-100 transition ease-in delay-400"
                            href="https://www.linkedin.com/in/jaipreetsingh/"
                            target="_blank"
                        >
                            LinkedIn
                        </a>
                        <a
                            className="opacity-75 hover:opacity-100 transition ease-in delay-400"
                            href="https://github.com/Jpreet927"
                            target="_blank"
                        >
                            Github
                        </a>
                        <a
                            className="opacity-75 hover:opacity-100 transition ease-in delay-400"
                            href="https://www.behance.net/jaipreet"
                            target="_blank"
                        >
                            Behance
                        </a>
                        <a
                            className="opacity-75 hover:opacity-100 transition ease-in delay-400"
                            href="https://twitter.com/Jpreet_"
                            target="_blank"
                        >
                            Twitter
                        </a>
                    </div>
                </div>
            </div>
            {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div> */}
        </main>
    );
}
