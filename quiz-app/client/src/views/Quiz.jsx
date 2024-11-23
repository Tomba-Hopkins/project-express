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

  return (
    <>
      <h1>Quiz Page</h1>
      <p>Create Quiz in here</p>

      <form
        onSubmit={addQuestionHandle}
        className="flex flex-col gap-8 items-center"
      >
        <div>
          <label htmlFor="quiz">Add ur question in here</label>
          <input
            onChange={questionHandle}
            type="text"
            id="quiz"
            className="text-slate-900 p-2"
            value={quiz.question}
            required
          />
        </div>

        <div className="flex flex-col gap-4">
          <section>
            <label htmlFor="a">A.</label>
            <input
              onChange={aHandle}
              className="text-slate-900 p-2"
              type="text"
              id="a"
              value={quiz.a}
              required
            />
          </section>
          <section>
            <label htmlFor="b">B.</label>
            <input
              onChange={bHandle}
              className="text-slate-900 p-2"
              type="text"
              id="b"
              value={quiz.b}
              required
            />
          </section>
          <section>
            <label htmlFor="c">C.</label>
            <input
              onChange={cHandle}
              className="text-slate-900 p-2"
              type="text"
              id="c"
              value={quiz.c}
              required
            />
          </section>
          <section>
            <label htmlFor="d">D.</label>
            <input
              onChange={dHandle}
              className="text-slate-900 p-2"
              type="text"
              id="d"
              value={quiz.d}
              required
            />
          </section>
          <button>Add</button>
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
              <h1 className="border-b-2 border-b-indigo-500">
                {index + 1}. {quiz.question}
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

      <button className="w-1/4 border-2 border-indigo-500 m-8 ">
        Create Quiz
      </button>
    </>
  );
}
