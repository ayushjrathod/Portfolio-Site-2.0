import React from "react";

import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Skills = () => {
  return (
    <section className="my-12" id="skills">
      <div className="">
        <h2 className="text-white text-4xl font-bold tracking-wider uppercase flex justify-center">The TechStack</h2>
        <h6 className="text-white font-Akshar text-2xl flex justify-center my-2">I bring these skills to the table</h6>
      </div>
      <div className="">
        <div className="inline-flex flex-wrap">
          {skills.map((skill, id) => {
            return (
              <div key={id} className="bg-[#4e4394] border-1 rounded-lg w-fit m-2">
                <div className="">
                  <img className=" size-24 p-4" src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p className="text-white flex justify-center font-Kanit pb-2">{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
