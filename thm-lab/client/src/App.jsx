
import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import { useState } from "react"

function App() {



  const [valid, setValid] = useState(false)


  return (
    <>
      {!valid ? (
        <Login setValid={setValid} />
      ) : <Dashboard />}
    </>

  )
}

export default App
