import {useEffect, useState} from "react";
import axios from "axios";
import type { IPDetails, ErrorData } from "./types/ipDetails.ts";
import { Details } from "./components/Details.tsx";
import { Map } from "./components/Map.tsx";


function App() {
    const [data, setData] = useState<IPDetails | null>(null);
    const [error, setError] = useState<ErrorData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [ipAddress, setIpAddress] = useState("");
    const [searchKey, setSearchKey] = useState(0);



    useEffect(()=> {
        axios.get("/api/get-ip", {
            params: { ip: ipAddress }
        })
            .then(res=> {
                setData(res.data)
                setError(null)
            })
            .catch(err => {
                setError(err.response.data)
                setData(null)
            })
            .finally(() => setLoading(false));
    },[ipAddress, searchKey])
    // console.log(error, data);


  return (
    <div className="font-[Rubik]">
        <Details setSearchKey={setSearchKey} setLoading={setLoading} setIpAddress={setIpAddress} data={data} error={error} loading={loading} />
        <Map location={data?.location} loading={loading} />
    </div>
  )
}

export default App
