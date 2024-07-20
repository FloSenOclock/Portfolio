import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";

const Hero = ({ french }) => {
  return (
    <div className="flex justify-center pt-8">
      <div className=" border-x-2 border-y-8 border-light-border dark:border-dark-border  m-2 max-w-xl flex p-2 text-center ">
        <div>
          {french ? (
            <h1 className="text-4xl font-bold my-2">Bonjour!</h1>
          ) : (
            <h1 className="text-4xl font-bold my-2">Hello there</h1>
          )}
          <img
            className="rounded-full size-28 mx-auto mb-4"
            src="/images/pixelCV.jpg"
            alt="Senor Florian Picture"
          />
          {french ? (
            <p className="py-2 text-left text-sm text-center">
              Bienvenue sur mon portfolio. <br />
              Je suis Florian Senor <br /> et aime développer des projets avec{" "}
              <span className="flex items-center justify-center ">
                React
                <FaReact className="text-xl mx-2 text-cyan-400 mx-1 animate-[spin_5s_linear_infinite]" />
                et Node.js{" "}
                <IoLogoNodejs className="text-xl text-green-400 mx-1" />.
              </span>
              Sentez vous libre de parcourir mes projets et{" "}
              <a className="underline" href="mailto:floriansenor@gmail.com">
                me contacter
              </a>{" "}
              si vous avez la moindre question
              <span className="animate-[ping_1.5s_ease-in-out_infinite] font-bold text-2xl">
                .
              </span>
            </p>
          ) : (
            <p className="py-2 text-left text-sm text-center">
              Welcome to my portfolio. <br />
              My name is Florian Senor <br /> and i like to build things with{" "}
              <span className="flex items-center justify-center ">
                React
                <FaReact className="text-xl mx-2 text-cyan-400 mx-1 animate-[spin_5s_linear_infinite]" />
                and Node.js{" "}
                <IoLogoNodejs className="text-xl text-green-400 mx-1" />.
              </span>
              Feel free to browse through my projects and{" "}
              <a className="underline" href="mailto:floriansenor@gmail.com">
                contact me
              </a>{" "}
              if you have any questions
              <span className="animate-[ping_1.5s_ease-in-out_infinite] font-bold text-2xl">
                .
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
