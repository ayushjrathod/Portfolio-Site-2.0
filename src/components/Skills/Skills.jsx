import ColorThief from "colorthief";
import React, { useEffect, useState } from "react";

import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Skills = () => {
  const [skillColors, setSkillColors] = useState({});

  useEffect(() => {
    const colorThief = new ColorThief();

    skills.forEach((skill) => {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.src = getImageUrl(skill.imageSrc);
      img.onload = () => {
        const color = colorThief.getColor(img);
        setSkillColors((prev) => ({
          ...prev,
          [skill.title]: `rgb(${color.join(",")})`,
        }));
      };
    });
  }, []);

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
              <a
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                key={id}
                className="border-1 rounded-lg w-fit m-2 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/20 cursor-pointer"
                style={{ backgroundColor: skillColors[skill.title] || "#4e4394" }}
              >
                <div className="bg-gray-700 m-3 rounded-lg shadow-md">
                  <img className="size-20 p-3 z-30" src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p className="text-white flex justify-center font-Kanit pb-2">{skill.title}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
