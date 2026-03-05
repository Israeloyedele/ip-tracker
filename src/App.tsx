import { useEffect } from "react";
import axios from "axios";


function App() {
    useEffect(()=> {
        axios.get("/api/get-ip")
                .then(res=> console.log(res.data));
    },[])

  return (
    <>
        <h1 className="text-4xl font-bold underline text-amber-500">Hello</h1>
    </>
  )
}

export default App
