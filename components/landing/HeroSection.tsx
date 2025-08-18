"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import BookDemo from "@/components/BookDemo";

export default function HeroSection() {
  const skills = [
    "Digital Solutions",
    "Creative Products", 
    "Business Consultancy",
    "Technology Training",
    "Strategic Planning",
  ];

  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
        setIsVisible(true);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10 pt-24 pb-20">
        {/* Professional Trust Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/20 backdrop-blur-md text-white text-sm font-medium rounded-full mb-10 border border-white/30 shadow-lg">
          <span className="text-white">Trusted by 100+ Businesses</span>
        </div>

        {/* Professional Headline with Better Contrast */}
        <h1 className="text-2xl md:text-5xl font-black text-white mb-8 md:leading-tight leading-[1.5] drop-shadow-lg">
          <span className="block mb-4">
            Empowering businesses with comprehensive
          </span>
          <span className="block">
            <span
              className={`bg-yellow-400 text-xl md:text-5xl text-gray-800 px-5 py-3 rounded-2xl font-black inline-block transform hover:scale-105 transition-all duration-300 shadow-xl ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
              {skills[currentSkillIndex]}
            </span>
          </span>
        </h1>

        {/* Professional Value Proposition */}
        <p className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md font-medium">
          Your business&apos; journey to{" "}
          <span className="font-bold text-white">digital excellence</span>
          {" "}starts here! <br />Custom solutions.{" "}
          <span className="block md:inline text-white/95">
            Proven results.
          </span>
        </p>

        {/* Professional CTA */}
        <div className="mb-14">
          <BookDemo>
            <Button
              size="lg"
              className="bg-white animate-shake text-blue-700 hover:bg-blue-50 px-12 py-5 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Book a Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </BookDemo>
        </div>

        {/* Professional Program Navigation */}
        <div className="md:flex flex-wrap items-center justify-center gap-3 mb-12 hidden">
          <div className="bg-white/25 backdrop-blur-sm px-6 py-3 rounded-full text-white font-medium text-sm border border-white/40 hover:bg-white/35 transition-colors">
            Jabin Web Solutions
          </div>
          <div className="bg-white/25 backdrop-blur-sm px-6 py-3 rounded-full text-white font-medium text-sm border border-white/40 hover:bg-white/35 transition-colors">
            Jabin Store Products
          </div>
          <div className="bg-white/25 backdrop-blur-sm px-6 py-3 rounded-full text-white font-medium text-sm border border-white/40 hover:bg-white/35 transition-colors">
            Business Consultancy
          </div>
        </div>

        {/* Enhanced Stats Display with Better Contrast */}
        {/* <div className="flex flex-wrap items-center justify-center gap-6 text-white text-sm drop-shadow-sm">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-lg">1000+</span>
            <span className="text-white/95">professionals trained</span>
          </div>
          <div className="w-1 h-1 bg-white/70 rounded-full hidden sm:block"></div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-lg">95%</span>
            <span className="text-white/95">career advancement</span>
          </div>
          <div className="w-1 h-1 bg-white/70 rounded-full hidden sm:block"></div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-lg">HIPAA</span>
            <span className="text-white/95">compliant training</span>
          </div>
        </div> */}
      </div>
    </section>
  );
}

