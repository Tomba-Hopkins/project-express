export default function Quiz() {
  return (
    <>
      <h1>Quiz Page</h1>
      <p>Create Quiz in here</p>

      <form className="flex flex-col gap-8 items-center">
        <div>
          <label htmlFor="quiz">Add ur question in here</label>
          <input type="text" id="quiz" />
        </div>

        <div className="flex flex-col gap-4">
          <section>
            <label htmlFor="a">A.</label>
            <input type="text" id="a" />
          </section>
          <section>
            <label htmlFor="b">B.</label>
            <input type="text" id="b" />
          </section>
          <section>
            <label htmlFor="c">C.</label>
            <input type="text" id="c" />
          </section>
          <section>
            <label htmlFor="d">D.</label>
            <input type="text" id="d" />
          </section>
          <button>Add</button>
        </div>
      </form>

      <main className="flex flex-col gap-8 items-center"></main>
    </>
  );
}
