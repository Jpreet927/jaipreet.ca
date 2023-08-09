"use client";

import { useState } from "react";
import Banner from "@/components/portfolio/banner";
import { artwork, projects } from "@/data/design";
import Carousel from "@/components/portfolio/carousel";
import ProjectCard from "@/components/home/projectcard";
import GalleryImage from "@/components/portfolio/galleryImage";

const DesignPage = () => {
    const [carouselVisible, setCarouselVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="relative flex flex-col gap-16">
            {carouselVisible && (
                <div className="absolute top-0 left-0 h-screen w-full">
                    <Carousel
                        index={currentIndex}
                        closeCarousel={setCarouselVisible}
                    />
                </div>
            )}
            <Banner images={artwork} title={"Design & Art"} />
            <div className="px-64 mb-24 flex flex-col gap-16">
                <div className="flex flex-col gap-6">
                    <div className="flex gap-6 items-center">
                        <h3 className="text-2xl font-bold whitespace-nowrap">
                            Design Projects
                        </h3>
                        <div className="bg-white/50 h-[1px] w-[90%]"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        {projects.map((img) => (
                            <ProjectCard project={img} />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex gap-6 items-center">
                        <h3 className="text-2xl font-bold whitespace-nowrap">
                            Art Gallery
                        </h3>
                        <div className="bg-white/50 h-[1px] w-[90%]"></div>
                    </div>
                    <div className="gap-[16px] columns-3">
                        {artwork.map((img, index) => (
                            <div
                                onClick={() => {
                                    setCarouselVisible(true);
                                    setCurrentIndex(index);
                                    window.scrollTo({
                                        top: 0,
                                        left: 0,
                                        behavior: "smooth",
                                    });
                                }}
                            >
                                <GalleryImage img={img} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignPage;
