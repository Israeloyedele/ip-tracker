import type {IPDetails} from "../types/ipDetails.ts";
import { Loader } from "./Loader.tsx";

export function DetailsDisplay(props: { data: IPDetails | null, loading: boolean}) {
    const { data, loading } = props;


    return(
        <div className="flex justify-center absolute z-100000 top-1/2 left-0 right-0 mt-0.5 px-5 bg-white mx-5 rounded-2xl shadow-lg lg:mt-7 lg:mx-40">
                { loading ? <Loader /> :
                    <div className="flex flex-col items-center justify-center px-10 max-w-2xl bg-white gap-5 py-5 w-full rounded-2xl lg:flex-row lg:max-w-full lg:gap-0 lg:justify-between lg:py-15 lg:justify-items-center">
                        <div className="flex flex-col justify-items-center text-center gap-1 lg:gap-3 lg:text-left lg:border-r lg:border-gray-300 lg:justify-self-center lg:grow">
                            <p className="text-gray-400 text-xs font-bold tracking-widest lg:text-sm">IP ADDRESS</p>
                            <p className="text-lg font-semibold lg:text-3xl">{data?.ip || "..."}</p>
                        </div>

                        <div className="flex flex-col justify-items-center text-center gap-1 lg:gap-3 lg:text-left lg:border-r lg:border-gray-300 lg:justify-self-center lg:grow lg:pl-10">
                            <p className="text-gray-400 text-xs font-bold tracking-widest lg:text-sm">LOCATION</p>
                            <p className="text-lg font-semibold lg:text-3xl">{data?.location.city ?
                                `${data?.location.city}, ${data?.location.region} ${data?.location.postalCode}`
                                : "..."}</p>
                        </div>

                        <div className="flex flex-col justify-items-center text-center gap-1 lg:gap-3 lg:text-left lg:border-r lg:border-gray-300 lg:grow lg:pl-10">
                            <p className="text-gray-400 text-xs font-bold tracking-widest lg:text-sm">TIMEZONE</p>
                            <p className="text-lg font-semibold lg:text-3xl">{data?.location.timezone && `UTC ${data?.location?.timezone}` || "..."}</p>
                        </div>

                        <div className="flex flex-col justify-items-center text-center gap-1 lg:gap-3 lg:text-left lg:grow lg:pl-10">
                            <p className="text-gray-400 text-xs font-bold tracking-widest lg:text-sm">ISP</p>
                            <p className="text-lg font-semibold lg:text-3xl">{data?.isp || "..."}</p>
                        </div>
                    </div>
                }
            {/*</div>*/}

        </div>
    )
}