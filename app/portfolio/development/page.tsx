import ProjectCard from "@/components/home/projectcard";
import Banner from "@/components/portfolio/banner";
import { projects } from "@/data/development";
import banner from "@/assets/images/Development Images/devlopment-banner.jpg";

const DevelopmentPage = () => {
    return (
        <div className="relative flex flex-col justify-center items-center gap-16">
            <Banner
                banner={{ src: banner, alt: "Development Page banner image" }}
                title={"Development"}
            />
            <div className="xl:px-64 lg:px-32 md:px-16 px-8 mb-24 flex flex-col w-full max-w-[2560px] gap-16">
                <div className="flex flex-col gap-6">
                    <div className="flex gap-6 items-center">
                        <h3 className="text-2xl font-bold whitespace-nowrap">
                            Projects
                        </h3>
                        <div className="bg-white/50 h-[1px] w-[90%]"></div>
                    </div>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                        {projects.map((img, index) => (
                            <ProjectCard key={index} project={img} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DevelopmentPage;
