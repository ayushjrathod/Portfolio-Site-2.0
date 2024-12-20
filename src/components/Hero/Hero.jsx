import React from "react";

import TypingText from "./typingText";
import { getImageUrl } from "../../utils";
import MagicButton from "./button";

export const Hero = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between mt-10 md:mt-20 mx-5 md:mx-0 z-10">
      <div className="flex flex-col items-start text-text z-10 select-none">
        <h1 className=" text-white text-5xl md:text-7xl font-bold mb-2 font-tech">
          Hi, I'm Ayush
        </h1>
        {/* <h3 className=" text-white text-2xl md:text-4xl font-semibold mb-2 font-tech">
          Developer and Designer
        </h3> */}
        <TypingText />
        <p className=" text-white text-lg md:text-xl font-medium mb-8 font-tech">
          I'm a programming fanatic with a burning desire to code.
        </p>
        {/* <a
          href="https://drive.google.com/file/d/1uO4DkZr_07EjQfRkWSvn6u8QKK5dFfe4/view?usp=sharing"
          className="text-white  text-text bg-[#4e4394] rounded-lg text-xl md:text-2xl font-semibold px-8 py-5"
          target="_blank"
        >
          Download CV
        </a> */}
        <MagicButton />
      </div>
      <img
        src={getImageUrl("hero/coding2.gif")}
        alt="Hero image"
        className="mt-8 md:mt-0 w-64 md:w-96 rounded-3xl z-10"
      />
    </section>
  );
};
