import { useState } from "react";
import dummy from "../data/dummy.json";
export default function Answer() {
  const long = dummy.length;
  const [done, setDone] = useState(0);
  const [answered, setAnswered] = useState([]);
  const [answerVal, setAnswerVal] = useState([]);

  const answeredHandler = (val, index) => {
    if (!answered.includes(index)) {
      setAnswered([...answered, index]);
      setDone(done + 1);
      const isCorrect =
        val === dummy[index].correct ? "Correct Answer" : "Wrong Answer";
      const newObj = {
        num: index + 1,
        answer: val,
        correct: isCorrect,
      };
      setAnswerVal((before) => [...before, newObj]);
    }
  };

  console.log(answerVal);

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
                    onChange={(e) => answeredHandler(e.target.value, index)}
                    type="radio"
                    name={index}
                    id={`q-${index}-a`}
                    value="a"
                  />
                  <label htmlFor={`q-${index}-a`}>{data.answer.a}</label>
                </div>
                <div className="flex gap-4">
                  <input
                    onChange={(e) => answeredHandler(e.target.value, index)}
                    type="radio"
                    name={index}
                    id={`q-${index}-b`}
                    value="b"
                  />
                  <label htmlFor={`q-${index}-b`}>{data.answer.b}</label>
                </div>
                <div className="flex gap-4">
                  <input
                    onChange={(e) => answeredHandler(e.target.value, index)}
                    type="radio"
                    name={index}
                    id={`q-${index}-c`}
                    value="c"
                  />
                  <label htmlFor={`q-${index}-c`}>{data.answer.c}</label>
                </div>
                <div className="flex gap-4">
                  <input
                    onChange={(e) => answeredHandler(e.target.value, index)}
                    type="radio"
                    name={index}
                    id={`q-${index}-d`}
                    value="d"
                  />
                  <label htmlFor={`q-${index}-d`}>{data.answer.d}</label>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {done == long ? (
        <span className="text-xs animate-muncul">💡Submit for assesment</span>
      ) : (
        ""
      )}
      <button className="w-1/4 mb-24 font-semibold mt-8 px-8 py-2 rounded-md border-2 border-indigo-500 mx-auto hover:bg-indigo-500 hover:text-slate-900 duration-100 active:animate-ping active:border-slate-900 active:text-slate-100">
        Submit Quiz{" "}
      </button>

      <div className="fixed top-1/2 right-0 border-2 border-indigo-500 w-32 h-10 flex justify-center items-center">
        <div
          style={{ width: `${(done / long) * 100}%` }}
          className="h-full bg-indigo-500 absolute right-0 z-0"
        ></div>
        <p className="z-10">{(done / long) * 100}%</p>{" "}
      </div>

      <section className="flex flex-col gap-4 items-center w-full p-4">
        <h1 className="text-4xl p-8 font-bold bg-gradient-to-r from-indigo-500 to-slate-700 bg-clip-text text-transparent">
          Your Answer is
        </h1>
        {answerVal.map((val, index) => {
          return (
            <div className="p-4 flex items-center" key={index}>
              <p className="flex gap-4 justify-center items-center">
                <span>
                  {val.num}. <span className="font-bold">{val.answer}</span>
                </span>
                <span
                  className={`font-semibold ${
                    val.correct.includes("Correct")
                      ? "text-green-400"
                      : "text-red-500"
                  } p-2`}
                >
                  {val.correct}
                </span>
              </p>
            </div>
          );
        })}
      </section>
    </>
  );
}
