"use client";

import React from "react";

export const PracticalSkills = () => {
  const skills = [
    {
      title: "API Development",
      description: "Design and implementation of RESTful and GraphQL APIs, with focus on scalability and security",
    },
    {
      title: "Full-Stack Development",
      description:
        "End-to-end application development using modern frameworks and best practices for both frontend and backend",
    },
    {
      title: "Quantization",
      description: "Optimization of large language models through model compression and quantization techniques",
    },
    {
      title: "Retrieval-Augmented Generation (RAG)",
      description: "Implementation of RAG systems to enhance LLM responses with external knowledge sources",
    },
    {
      title: "Chatbot Integration",
      description: "Development and deployment of AI-powered conversational interfaces across multiple platforms",
    },
  ];

  return (
    <section className="py-16 min-h-screen bg-gradient-to-b from-gray-900 to-black" id="practical-skills">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-4xl font-bold tracking-wider uppercase text-center mb-12">Practical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-all transform hover:scale-105 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-white mb-3">{skill.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
