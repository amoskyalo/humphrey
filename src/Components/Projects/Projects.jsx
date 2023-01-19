import { useState } from "react";
import { data } from "./Data";

const Projects = () => {
  const [show, setShow] = useState();

  const [page, setPage] = useState(1);
  const dataPerPage = 6;

  const lastIndex = dataPerPage * page;
  const firstIndex = lastIndex - dataPerPage;

  const dataToDisplay = data.slice(firstIndex, lastIndex);
  return (
    <section className="border-dashed border-t border-slate-700 py-16 px-2 xl:px-0" id="projects">
      <h2 className="cursor-pointer relative text-4xl font-extrabold before:h-[5%] before:top-12 before:w-[40%] hover:before:w-[10%] before:duration-1000 before:block before:absolute before:bg-current md:before:w-[15%]">
        Projects
      </h2>
      <div className="text-lg mt-5 md:mt-10">
        <p>Hey you there, I see you! Here are some of my recent projects.</p>
      </div>
      <div className="grid grid-cols-1 mt-10 gap-5 md:grid-cols-2 lg:grid-cols-3 px-3 md:px-0">
        {dataToDisplay.map((project, i) => (
          <div
            className="h-80 overflow-hidden relative cursor-pointer flex flex-col rounded"
            key={i}
            onMouseOver={() => setShow(dataToDisplay.indexOf(project))}
            onMouseLeave={() => setShow()}
          >
            <div className="h-full">
              <img
                src={project.image}
                alt=""
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div
              className={`flex flex-col justify-center duration-700 absolute w-full h-full bg-gray-700 opacity-[90%] rounded ${
                show === dataToDisplay.indexOf(project)
                  ? `left-0`
                  : `-left-[100%]`
              }`}
            >
              <p
                className={`${
                  show === dataToDisplay.indexOf(project)
                    ? `text-2xl`
                    : `text-sm`
                } font-semibold text-center duration-1000`}
              >
                {project.title === "Apartment"
                  ? project.title
                  : project.title.charAt(0)}{" "}
                <span className="block text-center">
                  {project.title === "Apartment"
                    ? ""
                    : project.title.slice(1).charAt(1).toUpperCase() +
                      project.title.slice(3)}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <ul className="flex text-lg font-semibold flex-row items-center border mt-10 py-0 rounded-xl w-max mx-auto">
        <li>
          <button
            className="border bg-white text-gray-700 py-2 px-3 rounded-l-xl"
            onClick={() => (page > 1 ? setPage(page - 1) : "")}
          >
            <span className="flex flex-row items-center">&laquo; Prev</span>
          </button>
        </li>
        <li className="bg-white text-gray-700 py-[9px] px-3">
          <button>
            {page} of {data.length / dataPerPage}
          </button>
        </li>
        <li>
          <button
            className="border bg-white text-gray-700 py-2 px-3 rounded-r-xl"
            onClick={() =>
              page < data.length / dataPerPage ? setPage(page + 1) : ""
            }
          >
            <span className="flex flex-row items-center">Next &raquo;</span>
          </button>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
