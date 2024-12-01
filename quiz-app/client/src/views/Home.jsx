import aos from "aos";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <header className="w-full min-h-screen my-8 flex justify-center items-center flex-col gap-4">
        <h1 className="text-4xl p-8 font-bold bg-gradient-to-r from-indigo-500 to-slate-700 bg-clip-text text-transparent">
          Home Page
        </h1>
        <p className="bg-gradient-to-r from-indigo-500 to-slate-200 bg-clip-text text-transparent">
          Welcome to main page, please explore this website for more
        </p>
      </header>

      <section className="p-4 my-8 mb-32 min-h-screen flex flex-col gap-8 items-center">
        <h2 className="text-3xl mb-12 p-1 font-semibold bg-gradient-to-r from-slate-500 to-slate-300 bg-clip-text text-transparent">
          Lets get started
        </h2>

        <div
          data-aos="fade-left"
          className="flex my-28 flex-col gap-8 justify-center items-center"
        >
          <h2 className="text-2xl p-1 font-semibold bg-gradient-to-r from-slate-500 to-slate-300 bg-clip-text text-transparent">
            1. Create your Quiz
          </h2>
          <img
            className="w-1/4 border-2 hover:scale-110 duration-200 border-slate-500 rounded-md"
            src="/img/1.png"
            alt="1"
          />
        </div>
        <div
          data-aos="fade-left"
          className="flex my-28 flex-col gap-8 justify-center items-center"
        >
          <h2 className="text-2xl p-1 font-semibold bg-gradient-to-r from-slate-500 to-slate-300 bg-clip-text text-transparent">
            2. Share your Quiz link
          </h2>
          <img
            className="w-1/4 border-2 hover:scale-110 duration-200 border-slate-500 rounded-md"
            src="/img/2.png"
            alt="2"
          />
        </div>
        <div
          data-aos="fade-left"
          className="flex my-28 flex-col gap-8 justify-center items-center"
        >
          <h2 className="text-2xl p-1 font-semibold bg-gradient-to-r from-slate-500 to-slate-300 bg-clip-text text-transparent">
            3. See their assesment
          </h2>
          <img
            className="w-1/4 border-2 hover:scale-110 duration-200 border-slate-500 rounded-md"
            src="/img/3.png"
            alt="3"
          />
        </div>
      </section>
    </>
  );
}
