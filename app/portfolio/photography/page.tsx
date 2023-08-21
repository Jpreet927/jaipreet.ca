"use client";

import { useState } from "react";
import Banner from "@/components/portfolio/banner";
import Carousel from "@/components/portfolio/carousel";
import { photos } from "@/data/photography";
import GalleryImage from "@/components/portfolio/galleryImage";
import banner from "@/assets/images/Photography Images/photography-banner.jpg";

const PhotographyPage = () => {
    const [carouselVisible, setCarouselVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="relative flex flex-col gap-16">
            {carouselVisible && (
                <div className="absolute top-0 left-0 h-screen w-full">
                    <Carousel
                        images={photos}
                        index={currentIndex}
                        closeCarousel={setCarouselVisible}
                    />
                </div>
            )}
            <Banner
                banner={{
                    src: banner,
                    alt: "Photography Page banner image",
                }}
                title={"Photography"}
            />
            <div className="xl:px-64 lg:px-32 md:px-16 px-8 mb-24 flex flex-col gap-16">
                <div className="flex flex-col gap-6">
                    <div className="flex gap-6 items-center">
                        <h3 className="text-2xl font-bold whitespace-nowrap">
                            Image Gallery
                        </h3>
                        <div className="bg-white/50 h-[1px] w-[90%]"></div>
                    </div>
                    <div className="gap-[16px] lg:columns-3 md:columns-2 columns-1">
                        {photos.map((img, index) => (
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

export default PhotographyPage;
