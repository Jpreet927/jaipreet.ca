import { Project } from "@/components/home/projectcard";

import harmoni from "@/assets/images/Development Images/Harmoni.jpg";
import jtweet from "@/assets/images/Development Images/Jtweet.jpeg";
import entertainment from "@/assets/images/Development Images/Entertainment-Hub.jpg";
import ecom from "@/assets/images/Development Images/Ecommerce.jpg";
import weather from "@/assets/images/Development Images/Weather-App.jpg";
import cvapp from "@/assets/images/Development Images/CV-App.jpg";

export const projects: Project[] = [
    {
        title: "Harmoni",
        description:
            "Established new social media assets and brand guidelines to reflect core brand attributes.",
        category: "App Development",
        src: harmoni,
        link: "https://www.behance.net/gallery/148256469/Entropy-Gaming?log_shim_removal=1",
    },
    {
        title: "J-Tweet",
        description:
            "Leveraged the established Huntsmen identity to bring a new take on the brands social media graphics.",
        category: "Web Development",
        src: jtweet,
        link: "https://www.behance.net/gallery/110895407/Chicago-Huntsmen",
    },
    {
        title: "Entertainment Hub",
        description:
            "Built on top of Rush Gamings core values to invoke a streetwear inspired visual identity.",
        category: "Web Development",
        src: entertainment,
        link: "https://www.behance.net/gallery/116128699/Rush-Gaming",
    },
    {
        title: "Allora Salve",
        description:
            "A fresh rebranding of gaming team Northern Forces centered around custom illustrations.",
        category: "Web Development",
        src: ecom,
        link: "https://www.behance.net/gallery/119507687/Northern-Forces-2021",
    },
    {
        title: "Weather Network",
        description:
            "A fresh rebranding of gaming team Northern Forces centered around custom illustrations.",
        category: "Web Development",
        src: weather,
        link: "https://www.behance.net/gallery/119507687/Northern-Forces-2021",
    },
    {
        title: "Resume Builder",
        description:
            "A fresh rebranding of gaming team Northern Forces centered around custom illustrations.",
        category: "Web Development",
        src: cvapp,
        link: "https://www.behance.net/gallery/119507687/Northern-Forces-2021",
    },
];
