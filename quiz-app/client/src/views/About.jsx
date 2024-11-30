import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function About() {
  return (
    <>
      <h1 className="text-4xl p-8 font-bold bg-gradient-to-r from-indigo-500 to-slate-700 bg-clip-text text-transparent">
        About Page
      </h1>
      <FontAwesomeIcon icon={faGithub} className="text-9xl" />
    </>
  );
}
