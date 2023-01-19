import React, { useState } from "react";
import { HiOutlineSun } from "react-icons/hi";
import { BsFillMoonFill } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";

const Nav = () => {
  const [dark, setDark] = useState(false);
  const [active, setActive] = useState(false);

  const setDarkMode = () => {
    document.body.classList.toggle("dark");
    setDark(!dark);
  };

  const navData = [
    { name: "Home" },
    { name: "About" },
    { name: "Projects" },
    { name: "Skills" },
    { name: "Contact" },
  ];

  const myName = "{ Humphrey }";
  return (
    <nav className="z-50 flex flex-row justify-between py-5 items-center px-2 md:px-5}">
      <a className="text-sky-500" href="#home">
        <code className="font-semibold text-2xl">{myName}</code>
      </a>
      <div
        className={`flex flex-col absolute bg-transparentColor opacity-[95%]  top-0 duration-300 ${
          active ? `-right-[0%]` : `-right-[100%]`
        } h-screen w-full items-start pl-[25%] justify-center space-y-5 md:right-0 md:items-center md:pl-0 md:opacity-[100%] md:h-max md:space-y-0 md:bg-transparent  md:space-x-5 md:relative md:flex-row md:top-0 md:w-max`}
      >
        <div className="block absolute text-2xl font-black top-10 right-10 md:hidden">
          <RxCross1 onClick={() => setActive(!active)} />
        </div>
        {navData.map((link, i) => (
          <a
            href={`#${link.name.toLowerCase()}`}
            key={i}
            className={`text-xl font-extrabold md:text-xl ${
              dark ? `text-white md:text-gray-700` : `text-white`
            }`}
            onClick={() => setActive(!active)}
          >
            {link.name}
          </a>
        ))}

        <div className="hidden md:block">
          <HiOutlineSun
            className={`text-xl text-sky-500 font-extrabold cursor-pointer ${
              dark ? `hidden` : `block`
            }`}
            onClick={() => setDarkMode()}
          />
          <BsFillMoonFill
            className={`text-base cursor-pointer ${!dark ? `hidden` : `block`}`}
            onClick={() => setDarkMode()}
          />
        </div>
      </div>
      <div className="flex flex-row items-center space-x-3 md:hidden">
        <div className="block md:hidden">
          <HiOutlineSun
            className={`text-2xl text-sky-500 font-extrabold cursor-pointer ${
              dark ? `hidden` : `block`
            }`}
            onClick={() => setDarkMode()}
          />
          <BsFillMoonFill
            className={`text-base cursor-pointer ${!dark ? `hidden` : `block`}`}
            onClick={() => setDarkMode()}
          />
        </div>
        <AiOutlineMenu
          className="text-2xl"
          onClick={() => setActive(!active)}
        />
      </div>
    </nav>
  );
};

export default Nav;
