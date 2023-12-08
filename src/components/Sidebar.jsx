import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/logo-s.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHome,
  faUser,
  faCode,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import RoundToolTip from "./common/RoundToolTip";
import HamburgerMenu from "./common/HamburgerMenu";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const [iconLabel, setIconLabel] = useState("");
  const [toolTipVisibility, setToolTipVisibility] = useState("");

  const handleToolTipVisibility = (iconLabel,toolTipVisibility) => {
  setIconLabel(iconLabel);
  setToolTipVisibility(toolTipVisibility);
  }
  return (
    <header className="bg-sidebar w-full h-28 lg:w-24 lg:h-screen lg:fixed top-0 z-10 flex flex-row lg:flex-col items-center lg:gap-x-10 lg:justify-between relative ">
      <Link to="/">
        <div className="">
          <img
            src={Logo}
            alt="logo"
            className="w-10 lg:mt-8 lg:mx-auto py-1 lg:py-0 sepia"
          />
          <h1 className="text-white font-bold text-xl text-left mt-1">
            Sushant
          </h1>
        </div>
      </Link>
      {/* navbar section */}
      <nav className="md:flex flex-row lg:flex-col items-center md:mx-auto gap-x-10 md:gap-x-20 lg:gap-y-10 hidden">
        <NavLink
          exact="true"
          activeclassname="selected"
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "var(--c-secondary)" : "var(--c-icon)",
            position:'relative'
          })}
          onMouseEnter={() => handleToolTipVisibility("home","block")}
          onMouseLeave={() => handleToolTipVisibility("home","hidden")}
        >
          <FontAwesomeIcon
            icon={faHome}
            size="2x"
            className="fill-current hover:text-secondary transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-150 duration-300"
          />
          <RoundToolTip toolTipVisibility={iconLabel === "home" && toolTipVisibility === "block" ? "block" : "hidden"} iconLabel = "Home"/>
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="selected"
          to="/about"
          style={({ isActive }) => ({
            color: isActive ? "var(--c-secondary)" : "var(--c-icon)",
            position:'relative'
          })}
          onMouseEnter={() => handleToolTipVisibility("about","block")}
          onMouseLeave={() => handleToolTipVisibility("about","hidden")}
        >
          <FontAwesomeIcon
            icon={faUser}
            size="2x"
            className="fill-current hover:text-secondary transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-150 duration-300"
          />
           <RoundToolTip toolTipVisibility={iconLabel === "about" && toolTipVisibility === "block" ? "block" : "hidden"} iconLabel = "About me"/>
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="selected"
          to="/works"
          style={({ isActive }) => ({
            color: isActive ? "var(--c-secondary)" : "var(--c-icon)",
            position:"relative"
          })}
          onMouseEnter={() => handleToolTipVisibility("works", "block")}
          onMouseLeave={() => handleToolTipVisibility("works", "hidden")}
        >
          <FontAwesomeIcon
            icon={faBriefcase}
            size="2x"
            className="fill-current hover:text-secondary transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-150 duration-300"
          />
          <RoundToolTip toolTipVisibility={iconLabel === "works" && toolTipVisibility === "block" ? "block" : "hidden"} iconLabel="My Works"/>
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="selected"
          to="/skills"
          style={({ isActive }) => ({
            color: isActive ? "var(--c-secondary)" : "var(--c-icon)",
            position:"relative"
          })}
          onMouseEnter={() => handleToolTipVisibility("skills", "block")}
          onMouseLeave={() => handleToolTipVisibility("skills", "hidden")}
        >
          <FontAwesomeIcon
            icon={faCode}
            size="2x"
            className="fill-current hover:text-secondary transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-150 duration-300"
          />
          <RoundToolTip toolTipVisibility={iconLabel === "skills" && toolTipVisibility === "block" ? "block" : "hidden"} iconLabel="My Skills"/>
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="selected"
          to="/contact"
          style={({ isActive }) => ({
            color: isActive ? "var(--c-secondary)" : "var(--c-icon)",
            position:'relative'
          })}
          onMouseEnter={() => handleToolTipVisibility("contact","block")}
          onMouseLeave={() => handleToolTipVisibility("contact","hidden")}
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            size="2x"
            className="fill-current hover:text-secondary transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-150 duration-300"
          />
          <RoundToolTip toolTipVisibility={iconLabel === "contact" && toolTipVisibility === "block" ? "block" : "hidden"} iconLabel="Contact me"/>
        </NavLink>
      </nav>
      <ul className="hidden md:flex md:pr-7 lg:pr-0 lg:flex-col items-center gap-x-12 lg:gap-y-8 lg:mb-5">
        <li>
          <a
            href="https://www.linkedin.com/in/sushant-dhimal-809456202/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-icon hover:text-secondary"
              size="2x"
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/dhiant" target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-icon hover:text-secondary"
              size="2x"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/shant_dhi/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-icon hover:text-secondary"
              size="2x"
            />
          </a>
        </li>
      </ul>
      {/* collapsable button */}
      <HamburgerMenu toggle={toggle} setToggle={setToggle}/>

      {toggle && (
        <div
          className="md:hidden bg-sidebar px-4 w-full h-screen fixed top-0 flex flex-wrap gap-y-10 items-center justify-center menuButtons z-10
        "
        >
          {/* collapsable button */}
      <HamburgerMenu toggle={toggle} setToggle={setToggle}/>
          <div className="flex flex-col gap-16">
            <NavLink
              exact="true"
              activeclassname="selected"
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "var(--c-secondary)" : "var(--c-icon)",
              })}
              className={`flex gap-x-5 items-center`}
              onClick={() => setToggle(false)}
            >
              <FontAwesomeIcon
                icon={faHome}
                size="2x"
                className="fill-current hover:text-secondary transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-150 duration-300" 
              />
              <span className="text-4xl text-icon font-coolvetica">Home</span>
            </NavLink>
            <NavLink
              exact="true"
              activeclassname="selected"
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? "var(--c-secondary)" : "var(--c-icon)",
              })}
              className={`flex gap-x-5 items-center`}
              onClick={() => setToggle(false)}
            >
              <FontAwesomeIcon
                icon={faUser}
                size="2x"
                className="fill-current hover:text-secondary transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-150 duration-300"
              />
              <span className="text-4xl text-icon font-coolvetica">About Me</span>
            </NavLink>
            <NavLink
              exact="true"
              activeclassname="selected"
              to="/works"
              style={({ isActive }) => ({
                color: isActive ? "var(--c-secondary)" : "var(--c-icon)",
              })}
              className={`flex gap-x-5 items-center`}
              onClick={() => setToggle(false)}
            >
              <FontAwesomeIcon
                icon={faBriefcase}
                size="2x"
                className="fill-current hover:text-secondary transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-150 duration-300"
              />
              <span className="text-4xl text-icon font-coolvetica">My Works</span>
            </NavLink>
            <NavLink
              exact="true"
              activeclassname="selected"
              to="/skills"
              style={({ isActive }) => ({
                color: isActive ? "var(--c-secondary)" : "var(--c-icon)",
              })}
              className={`flex gap-x-5 items-center`}
              onClick={() => setToggle(false)}
            >
              <FontAwesomeIcon
                icon={faCode}
                size="2x"
                className="fill-current hover:text-secondary transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-150 duration-300"
              />
              <span className="text-4xl text-icon font-coolvetica">My Skills</span>
            </NavLink>

            <NavLink
              exact="true"
              activeclassname="selected"
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "var(--c-secondary)" : "var(--c-icon)",
              })}
              className={`flex gap-x-5 items-center`}
              onClick={() => setToggle(false)}
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                size="2x"
                className="fill-current hover:text-secondary transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-150 duration-300"
              />
              <span className="text-4xl text-icon font-coolvetica">Contact Me</span>
            </NavLink>
          </div>
          {/* social accounts */}
          <ul className="bg-sidebar justify-center w-full flex gap-x-16 pb-5">
            <li>
              <a
                href="https://www.linkedin.com/in/sushant-dhimal-809456202/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-icon hover:text-secondary"
                  size="2x"
                />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/dhiant"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-icon hover:text-secondary"
                  size="2x"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/shant_dhi/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-icon hover:text-secondary"
                  size="2x"
                />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Sidebar;
