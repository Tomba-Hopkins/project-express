import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
    Aos.refresh();
  }, []);

  return (
    <>
      <h1 className="text-4xl p-8 font-bold bg-gradient-to-r from-indigo-500 to-slate-700 bg-clip-text text-transparent">
        About Page
      </h1>

      <section
        data-aos="fade-left"
        className="w-full min-h-screen my-8 p-4 flex flex-col items-center justify-center gap-2"
      >
        <h1 className="text-2xl p-8 font-bold bg-gradient-to-r from-indigo-500 to-slate-300 bg-clip-text text-transparent">
          Summary
        </h1>
        <p className="font-serif text-center bg-gradient-to-r from-indigo-500 to-slate-300 bg-clip-text text-transparent">
          I created this web is for education purpose, so enjoy and keep
          learning
        </p>
        <span className="text-xs">and keep grinding☠️</span>
      </section>

      <section
        data-aos="fade-left"
        className="w-full min-h-screen my-8 p-4 flex flex-col items-center justify-center gap-2"
      >
        <h1 className="text-2xl p-8 font-bold bg-gradient-to-r from-indigo-500 to-slate-300 bg-clip-text text-transparent">
          Tech Stack
        </h1>
        <div className="w-full my-10 p-4 grid grid-cols-2 place-items-center gap-4">
          <div className="p-8 gap-8 flex flex-col items-center w-1/2 rounded-md">
            <h1 className="text-2xl bg-gradient-to-r from-slate-500 font-semibold to-slate-300 bg-clip-text text-transparent">
              Frontend
            </h1>

            <div className="w-full flex flex-wrap gap-8 justify-between items-center">
              <img
                className="w-full md:w-1/4 h-1/4 md:grayscale hover:grayscale-0 duration-150"
                src="/assets/react.svg"
                alt="react"
              />
              <img
                className="w-full md:w-1/4 h-1/4 md:grayscale hover:grayscale-0 duration-150"
                src="/assets/reactrouter.svg"
                alt="react-router"
              />
              <img
                className="w-full md:w-1/4 h-1/4 md:grayscale hover:grayscale-0 duration-150"
                src="/assets/vite.svg"
                alt="vite"
              />
              <img
                className="w-full md:w-1/4 h-1/4 md:grayscale hover:grayscale-0 duration-150"
                src="/assets/tailwindcss.svg"
                alt="tailwind"
              />
              <img
                className="w-full md:w-1/4 h-1/4 md:grayscale hover:grayscale-0 duration-150"
                src="/assets/fa.svg"
                alt="font-awesome"
              />
            </div>
          </div>
          <div className="p-8 gap-8 flex flex-col items-center w-1/2 rounded-md">
            <h1 className="text-2xl bg-gradient-to-r from-slate-500 font-semibold to-slate-300 bg-clip-text text-transparent">
              Backend
            </h1>

            <div className="w-full flex flex-wrap gap-8 justify-between items-center">
              <img
                className="w-1/4 h-1/4 bg-white p-2"
                src="/assets/express.svg"
                alt="express"
              />
              <img
                className="w-full md:w-1/4 h-1/4 md:grayscale hover:grayscale-0 duration-150"
                src="/assets/mongodb.svg"
                alt="mongodb"
              />
              <img
                className="w-1/4 h-1/4"
                src="/assets/mongoose.svg"
                alt="mongoose"
              />
              <img
                className="w-full md:w-1/4 h-1/4 md:grayscale hover:grayscale-0 duration-150"
                src="/assets/node.svg"
                alt="node"
              />
              <img
                className="w-full md:w-1/4 h-1/4 md:grayscale hover:grayscale-0 duration-150"
                src="/assets/dotenv.svg"
                alt="dotenv"
              />
              <img
                className="w-full md:w-1/4 h-1/4 md:grayscale hover:grayscale-0 duration-150"
                src="/assets/docker.svg"
                alt="docker"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        data-aos="fade-left"
        className="w-full min-h-screen my-4 p-4 flex flex-col items-center justify-center gap-2"
      >
        <h1 className="text-2xl p-8 font-bold bg-gradient-to-r from-indigo-500 to-slate-300 bg-clip-text text-transparent">
          Contact me
        </h1>
        <a href="https://github.com/tomba-hopkins">
          <FontAwesomeIcon
            icon={faGithub}
            className="text-9xl text-gray-700 hover:text-gray-50 transition-colors duration-200"
          />
        </a>
      </section>
    </>
  );
}
