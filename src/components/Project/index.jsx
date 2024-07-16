import { LuChefHat } from "react-icons/lu";
import { MdBakeryDining } from "react-icons/md";

const Projects = () => {
  const projectsList = [
    {
      icon: <LuChefHat />,
      name: "HollyFood",
      description: "Recipe App using React, Node and PostgreSQL",
      url: "https://projet-hollyfood-front.onrender.com/",
    },
    {
      icon: <MdBakeryDining />,
      name: "Boule Ange",
      description:
        "Under Construction - Ecommerce App using Typescript, React, Node and PostgreSQL",
      url: "#",
    },
  ];

  return (
    <section className="flex flex-col  justify-center items-center text-center m-4 pt-8">
      <h2 className="text-2xl font-bold">Side, Fun Projects</h2>
      <ul className="m-2 text-sm">
        {projectsList.map((project, index) => (
          <li
            key={index}
            className=" my-2 p-2 border-x-2 border-y-8 border-light-border dark:border-dark-border  hover:contrast-0"
          >
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <h3 className="inline-flex items-center gap-2">
                {project.icon}
                <strong>{project.name}</strong>
              </h3>
              <p>
                <em>{project.description}</em>
              </p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
