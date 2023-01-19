import React, { useState } from "react";
import { data } from "./Data";

const Awards = () => {
  const [show, setShow] = useState();

  return (
    <section className="px-2 xl:px-0 py-16 border-t border-gray-700 border-dashed">
      <h2
        className="cursor-pointer relative text-4xl font-extrabold before:h-[5%] before:top-12 before:w-[80%] hover:before:w-[10%] 
        before:duration-1000 before:block before:absolute before:bg-current md:before:w-[20%]"
      >
        Achievements
      </h2>
      <p className="mt-5">
        In addition to my achievements in architecture, I have also been
        recognized for my leadership skills and other relevant qualifications.
        Through awards, competitions, and personal development I have been able
        to demonstrate my abilities to work effectively in a team, my
        communication skills, and my dedication to personal and professional
        development. <br></br><br></br>These achievements are a testament to my capabilities in
        various areas and my commitment to the field.
      </p>
      <div className="grid grid-cols-1 gap-10 mt-10 px-2 md:gap-3 md:grid-cols-3 xl:gap-10 xl:px-0">
        {data.map((award, i) => (
          <div
            key={i}
            onMouseEnter={() => setShow(data.indexOf(award))}
            onMouseLeave={() => setShow()}
          >
            <img
              src={award.image}
              alt=""
              className={`h-72 w-full rounded-t-xl object-cover duration-700 ${
                show === data.indexOf(award)
                  ? `brightness-[20%]`
                  : `brightness-[100%]`
              }`}
            />
            <div className="flex flex-row justify-between items-center">
              <h2 className="text-lg font-semibold text-sky-500">
                {award.title}.
              </h2>
              <h2 className="italic text-sky-500">:{award.year}</h2>
            </div>
            <p className="mt-2">{award.text}.</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
