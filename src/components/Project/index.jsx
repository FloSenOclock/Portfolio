import { LuChefHat } from "react-icons/lu";
import { MdBakeryDining } from "react-icons/md";

const Projects = ({ french }) => {
  const projectsList = [
    {
      icon: <LuChefHat />,
      name: "HollyFood",
      target: "_blank",
      enDesc: "Recipe App using React, Node and PostgreSQL",
      frDesc: "Application utlisant React, Node and PostgreSQL",
      url: "https://projet-hollyfood-front.onrender.com/",
    },
    {
      icon: <MdBakeryDining />,
      name: "Boule Ange",
      target: "",
      enDesc:
        "Under Construction - Ecommerce App using Typescript, React, Node and PostgreSQL",
      frDesc:
        "En construction - Application e-commerce utilisant Typescript, React, Node and PostgreSQL",
      url: "#",
    },
  ];

  return (
    <section className="flex flex-col  justify-center items-center text-center m-4 pt-8">
      {french ? (
        <h2 className="text-2xl font-bold">Projets</h2>
      ) : (
        <h2 className="text-2xl font-bold">Side, Fun Projects</h2>
      )}
      <ul className="m-2 text-sm">
        {projectsList.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target={project.target}
            rel="noopener noreferrer"
          >
            <li className="max-w-5xl my-2 p-2 border-x-2 border-y-8 border-light-border dark:border-dark-border  hover:contrast-0">
              <h3 className="text-lg mb-2 inline-flex items-center gap-2">
                {project.icon}
                <strong>{project.name}</strong>
              </h3>
              <p>
                {french ? <em>{project.frDesc}</em> : <em>{project.enDesc}</em>}
              </p>
            </li>
          </a>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
