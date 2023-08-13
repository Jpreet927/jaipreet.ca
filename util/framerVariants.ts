export const textOpacityLine = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delay: 1,
            staggerChildren: 0.08,
            ease: "easeInOut",
        },
    },
};

export const textOpacityChar = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

export const opacityTranslateY = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
    },
};

export const navDropdown = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exist: { opacity: 0 },
};
