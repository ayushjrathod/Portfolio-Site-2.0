"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import projectsData from "../../data/projects.json";
import { getImageUrl } from "../../utils";

export const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + projectsData.length) % projectsData.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="py-16 min-h-screen" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-4xl font-bold tracking-wider uppercase text-center mb-6 flex w-full justify-center">
          Projects
        </h2>
        <div className="relative min-h-[500px] md:h-[70vh] w-full overflow-hidden rounded-xl">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-all duration-500 ${
                index === activeIndex ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
              }`}
              style={{ zIndex: index === activeIndex ? 20 : 10 }}
            >
              <div className="relative w-full h-full">
                <img
                  src={getImageUrl(project.imageSrc)}
                  alt={`Project: ${project.title}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-30">
                  <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                  <p className="text-lg mb-6">{project.description}</p>
                  <button
                    onClick={() => window.open(project.github, "_blank")}
                    className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 transition-colors rounded-md text-white"
                  >
                    <img src={getImageUrl("contact/github.png")} alt="GitHub" className="w-6 h-6 mr-2" />
                    View on GitHub
                  </button>
                </div>
              </div>
            </div>
          ))}

          <button
            className="z-50 absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 transition-colors rounded-full p-2 text-white"
            onClick={prevSlide}
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="z-50 absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 transition-colors rounded-full p-2 text-white"
            onClick={nextSlide}
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        {/* 
        <div className="mt-8 flex justify-center space-x-4 overflow-x-auto py-4">
          {projectsData.map((project, index) => (
            <button
              key={index}
              className={`focus:outline-none transition-all duration-300 ${
                index === activeIndex ? "scale-110 border-2 border-white" : "opacity-50 hover:opacity-75"
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`View ${project.title} project`}
            >
              <img
                src={getImageUrl(project.imageSrc)}
                alt={`Thumbnail: ${project.title}`}
                className="w-24 h-24 object-cover"
              />
            </button>
          ))}
        </div> */}
      </div>
    </section>
  );
};
