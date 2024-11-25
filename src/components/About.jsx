import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300 mt-[-200px]"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        {/* Container */}
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#64ffda]">
              About
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 ">
          <div className="sm:text-right text-2xl font-bold">
            <p>
              Hi. My name is Ifeoluwa. Nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div>
            <p className="text-[#8892b0] text-justify">
              I am passionate about crafting digital experiences that combine
              innovation and functionality. As a Front-End Developer with a
              creative mindset and strong problem-solving skills, I specialize
              in building intuitive and responsive user interfaces. Proficient
              in HTML, CSS, JavaScript, and frameworks like React.js, I enjoy
              turning design concepts into seamless, interactive web
              experiences. I thrive on tackling challenges and bringing ideas to
              life with clean, efficient code.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
