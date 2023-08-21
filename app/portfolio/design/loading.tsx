import React from "react";

const Loading = () => {
    return (
        <main className="w-screen">
            <div className="h-[50vh] flex items-center w-full overflow-hidden animate-pulse"></div>
            <div className="gap-[16px] lg:columns-3 md:columns-2 columns-1">
                <div className="lg:w-[33%] md:w-[50%] w-full animate-pulse bg-gray-600/50"></div>
                <div className="lg:w-[33%] md:w-[50%] w-full animate-pulse bg-gray-600/50"></div>
                <div className="lg:w-[33%] md:w-[50%] w-full animate-pulse bg-gray-600/50"></div>
                <div className="lg:w-[33%] md:w-[50%] w-full animate-pulse bg-gray-600/50"></div>
                <div className="lg:w-[33%] md:w-[50%] w-full animate-pulse bg-gray-600/50"></div>
                <div className="lg:w-[33%] md:w-[50%] w-full animate-pulse bg-gray-600/50"></div>
                <div className="lg:w-[33%] md:w-[50%] w-full animate-pulse bg-gray-600/50"></div>
                <div className="lg:w-[33%] md:w-[50%] w-full animate-pulse bg-gray-600/50"></div>
            </div>
        </main>
    );
};

export default Loading;
