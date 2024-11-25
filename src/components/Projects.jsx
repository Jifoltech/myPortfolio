import React from "react";
import pizzaMenu from "../assets/projects/pizza-menu.png";
import Hoobank from "../assets/projects/Hoobank.png";
import Realestate from "../assets/projects/Real-estate.png";
import travelList from "../assets/projects/travel-list.png";
import eatNsplit from "../assets/projects/eat-n-split.png";
import Glovo from "../assets/projects/Glovo-clone.png";

const Projects = () => {
  return (
    <div
      name="projects"
      className="bg-[#0a192f] w-full h-screen text-gray-300 pb-32"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#64ffda] text-gray-300">
            Projects
          </p>
          <p className="py-6"> Check Out Some Of My Works.</p>
        </div>

        {/* Grid  Container */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}

          {/* Hoobank */}
          <div
            style={{ backgroundImage: `url(${Hoobank})` }}
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Hoobank Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://hoobank-project-ochre.vercel.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Jifoltech/Hoobank-Project"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* pizza-menu */}
          <div
            style={{ backgroundImage: `url(${pizzaMenu})` }}
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Pizza-menu App
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://pizza-menu-pied.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Jifoltech/pizza-menu"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Real-estate App */}
          <div
            style={{ backgroundImage: `url(${Realestate})` }}
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Real-estate App
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://real-estate-react-app-pi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Jifoltech/Real-Estate-React-App"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Travel-list */}
          <div
            style={{ backgroundImage: `url(${travelList})` }}
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Travel List App
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://travel-list-rho-gray.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Jifoltech/Travel-list"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Eat-N-Split */}
          <div
            style={{ backgroundImage: `url(${eatNsplit})` }}
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Eat-N-Split App
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://eat-n-split-blush-three.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Jifoltech/Eat-N-Split"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Glovo Cloned App */}
          <div
            style={{ backgroundImage: `url(${Glovo})` }}
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Glovo App (Cloned)
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://glovo-app-clone.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Jifoltech/Glovo-App-Clone"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* End of Projects */}
        </div>
        {/* Container ends here */}
      </div>
    </div>
  );
};

export default Projects;
