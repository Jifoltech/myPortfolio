import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full pb-32">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#64ffda]">
            Skills
          </p>
          <p className="py-6">
            These are some of the skills I have, and technologies I have worked
            with.
          </p>
        </div>
        {/* Icon container */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={HTML} alt="HTML icon" className="w-20 mx-auto" />
            <p className="my-4"> HTML</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={CSS} alt="CSS icon" className="w-20 mx-auto" />
            <p className="my-4"> CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              src={JavaScript}
              alt="JavaScript icon"
              className="w-20 mx-auto"
            />
            <p className="my-4"> JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={ReactImg} alt="React icon" className="w-20 mx-auto" />
            <p className="my-4"> REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Tailwind} alt="Taiwind icon" className="w-20 mx-auto" />
            <p className="my-4"> TAILWIND</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
