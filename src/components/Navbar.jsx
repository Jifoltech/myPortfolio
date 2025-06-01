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

  const navLinks = [
    { label: "Home", to: "home" },
    { label: "About", to: "about" },
    { label: "Skills", to: "skills" },
    { label: "Projects", to: "projects" },
  ];

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-50">
      {/* Logo */}
      <div>
        <img src={Logo} alt="Logo" style={{ width: "100px" }} />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex">
        {navLinks.map(({ label, to }) => (
          <li
            key={to}
            className="mx-4 cursor-pointer hover:text-[#64ffda] duration-300"
          >
            <Link to={to} smooth={true} duration={500}>
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger Icon */}
      <div
        onClick={handleClick}
        className="md:hidden z-20 cursor-pointer"
        aria-label="Toggle Menu"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={`${
          nav
            ? "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center z-10 transition-all duration-300"
            : "hidden"
        }`}
      >
        {navLinks.map(({ label, to }) => (
          <li key={to} className="py-6 text-4xl">
            <Link onClick={handleClick} to={to} smooth={true} duration={500}>
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          {/* GitHub */}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              href="https://github.com/Jifoltech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center w-full text-gray-300 px-4"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          {/* Email */}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              href="mailto:jifoltech11@gmail.com"
              className="flex justify-between items-center w-full text-gray-300 px-4"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          {/* Resume */}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              href={CV}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center w-full text-gray-300 px-4"
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
