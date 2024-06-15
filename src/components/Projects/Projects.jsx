import React, { useState, useEffect } from "react";
import projects from "../../data/projects.json";
import { getImageUrl } from "../../utils";


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

  return (
    <>
      <h2 className="text-white text-4xl font-bold tracking-wider uppercase flex justify-center mt-12">
        Projects
      </h2>
      <div className="relative h-screen my-8 mx-0 md:mx-32" id="projects">
        <div className="absolute inset-0 transition-opacity duration-600">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <img
                src={getImageUrl(project.imageSrc)}
                alt={`Slide ${index + 1}`}
                className=" w-fit h-fit md:w-full md:h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="text-white absolute top-24 left-2 md:top-1/4 md:left-10 md:w-1/2 text-left z-10">
                {/* <p className="uppercase tracking-wide font-bold">
                  {project.title}
                </p> */}
                <h2 className="text-lg md:text-4xl font-bold">
                  {project.title}
                </h2>
                <p className="mt-1 md:mt-4 font-bold">{project.description}</p>
              </div>
              <div>
                <a className="z-10" href={project.github}>
                  <img src={getImageUrl("assets/contact/github.png")} className="z-10 absolute top-0 right-0 p-4 size-20"/>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className=" hidden md:block md:absolute top-1/3 right-12 z-10 space-y-4">
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

        <div className="absolute top-1/3 md:top-2/3 inset-x-0 flex justify-center space-x-4 z-10 overflow-auto px-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`w-36 h-52 flex-shrink-0 ${
                index === activeIndex ? "brightness-125" : "brightness-50"
              } transition duration-500`}
              onClick={() => setActiveIndex(index)}
            >
              <img
                src={getImageUrl(project.imageSrc)}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-1/2 md:h-full object-cover rounded-lg"
              />
              <div className="text-white font-bold absolute inset-x-0 top-1/3 md:top-3/4 text-center text-sm">
                {project.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
