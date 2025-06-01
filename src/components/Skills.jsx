import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <section
      name="skills"
      className="w-full min-h-screen bg-[#0a192f] text-gray-300 py-16"
    >
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full h-full">
        {/* Section Header */}
        <div className="mb-8">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-[#64ffda]">
            Skills
          </p>
          <p className="py-4 text-sm sm:text-base">
            These are some of the skills I have and technologies I've worked
            with.
          </p>
        </div>

        {/* Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          <SkillItem icon={HTML} name="HTML" />
          <SkillItem icon={CSS} name="CSS" />
          <SkillItem icon={JavaScript} name="JavaScript" />
          <SkillItem icon={ReactImg} name="React" />
          <SkillItem icon={Tailwind} name="Tailwind" />
        </div>
      </div>
    </section>
  );
};

// Reusable SkillItem component
const SkillItem = ({ icon, name }) => (
  <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-md p-4 bg-[#0f1c34]">
    <img src={icon} alt={`${name} icon`} className="w-20 mx-auto" />
    <p className="mt-4 font-medium">{name}</p>
  </div>
);

export default Skills;
