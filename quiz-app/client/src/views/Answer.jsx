import { useState } from "react";
import dummy from "../data/dummy.json";
export default function Answer() {
  const long = dummy.length;
  const [done, setDone] = useState(0);
  const [answered, setAnswered] = useState([]);

  const answeredHandler = (index) => {
    if (!answered.includes(index)) {
      setAnswered([...answered, index]);
      setDone(done + 1);
    }
  };

  return (
    <>
      <h1 className="text-4xl p-8 font-bold bg-gradient-to-r from-indigo-500 to-slate-700 bg-clip-text text-transparent">
        Answer Page
      </h1>
      <section className="flex flex-col gap-8 m-8 p-8 w-1/2 mx-auto border-2 border-blue-400">
        {dummy.map((data, index) => {
          return (
            <div key={index}>
              <p>
                <span>
                  {index + 1}. {data.question}
                </span>
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <input
                    onChange={() => answeredHandler(index)}
                    type="radio"
                    name={index}
                    id={`q-${index}-a`}
                  />
                  <label htmlFor={`q-${index}-a`}>{data.answer.a}</label>
                </div>
                <div className="flex gap-4">
                  <input
                    onChange={() => answeredHandler(index)}
                    type="radio"
                    name={index}
                    id={`q-${index}-b`}
                  />
                  <label htmlFor={`q-${index}-b`}>{data.answer.b}</label>
                </div>
                <div className="flex gap-4">
                  <input
                    onChange={() => answeredHandler(index)}
                    type="radio"
                    name={index}
                    id={`q-${index}-c`}
                  />
                  <label htmlFor={`q-${index}-c`}>{data.answer.c}</label>
                </div>
                <div className="flex gap-4">
                  <input
                    onChange={() => answeredHandler(index)}
                    type="radio"
                    name={index}
                    id={`q-${index}-d`}
                  />
                  <label htmlFor={`q-${index}-d`}>{data.answer.d}</label>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <button className="w-1/4 mb-24 font-semibold mt-8 px-8 py-2 rounded-md border-2 border-indigo-500 mx-auto hover:bg-indigo-500 hover:text-slate-900 duration-100 active:animate-ping active:border-slate-900 active:text-slate-100">
        Submit Quiz
      </button>

      <div className="fixed top-1/2 left-0 border-2 border-indigo-500 w-32 h-10 flex justify-center items-center">
        <div
          style={{ width: `${(done / long) * 100}%` }}
          className="h-full bg-indigo-500 absolute left-0 z-0"
        ></div>
        <p className="z-10">{(done / long) * 100}%</p>{" "}
      </div>
      {done == long ? (
        <p className="fixed text-2xl top-1/2 animate-ping">Done congratsss👺</p>
      ) : (
        ""
      )}
    </>
  );
}
