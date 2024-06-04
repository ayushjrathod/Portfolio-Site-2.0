import React, { useState, useEffect } from "react";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  // return (
  //   <section className="" id="projects">
  //     <h2 className="text-[--color-text] text-4xl font-bold tracking-wider uppercase flex justify-center my-12">
  //       Projects
  //     </h2>
  //     <div className="flex justify-center">
  //       {projects.map((project, id) => {
  //         return <ProjectCard className="" key={id} project={project} />;
  //       })}
  //     </div>
  //   </section>
  // );

  <h2 className="text-[--color-text] text-4xl font-bold tracking-wider uppercase flex justify-center my-12">
    Projects
  </h2>;
  return (
    <div className="relative h-screen my-32 mx-32">
      <div className="absolute inset-0 transition-opacity duration-500">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={project.imageSrc}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="text-white absolute top-1/4 left-10 w-80 md:w-1/2 text-left z-10">
              <p className="uppercase tracking-wide font-bold">
                {project.title}
              </p>
              <h2 className="text-4xl md:text-6xl font-bold">
                {project.title}
              </h2>
              <p className="mt-4 font-bold">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-1/3 right-12 z-10 space-y-4">
        <button
          onClick={prevSlide}
          className="bg-white/70 hover:bg-white text-black w-10 h-10 rounded-md text-xl mx-1"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="bg-white/70 hover:bg-white text-black w-10 h-10 rounded-md text-xl mx-1"
        >
          &gt;
        </button>
      </div>

      <div className="absolute bottom-12 inset-x-0 flex justify-center space-x-4 z-10 overflow-auto px-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`w-36 h-52 flex-shrink-0 ${
              index === activeIndex ? "brightness-125" : "brightness-50"
            } transition duration-500`}
            onClick={() => setActiveIndex(index)}
          >
            <img
              src={project.imageSrc}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="text-white font-bold absolute inset-x-0 bottom-2 text-center text-sm">
              {project.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
