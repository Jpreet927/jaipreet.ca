"use client";

import React from "react";
import Hero from "@/components/about/hero";
import AboutMe from "@/components/about/aboutme";
import ThankYou from "@/components/about/thankyou";

const AboutPage = () => {
  return (
    <main className="w-screen flex flex-col">
      <Hero />
      <AboutMe />
      <ThankYou />
    </main>
  );
};

export default AboutPage;
