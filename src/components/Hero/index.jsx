import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="flex justify-center pt-8">
      <div className=" border-x-2 border-y-8 border-light-border dark:border-dark-border  m-2 max-w-xl flex p-2 text-center ">
        <div className="max-w-md ">
          <h1 className="text-4xl font-bold">Hello there</h1>
          <img
            className="rounded-full size-28 mx-auto mb-4"
            src="./src/assets/img/pixelCV.jpg"
            alt="Senor Florian Picture"
          />
          <p className="py-2 text-left text-sm">
            Welcome to my portfolio. My name is Senor Florian and i like to
            build things with
            <span className="flex items-center">
              React
              <FaReact className="text-xl text-cyan-400 mx-1 animate-[spin_5s_linear_infinite]" />
              and Node.js{" "}
              <IoLogoNodejs className="text-xl text-green-400 mx-1" />.
            </span>
            Feel free to browse through my projects and{" "}
            <a className="underline" href="mailto:floriansenor@gmail.com">
              contact me
            </a>{" "}
            if you have any questions{" "}
            <span className="animate-[ping_1.5s_ease-in-out_infinite] font-bold text-2xl">
              .
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
