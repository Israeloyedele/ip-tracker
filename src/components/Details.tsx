import type { IPDetails, ErrorData } from "../types/ipDetails.ts";
import { Loader } from "./Loader.tsx";
import { Header } from "./Header.tsx";
import { DetailsDisplay } from "./DetailsDisplay.tsx";

export function Details(props: { setSearchKey: React.Dispatch<React.SetStateAction<number>>, setLoading: React.Dispatch<React.SetStateAction<boolean>>, setIpAddress: React.Dispatch<React.SetStateAction<string>>, data: IPDetails | null; error: ErrorData | null ; loading: boolean }) {

    const { setSearchKey, setLoading, setIpAddress, data, error, loading } = props;



    return (
        <div>
            <Header setSearchKey={setSearchKey} setLoading={setLoading} setIpAddress={setIpAddress}/>
            { loading ?
                <Loader />
                : <>
                    { data && <DetailsDisplay data={data} /> }
                    { error && <><p>{error.message || error.messages}</p></>}
                </> }
        </div>
    )
}