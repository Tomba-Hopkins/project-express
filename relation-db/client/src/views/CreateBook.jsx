

export default function CreateBook(){
    return (
        <>
            <h1 className="text-2xl p-4 border-b-2 border-b-sky-500">Add Book</h1>

            <form className="w-1/2 flex flex-col items-center justify-center gap-4 border-2 border-blue-500 p-8 m-8 rounded-sm">
      
                    <label htmlFor="title">Title</label>
                    <input className="focus:outline-sky-500 p-1 text-center text-slate-900" type="text" id="title" />
      
                    <textarea className="my-8 text-slate-900 p-4" cols="30" rows="10"></textarea>
            
                <button className="w-1/4 rounded-sm border-2 p-1 border-sky-500 hover:bg-blue-500 duration-150 active:animate-ping">Add</button>
            </form>
        </>
    )
}