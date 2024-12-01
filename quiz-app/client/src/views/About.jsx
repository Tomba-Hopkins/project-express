import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function About() {
  return (
    <>
      <h1 className="text-4xl p-8 font-bold bg-gradient-to-r from-indigo-500 to-slate-700 bg-clip-text text-transparent">
        About Page
      </h1>

      <section className="w-full min-h-screen my-8 p-4 flex flex-col items-center justify-center gap-2">
        <h1 className="text-2xl p-8 font-bold bg-gradient-to-r from-indigo-500 to-slate-300 bg-clip-text text-transparent">
          Summary
        </h1>
        <p className="font-serif text-center bg-gradient-to-r from-indigo-500 to-slate-300 bg-clip-text text-transparent">
          I created this web is for education purpose, so enjoy and keep
          learning
        </p>
        <span className="text-xs">and keep grinding☠️</span>
      </section>

      <section className="w-full min-h-screen my-8 p-4 flex flex-col items-center justify-center gap-2">
        <h1 className="text-2xl p-8 font-bold bg-gradient-to-r from-indigo-500 to-slate-300 bg-clip-text text-transparent">
          Tech Stack
        </h1>
        <div className="w-full my-10 p-4 grid grid-cols-2 place-items-center gap-4">
          <div className="p-4 gap-8 flex flex-col items-center w-1/2 border-2 border-indigo-500 rounded-sm">
            <h1 className="bg-gradient-to-r from-slate-500 font-semibold to-slate-300 bg-clip-text text-transparent">
              Frontend
            </h1>
            <div className="w-full border-2 border-indigo-500 flex flex-wrap"></div>
          </div>
          <div className="p-4 gap-8 flex flex-col items-center w-1/2 border-2 border-indigo-500 rounded-sm">
            <h1 className="bg-gradient-to-r from-slate-500 font-semibold to-slate-300 bg-clip-text text-transparent">
              Backend
            </h1>
            <div className="w-full border-2 border-indigo-500 flex flex-wrap"></div>
          </div>
        </div>
      </section>

      <section className="w-full min-h-screen my-4 p-4 flex flex-col items-center justify-center gap-2">
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
