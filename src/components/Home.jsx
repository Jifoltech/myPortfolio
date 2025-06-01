import React from "react";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <section name="home" className="bg-[#0a192f] w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-6 sm:px-8 flex flex-col justify-center h-full">
        <p className="text-[#64ffda] text-base sm:text-lg md:text-xl">
          Hi, my name is
        </p>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#ccd6f6] leading-tight">
          Ifeoluwa Jeremiah Olabode
        </h1>

        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#8892b0] mt-2">
          I'm a Front End Developer
        </h2>

        <p className="text-[#8892b0] py-4 max-w-[700px] text-sm sm:text-base md:text-lg">
          I am glad to have you here. I am dedicated to creating seamless
          digital experiences.
        </p>

        <Link to="projects" smooth={true} duration={500}>
          <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#64ffda] hover:border-[#64ffda] hover:text-black font-medium transition-all duration-300">
            View Projects
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
