import {useEffect, useState} from "react";
import axios from "axios";


function App() {

    const [ip, setIp] = useState("")

    useEffect(()=> {
        axios.get("/api/get-ip")
            .then(res=> console.log(res.data.ip));
    },[])
    useEffect(() => {
        axios.post("/api/get-ip-details", { ip: ip }).then(res=> console.log(res.data));
    }, [ip]);

  return (
    <>
        <h1 className="text-4xl font-bold underline text-amber-500">Hello</h1>
    </>
  )
}

export default App
