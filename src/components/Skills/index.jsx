import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact, FaGithub } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { SiJavascript, SiPostgresql } from "react-icons/si";
const Skills = ({ french }) => {
  const skillsList = [
    {
      icon: <SiJavascript className="text-yellow-400 text-xl" />,
      name: "Javascript",
    },
    { icon: <FaReact className="text-cyan-400 text-xl" />, name: "React" },
    {
      icon: <RiTailwindCssFill className="text-cyan-500 text-xl" />,
      name: "TailwindCSS",
    },
    {
      icon: <IoLogoNodejs className="text-green-400 text-xl" />,
      name: "Node.js",
    },
    { icon: <FaGithub className="text-xl" />, name: "Github" },
    {
      icon: <SiPostgresql className="text-blue-400 text-xl" />,
      name: "PostgreSQL",
    },
  ];

  return (
    <section className="flex flex-col  items-center justify-center text-center m-4 pt-8">
      {french ? (
        <h2 className="text-2xl font-bold">Compétences</h2>
      ) : (
        <h2 className="text-2xl font-bold">Skills</h2>
      )}

      <article className=" md:flex md:flex-wrap justify-center m-2 text-sm">
        {skillsList.map((skill, index) => (
          <div
            key={index}
            className=" my-1 md:m-1 p-2 border-x-2 border-y-8 border-light-border dark:border-dark-border"
          >
            <h3 className="inline-flex items-center gap-2">
              {skill.icon}
              <strong>{skill.name}</strong>
            </h3>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Skills;
