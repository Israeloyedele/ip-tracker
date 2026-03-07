import type { IPDetails, ErrorData } from "../types/ipDetails.ts";
import { Header } from "./Header.tsx";
import { DetailsDisplay } from "./DetailsDisplay.tsx";
import * as React from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";


export function Details(props: { setSearchKey: React.Dispatch<React.SetStateAction<number>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setIpAddress: React.Dispatch<React.SetStateAction<string>>,
    data: IPDetails | null,
    error: ErrorData | null ,
    loading: boolean }) {

    const { setSearchKey, setLoading, setIpAddress, data, error, loading } = props;

    useEffect(() => {
        if(error?.code === 422){
            toast.error("Please input a valid IP address", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        } else if(error?.code === 403){
            toast.error("Server Error", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            toast.error("An error occurred", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    },[error])



    return (
        <div className="bg-[url(/images/pattern-bg-mobile.png)] bg-no-repeat bg-cover lg:bg-[url(/images/pattern-bg-desktop.png)] relative">
            <Header setSearchKey={setSearchKey} setLoading={setLoading} setIpAddress={setIpAddress}/>

            <DetailsDisplay data={data} loading={loading} />

            <ToastContainer
                position="top-center"
                autoClose={2000}
                limit={1}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </div>
    )
}