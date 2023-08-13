import paths from "@/assets/images/Design Images/PATHS.jpg";
import bleach from "@/assets/images/Design Images/Bleach-Poster.jpg";
import yakouchuu from "@/assets/images/Design Images/Indigo-La-End-Yakouchuu.jpg";
import utopia from "@/assets/images/Design Images/Utopia.jpg";
import ingigolaend from "@/assets/images/Design Images/Indigo-La-End-1.jpg";
import tlou from "@/assets/images/Design Images/Last-of-Us-2-Poster-2-updated.jpg";
import klow from "@/assets/images/Design Images/Kyle-Lowry-Poster.jpg";
import strangerthings from "@/assets/images/Design Images/Stranger-Things-3-Poster.jpg";
import entropy from "@/assets/images/Design Images/project thumbnails/Entropy-Rebrand.jpg";
import huntsmen from "@/assets/images/Design Images/project thumbnails/Huntsmen-Proposal.jpg";
import north from "@/assets/images/Design Images/project thumbnails/North-Rebrand.jpg";
import rush from "@/assets/images/Design Images/project thumbnails/Rush-Rebrand.jpg";

import { StaticImageData } from "next/image";
import { Project } from "@/components/home/projectcard";

export interface Artwork {
    title: string;
    src: StaticImageData;
}

export const projects: Project[] = [
    {
        title: "Entropy Gaming",
        description:
            "Established new social media assets and brand guidelines to reflect core brand attributes.",
        category: "Graphic Design",
        src: entropy,
        link: "https://www.behance.net/gallery/148256469/Entropy-Gaming?log_shim_removal=1",
    },
    {
        title: "Chicago Huntsmen",
        description:
            "Leveraged the established Huntsmen identity to bring a new take on the brands social media graphics.",
        category: "Graphic Design",
        src: huntsmen,
        link: "https://www.behance.net/gallery/110895407/Chicago-Huntsmen",
    },
    {
        title: "Rush Gaming",
        description:
            "Built on top of Rush Gamings core values to invoke a streetwear inspired visual identity.",
        category: "Graphic Design",
        src: rush,
        link: "https://www.behance.net/gallery/116128699/Rush-Gaming",
    },
    {
        title: "Northern Forces",
        description:
            "A fresh rebranding of gaming team Northern Forces centered around custom illustrations.",
        category: "Graphic Design",
        src: north,
        link: "https://www.behance.net/gallery/119507687/Northern-Forces-2021",
    },
];

export const artwork: Artwork[] = [
    {
        title: "Paths Poster",
        src: paths,
    },
    {
        title: "Bleach Poster",
        src: bleach,
    },
    {
        title: "Utopia Poster",
        src: utopia,
    },
    {
        title: "Yakouchuu Poster",
        src: yakouchuu,
    },
    {
        title: "Indigo La End Poster",
        src: ingigolaend,
    },
    {
        title: "Last of Us 2 Poster",
        src: tlou,
    },
    {
        title: "Kyle Lowry Poster",
        src: klow,
    },
    {
        title: "Stranger Things Poster",
        src: strangerthings,
    },
];
