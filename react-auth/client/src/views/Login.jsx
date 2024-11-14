function Login(){
    return(
        <>
            <h1 className="text-3xl">Login Page</h1>

            <form className="w-1/2 h-72 flex flex-col items-center justify-center gap-4 border-2 border-blue-500 p-8 m-8 rounded-sm">
      
                    <label htmlFor="username">Username</label>
                    <input className="focus:outline-sky-500 p-1 text-center text-slate-900" type="text" id="username" />
      
                    <label htmlFor="password">Password</label>
                    <input className="focus:outline-sky-500 p-1 text-center text-slate-900" type="text" id="password" />
                    <div>
                        <input className="mr-4" type="checkbox" id="cek" />
                        <label htmlFor="cek">show password</label>
                    </div>
                <button className="w-1/4 rounded-sm border-2 p-1 border-sky-500 hover:bg-blue-500 duration-150 active:animate-ping">Login</button>
            </form>
        </>
    )
}


export default Login