import Button from "../../Button/Button";
import image from "../../Assets/profile.png";
import { BsWhatsapp } from "react-icons/bs";
import { BiCloudDownload } from "react-icons/bi";
import { MdArchitecture } from "react-icons/md";
import { FaAward, FaInstagram } from "react-icons/fa";
import {
  AiOutlineFundProjectionScreen,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import Typewriter from "typewriter-effect";
import Nav from "../Nav/Nav";
import { useState } from "react";

const Hero = () => {
  const [sticky, setSticky] = useState("#");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 150) {
      return setSticky("sticky");
    } else {
      return setSticky("#");
    }
  });

  return (
    <section className="flex flex-col hero relative mx-auto md:h-screen" id="home">
      <div className={`z-50 top-0 right-0 w-full ${sticky === 'sticky' ? `fixed nav` : ""}`}>
        <div className="max-w-6xl mx-auto">
          <Nav />
        </div>
      </div>
      <div className="h-full flex flex-col px-2 justify-evenly xl:px-5">
        <div className="border-dashed border-b border-slate-700 pb-8 flex flex-col  items-center md:pb-16  md:flex-row">
          <div className="space-y-3 mt-10 w-full md:space-y-10 md:mt-0 md:w-1/3">
            <Button text="👋 Hello there..." className="bg-[#14132a]" />
            <div>
              <p className="font-semibold text-xl">
                I'm{" "}
                <span className="block text-3xl font-bold xl:text-5xl">
                  Humphrey Omukaga.
                </span>
              </p>
              <Typewriter
                options={{
                  strings: ["Architect"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <div className="flex flex-row space-x-2 text-2xl pt-3 md:pt-0">
              <a href="https://www.instagram.com/humphreyomukaga/">
                <FaInstagram />
              </a>
              <a href="https://twitter.com/HumphreyOmukaga">
                <AiFillTwitterCircle />
              </a>
              <a href="https://www.linkedin.com/in/humphrey-omukaga-07950a167/">
                <AiFillLinkedin />
              </a>
            </div>
          </div>
          <div className="bg-slate-700 h-[20rem] mt-10 w-[20rem] rounded-full order-first md:h-[24rem] md:mt-0 md:w-1/3 md:order-none">
            <img src={image} alt="" className="h-full w-full  object-contain md:object-cover" />
          </div>
          <div className="flex flex-row w-full mt-3 justify-between md:flex-col md:mt-0 md:space-y-5 md:justify-end md:items-end md:w-1/3">
            <a
              href="https://wa.me/254745048120"
              className="hidden flex-row w-max items-center gap-2 font-bold rounded-xl md:flex md:py-1.5 md:px-5 md:border"
            >
              <BsWhatsapp className="text-xl" />
              Lets talk
            </a>
            <a href="mailto:humphreyomukaga@gmail.com?subject=CV Request&body=Hello Humphrey, am writting this email to request for you CV." className="flex flex-row w-max items-center gap-2 border font-bold rounded-xl py-2 px-5 md:py-1.5">
              Download My CV
              <BiCloudDownload className="text-2xl" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-5 p-8 text-center md:gap:10 md:p-0 md:flex-row">
          <div className="border flex flex-col items-center space-y-5 justify-center border-slate-700 h-48 rounded md:w-1/3">
            <MdArchitecture className="text-4xl" />
            <p>
              Passion for{" "}
              <span className="block text-3xl font-bold">Creative</span>
            </p>
          </div>
          <div
            className={`${
              !document.body.classList.value === ""
                ? `border-slate-700 `
                : `bg-slate-700`
            } award flex flex-col space-y-5 items-center justify-center h-48 rounded md:w-1/3`}
          >
            <FaAward className="text-4xl" />
            <p>
              Award<span className="block text-3xl font-bold">Winner</span>
            </p>
          </div>
          <div className="border border-slate-700 flex flex-col space-y-5 items-center justify-center h-48 rounded md:w-1/3">
            <AiOutlineFundProjectionScreen className="text-4xl" />
            <p>
              Dozens of project{" "}
              <span className="block text-3xl font-bold">Completed</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
