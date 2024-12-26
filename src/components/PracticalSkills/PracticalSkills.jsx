"use client";

import { BarChart3, Code2 } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const experiences = [
  {
    icon: "developer",
    title: "API Development",
    company: "Technical Skill",
    description: "Design and implementation of RESTful and GraphQL APIs, with focus on scalability and security",
    link: "#",
  },
  {
    icon: "chart",
    title: "Full-Stack Development",
    company: "Technical Skill",
    description:
      "End-to-end application development using modern frameworks and best practices for both frontend and backend",
    link: "#",
  },
  {
    icon: "developer",
    title: "Quantization",
    company: "AI/ML Skill",
    description: "Optimization of large language models through model compression and quantization techniques",
    link: "#",
  },
  {
    icon: "chart",
    title: "Retrieval-Augmented Generation (RAG)",
    company: "AI/ML Skill",
    description: "Implementation of RAG systems to enhance LLM responses with external knowledge sources",
    link: "#",
  },
  {
    icon: "developer",
    title: "Chatbot Integration",
    company: "AI/ML Skill",
    description: "Development and deployment of AI-powered conversational interfaces across multiple platforms",
    link: "#",
  },
  {
    icon: "developer",
    title: "Web and Mobile App Development Intern",
    company: "Curomates",
    description:
      "Developed backend APIs, integrated Nodemailer, and implemented features like video-on-focus play, swipe-to-reply, and recursive methods for nested comments, resulting in a 20% increase in user engagement.",
    link: "#",
  },
  {
    icon: "chart",
    title: "Web Developer Intern",
    company: "CodeWithZeal",
    description:
      "Contributed to React-based web applications, collaborated with teams on UI/UX design, and developed full-stack applications using MERN, leading to a 30% boost in user interaction.",
    link: "#",
  },
];

export function PracticalSkills() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % experiences.length);
    }
  }, [isAnimating]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="min-h-screen bg-[#0a0a1a] py-16 overflow-hidden">
      <div className="relative w-full">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="relative">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {experiences.map((experience, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4 py-12">
                <div className="max-w-3xl mx-auto">
                  <div className="relative p-8 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 backdrop-blur-sm hover:from-white/15 hover:to-white/10 transition-colors">
                    <div className="absolute top-0 left-0 -translate-x-3 -translate-y-3">
                      <div
                        className={`w-16 h-16 rounded-2xl ${
                          experience.icon === "developer"
                            ? "bg-gradient-to-br from-blue-500/20 to-purple-500/20"
                            : "bg-gradient-to-br from-purple-500/20 to-pink-500/20"
                        } p-4 flex items-center justify-center backdrop-blur-sm`}
                      >
                        {experience.icon === "developer" ? (
                          <Code2 className="w-8 h-8 text-white/70" />
                        ) : (
                          <BarChart3 className="w-8 h-8 text-white/70" />
                        )}
                      </div>
                    </div>
                    <div className="ml-16">
                      <h3 className="text-2xl font-bold text-white mb-2">{experience.title}</h3>
                      <p className="text-purple-300 text-sm mb-4 font-medium">{experience.company}</p>
                      <p className="text-gray-300 leading-relaxed">{experience.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {experiences.map((_, index) => (
              <button
                key={index}
                onClick={() => !isAnimating && setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-white scale-125" : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
