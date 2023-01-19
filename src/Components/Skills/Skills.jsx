import React from "react";
import { datas } from "./Data";

const Skills = () => {
  return (
    <section className="border-t border-dashed border-gray-700 py-16 px-2 xl:px-0" id="skills">
      <h2 className="cursor-pointer relative text-4xl font-extrabold before:h-[5%] before:top-12 before:w-[40%] hover:before:w-[10%] before:duration-1000 before:block before:absolute before:bg-current md:before:w-[15%]">
        Skills
      </h2>
      <div className="mt-5 xl:w-3/4">
        <p>
          In my studies and personal projects, I have gained experience using
          various architecture software. I am proficient in creating detailed
          floor plans, elevations, sections, 3D models, and renders using these
          programs. I am also familiar with BIM (Building Information Modeling)
          and have experience working on collaborative projects using these
          software. <br></br><br></br>These skills have allowed me to bring my designs to life.
          Some of the architecture softwares that am proficient with include:
        </p>
        <ul className="list-disc pl-10 mt-2">
          <li>
            3D modelling software such as ArchiCAD, Sketchup and Twin Motion.
          </li>
          <li>
            Experience with rendering and visualizationsoftware such as Lumion.
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-5 mx-auto md:flex md:flex-row md:w-[60%] md:mt-10">
        {datas.map((skill, i) => (
          <div
            key={i}
            className="space-y-1 flex flex-col items-center md:w-1/4"
          >
            <div className="w-full">
              <img
                src={skill.image}
                alt=""
                className="h-24 mx-auto object-contain rounded-full hover:h-28 duration-500"
              />
            </div>
            <h2 className="font-semibold text-lg md:text-xl">{skill.title}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
