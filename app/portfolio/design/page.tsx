"use client";

import { useState } from "react";
import Banner from "@/components/portfolio/banner";
import { artwork, projects } from "@/data/design";
import Carousel from "@/components/portfolio/carousel";
import ProjectCard from "@/components/home/projectcard";
import GalleryImage from "@/components/portfolio/galleryImage";
import banner from "@/assets/images/Design Images/design-banner.jpg";

const DesignPage = () => {
  const [carouselVisible, setCarouselVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="relative flex flex-col justify-center items-center gap-16">
      {carouselVisible && (
        <div className="absolute top-0 left-0 h-screen w-full">
          <Carousel
            images={artwork}
            index={currentIndex}
            isCarouselVisible={setCarouselVisible}
          />
        </div>
      )}
      <Banner
        banner={{ src: banner, alt: "Design & Art banner image" }}
        title={"Design & Art"}
      />
      <div className="xl:px-64 lg:px-32 md:px-16 px-8 mb-24 flex flex-col gap-24 w-full max-w-[2560px]">
        <div className="flex flex-col gap-6">
          <div className="flex gap-6 items-center">
            <h3 className="text-2xl font-bold whitespace-nowrap">
              Design Projects
            </h3>
            <div className="bg-white/50 h-[1px] w-[90%]"></div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            {projects.map((img, index) => (
              <ProjectCard key={index} project={img} />
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
          <div className="gap-[16px] lg:columns-3 md:columns-2 columns-1">
            {artwork.map((img, index) => (
              <div
                key={index}
                onClick={() => {
                  setCarouselVisible(true);
                  setCurrentIndex(index);
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
