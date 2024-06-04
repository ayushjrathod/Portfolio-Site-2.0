import React from "react";
import Dropdown from "./dropdown";

export const Navbar = () => {
  return (
    <nav className="text-white flex items-center justify-between sticky top-0 z-50 backdrop:blur-lgh-full bg-gray-400 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-4 m-0">
      <div className="inline-flex">
        <div>
          <a href="/">
            <img
              src="assets/hero/ayushPic.jpg"
              className="size-14 rounded-full border-4"
              href="/"
            />
          </a>
        </div>
        <div className="px-4 py-3">
          <a
            className="font-Kanit text-lg font-semibold text-text no-underline"
            href="/"
          >
            Ayush J Rathod
          </a>
        </div>
      </div>
      <div className="md:hidden">
        <Dropdown />
      </div>
      <div className="hidden md:block">
        <ul className="flex flex-row gap-5 no-underline">
          <li>
            <a
              href="#about"
              className="font-Akshar text-2xl font-semibold spacing"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="font-Akshar text-2xl font-semibold spacing"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="font-Akshar text-2xl font-semibold spacing"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="font-Akshar text-2xl font-semibold spacing"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
