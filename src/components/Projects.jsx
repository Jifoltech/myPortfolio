import React from "react";
import Hoobank from "../assets/projects/Hoobank.png";
import pizzaMenu from "../assets/projects/pizza-menu.png";
import Realestate from "../assets/projects/Real-estate.png";
import travelList from "../assets/projects/travel-list.png";
import eatNsplit from "../assets/projects/eat-n-split.png";
import Food from "../assets/projects/food.png";

const projectData = [
  {
    title: "Hoobank Application",
    image: Hoobank,
    demo: "https://hoobank-project-ochre.vercel.app/",
    code: "https://github.com/Jifoltech/Hoobank-Project",
    textColor: "text-white",
  },
  {
    title: "Pizza-menu App",
    image: pizzaMenu,
    demo: "https://pizza-menu-pied.vercel.app/",
    code: "https://github.com/Jifoltech/pizza-menu",
    textColor: "text-black",
  },
  {
    title: "Real-estate App",
    image: Realestate,
    demo: "https://real-estate-react-app-pi.vercel.app/",
    code: "https://github.com/Jifoltech/Real-Estate-React-App",
    textColor: "text-white",
  },
  {
    title: "Travel List App",
    image: travelList,
    demo: "https://travel-list-rho-gray.vercel.app/",
    code: "https://github.com/Jifoltech/Travel-list",
    textColor: "text-white",
  },
  {
    title: "Eat-N-Split App",
    image: eatNsplit,
    demo: "https://eat-n-split-blush-three.vercel.app/",
    code: "https://github.com/Jifoltech/Eat-N-Split",
    textColor: "text-black",
  },
  {
    title: "Food App",
    image: Food,
    demo: "https://food-app-red-ten.vercel.app/",
    code: "https://github.com/Jifoltech/Food-App",
    textColor: "text-white",
  },
];

const Projects = () => {
  return (
    <section
      name="projects"
      className="bg-[#0a192f] w-full min-h-screen text-gray-300 py-16"
    >
      <div className="max-w-[1000px] mx-auto px-4">
        <div className="pb-8">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-[#64ffda]">
            Projects
          </p>
          <p className="py-4 text-sm sm:text-base">
            Check out some of my work below.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projectData.map(({ title, image, demo, code, textColor }, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${image})` }}
              className="relative group container rounded-md shadow-md shadow-[#040c16] flex justify-center items-center mx-auto h-64 bg-cover bg-center"
            >
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 rounded-md flex flex-col justify-center items-center">
                <span
                  className={`text-lg sm:text-2xl font-bold ${textColor} tracking-wider text-center px-2`}
                >
                  {title}
                </span>
                <div className="pt-4 flex flex-col sm:flex-row gap-2">
                  <a href={demo} target="_blank" rel="noopener noreferrer">
                    <button className="rounded-lg px-4 py-2 bg-white text-gray-700 font-semibold text-sm">
                      Demo
                    </button>
                  </a>
                  <a href={code} target="_blank" rel="noopener noreferrer">
                    <button className="rounded-lg px-4 py-2 bg-white text-gray-700 font-semibold text-sm">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
