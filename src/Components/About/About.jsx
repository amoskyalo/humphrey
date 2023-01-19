import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const About = () => {
  return (
    <section className="mx-auto border-dashed border-t border-gray-700 py-16 px-2 xl:px-0" id="about">
      <h2
        className="cursor-pointer relative text-4xl font-extrabold before:h-[5%] before:top-12 before:w-[40%] hover:before:w-[10%] 
        before:duration-1000 before:block before:absolute before:bg-current md:before:w-[15%]"
      >
        About
      </h2>
      <div className="mt-10 flex flex-col space-y-5 lg:flex-row lg:mt-10 lg:space-y-0 lg:space-x-10">
        <div>
          <div className="flex flex-row gap-2 text-2xl font-extrabold mb-3">
            <p>Hello there</p>
          </div>
          <ul className="text-base">
            <RoughNotationGroup show={true}>
              <li className="list">
                My name is <span>Humphrey Omukaga.</span>
              </li>
              <br></br>
              <li className="list">
                I am an <span>Undergraduate Architecture Student</span> at{" "}
                <span>Jomo Kenyatta University of Agriculture(JKUAT).</span>
              </li>
              <br></br>
              <li>
                I am passionate about designing sustainable and functional
                buildings that enhance the lives of those who use them. I am
                eager to learn more about the industry
              </li>
              <br></br>
              <li>
                I am interested in all things that are made of creative ideas
                and remarkable concepts. A great fan of Brutal Architecture,
                sustainability and climate change. My desire for sustainability
                has pushed me to establish {""}
                <RoughNotation type="underline" color="blue">
                  Kany Ait Group,
                </RoughNotation>{" "}
                a construction firm focused on building using sustainable
                materials.
              </li>
              <br></br>
              <li>
                With passion for creating, creative thought and inspiration
                derived from nature, every day I see new solutions for the space
                that surrounds me.
              </li>
              <br></br>
              <li>
                I have a keen interest in politics of principle and ethical
                business.
              </li>
            </RoughNotationGroup>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
