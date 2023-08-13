/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "text-primary": "var(--text-primary)",
                "text-blue": "var(--text-blue)",
                "grid-cyan": "var(--grid-cyan)",
                background: "var(--background)",
                "background-lighter": "var(--background-lighter)",
                "gradient-1": "var(--gradient-1)",
                "gradient-2": "var(--gradient-2)",
                "gradient-3": "var(--gradient-3)",
                "gradient-4": "var(--gradient-4)",
            },
            backgroundImage: {
                "hero-image": "url('../assets/images/Jaipreet-Hero-Image.jpg')",
                "banner-image":
                    "url('../assets/branding/Personal-Website-Gradient.jpg')",
            },
            keyframes: {
                gradientPulse: {
                    "0%, 100%": {
                        transform: "scale(1) translateY(50%) translateX(50%)",
                        opacity: 1,
                    },
                    "50%": {
                        transform: "scale(1.2) translateY(55%) translateX(55%)",
                        opacity: 0.9,
                    },
                },
            },
            animation: {
                "gradient-pulse-1": "gradientPulse 5s ease-in-out infinite",
                "gradient-pulse-2": "gradientPulse 3s ease-in-out infinite",
                "gradient-pulse-3": "gradientPulse 4s ease-in-out infinite",
                "gradient-pulse-4": "gradientPulse 6s ease-in-out infinite",
            },
        },
    },
    plugins: [],
};
