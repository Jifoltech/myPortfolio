import React, { useState } from "react";
import Logo from "../assets/logo1.png";
import CV from "../cv2.pdf";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "100px" }} />
      </div>
      {/* Menu */}
      <ul className=" hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        {/* <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li> */}
      </ul>
      {/* Hamburger */}
      {/* The md:hidden class will make the hamburger menu appear on screens smaller than 768px */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars className="cursor-pointer" /> : <FaTimes />}
        {/* Toggles between open and close */}
      </div>
      {/* Mobile Menu */}
      {/* This helps the toggle to work, such that it will only appear on screens smaller than 768px */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        {/* <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li> */}
      </ul>
      {/* Social Icons */}
      <div className=" hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          {/* GitHub */}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-400 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Jifoltech"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          {/* Email */}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-400 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:jifoltech11@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          {/* Resume */}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-400 bg-[#565f69]">
            <a
              href={CV}
              rel="noopener noreferrer"
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
