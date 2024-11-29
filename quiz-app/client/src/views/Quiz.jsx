import { useState } from "react";

export default function Quiz() {
  const [quiz, setQuiz] = useState({
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
  });
  const [quizes, setQuizes] = useState([]);

  const [link, setLink] = useState(false);
  const [clipboard, setClipboard] = useState(false);

  const questionHandle = (e) => {
    setQuiz({
      ...quiz,
      question: e.target.value,
    });
  };
  const aHandle = (e) => {
    setQuiz({
      ...quiz,
      a: e.target.value,
    });
  };
  const bHandle = (e) => {
    setQuiz({
      ...quiz,
      b: e.target.value,
    });
  };
  const cHandle = (e) => {
    setQuiz({
      ...quiz,
      c: e.target.value,
    });
  };
  const dHandle = (e) => {
    setQuiz({
      ...quiz,
      d: e.target.value,
    });
  };

  const addQuestionHandle = (e) => {
    e.preventDefault();

    // const newQuizes = [...quizes, quiz];
    // setQuizes(newQuizes);
    // or

    setQuizes((before) => [...before, quiz]);
    setQuiz({
      question: "",
      a: "",
      b: "",
      c: "",
      d: "",
    });
  };

  const submitHandler = () => {
    setLink(true);
  };

  const copyClipboard = () => {
    const random = Math.round(Math.random() * 10 + 1);
    navigator.clipboard.writeText(`http://localhost:5173/answer/${random}`);
    setClipboard(!clipboard);
  };

  return (
    <>
      <h1 className="text-4xl p-8 font-bold bg-gradient-to-r from-indigo-500 to-slate-700 bg-clip-text text-transparent">
        Quiz Page
      </h1>
      <p className="bg-gradient-to-r from-indigo-500 to-slate-300 bg-clip-text text-transparent">
        Create Quiz in here
      </p>

      <form
        onSubmit={addQuestionHandle}
        className="w-full flex flex-col gap-8 items-center"
      >
        <div className="flex gap-8 justify-center items-center m-8 p-8">
          <label htmlFor="quiz">Add ur question in here</label>
          <textarea
            onChange={questionHandle}
            type="text"
            id="quiz"
            className="text-slate-900 p-1 text-center rounded-md active:outline-2 outline-indigo-500"
            value={quiz.question}
            required
            rows="5"
            cols="30"
          ></textarea>
        </div>

        <div className="flex flex-col gap-8">
          <section className="flex gap-8">
            <label htmlFor="a">A.</label>
            <input
              onChange={aHandle}
              className="text-slate-900 p-2 text-center rounded-md active:outline-2 outline-indigo-500"
              type="text"
              id="a"
              value={quiz.a}
              required
            />
          </section>
          <section className="flex gap-8">
            <label htmlFor="b">B.</label>
            <input
              onChange={bHandle}
              className="text-slate-900 p-2 text-center rounded-md active:outline-2 outline-indigo-500"
              type="text"
              id="b"
              value={quiz.b}
              required
            />
          </section>
          <section className="flex gap-8">
            <label htmlFor="c">C.</label>
            <input
              onChange={cHandle}
              className="text-slate-900 p-2 text-center rounded-md active:outline-2 outline-indigo-500"
              type="text"
              id="c"
              value={quiz.c}
              required
            />
          </section>
          <section className="flex gap-8">
            <label htmlFor="d">D.</label>
            <input
              onChange={dHandle}
              className="text-slate-900 p-2 text-center rounded-md active:outline-2 outline-indigo-500"
              type="text"
              id="d"
              value={quiz.d}
              required
            />
          </section>

          <section className="flex gap-8">
            <p>Select your correct answer</p>
            <select className="w-20 ml-4 text-center rounded-md bg-slate-900 border-2 border-indigo-500 hover:border-indigo-400 hover:bg-indigo-900">
              <option></option>
              <option value="a">A</option>
              <option value="b">B</option>
              <option value="c">C</option>
              <option value="d">D</option>
            </select>
          </section>
          <button className="w-1/2 font-semibold mt-8 px-8 py-2 rounded-md border-2 border-indigo-500 mx-auto hover:bg-indigo-500 hover:text-slate-900 duration-100 active:animate-ping active:border-slate-900 active:text-slate-100">
            Add
          </button>
        </div>
      </form>

      <section className="flex mt-24 flex-col items-start justify-center gap-4 p-4">
        <h1 className="text-2xl"> Hasil pembuatan soal:</h1>

        {quizes.length > 0 ? (
          quizes.map((quiz, index) => (
            <main
              key={index}
              className="flex min-w-32 mb-4 border-b-2 p-8 border-b-indigo-500 flex-col gap-8 items-start"
            >
              <h1 className="border-t-2 border-t-indigo-500">
                <span className="mr-4 font-semibold text-indigo-500">
                  {index + 1}.
                </span>{" "}
                {quiz.question}
              </h1>
              <div>
                <input
                  type="radio"
                  id={`opsi-a-${index + 1}`}
                  name={`opsi-${index + 1}`}
                  value={`A-${index + 1}`}
                />
                <label htmlFor={`opsi-a-${index + 1}`}>A. {quiz.a}</label>
              </div>
              <div>
                <input
                  type="radio"
                  id={`opsi-b-${index + 1}`}
                  name={`opsi-${index + 1}`}
                  value={`B-${index + 1}`}
                />
                <label htmlFor={`opsi-b-${index + 1}`}>B. {quiz.b}</label>
              </div>
              <div>
                <input
                  type="radio"
                  id={`opsi-c-${index + 1}`}
                  name={`opsi-${index + 1}`}
                  value={`C-${index + 1}`}
                />
                <label htmlFor={`opsi-c-${index + 1}`}>C. {quiz.c}</label>
              </div>
              <div>
                <input
                  type="radio"
                  id={`opsi-d-${index + 1}`}
                  name={`opsi-${index + 1}`}
                  value={`D-${index + 1}`}
                />
                <label htmlFor={`opsi-d-${index + 1}`}>D. {quiz.d}</label>
              </div>
            </main>
          ))
        ) : (
          <p>Soal Masih kosong... 👺</p>
        )}
      </section>

      {link && (
        <div className="flex gap-4 p-1 justify-center items-center">
          <div className="animate-faded flex gap-2 p-4 justify-center items-center bg-slate-50/30 backdrop-blur-md rounded-md border-2 border-indigo-500">
            <input
              className="p-1 rounded-md text-center border-2 border-indigo-500"
              type="text"
              disabled
              value="https://sebussmith.com/123/332"
            />
            <button
              onClick={copyClipboard}
              className={`p-2 ${
                clipboard ? "bg-slate-900" : ""
              } border-2 border-indigo-500 rounded-md hover:bg-indigo-500`}
            >
              copy
            </button>
          </div>
          {clipboard && (
            <p className={`animate-copied absolute right-1/3`}>Copied</p>
          )}
        </div>
      )}

      <button
        onClick={submitHandler}
        className="w-1/4 mb-24 font-semibold mt-8 px-8 py-2 rounded-md border-2 border-indigo-500 mx-auto hover:bg-indigo-500 hover:text-slate-900 duration-100 active:animate-btn active:border-slate-900 active:text-slate-100"
      >
        Create Quiz
      </button>
    </>
  );
}
