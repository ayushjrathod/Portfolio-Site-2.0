import { getImageUrl } from "../../utils";


export const About = () => {
  return (
    <section
      className="backdrop:blur-lgh-full bg-gray-500 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 relative bg-[rgba(12,12,12,0.31)]  p-0 md:px-20 md:py-6 mt-32 z-10 mx-0 md:mx-5"
      id="about"
    >
      <h2 className=" text-white text-4xl font-bold tracking-wider uppercase flex justify-center mb-12">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-between ">
        <img
          src={getImageUrl("about/aboutme.png")}
          alt="about me image"
          className="size-72 md:size-80 h-auto items-start m-4"
        />
        <p className="text-white font-bold text-2xl items-end leading-10 ml-10">
          I am really passionate about creating programs that solve real world problems.
          <br />
          <br />
          I try to stay ahead of the curve. New tech? Bring it on.
          Stagnation? Not my style. I am Versatile as this Tech. industry moves fast.
          <br />
          <br /> When I'm not writing code, you'll find me on the badminton
          court for a dose of adrenaline or diving into the latest video game. Quiet
          nights? Books or battling some epic chords on my guitar (still a work
          in progress, but hey, gotta start somewhere).
          <br />
          <br />
          Let's break the mold and create something awesome together. Buckle up,
          it's gonna be a wild ride.
        </p>
      </div>
    </section>
  );
};
