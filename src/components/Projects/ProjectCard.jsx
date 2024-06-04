import React from "react";

export const ProjectCard = ({ project: { title, imageSrc, description } }) => {
  return (
    <div className="relative w-64 h-96 mx-4">
      <img
        src={imageSrc}
        alt={`Image of ${title}`}
        className="w-full h-full object-cover border-8 border-white rounded-lg transition-transform duration-500"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-transparent to-black bg-opacity-70 rounded-lg p-4 text-center text-white opacity-0 hover:opacity-100 transition-opacity duration-500">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="font-semibold">{description}</p>
      </div>
    </div>
  );
};
