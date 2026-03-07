import type { Location } from "../types/ipDetails.ts";

export function Map(props:{ location: Location | undefined; loading: boolean }) {
    const { location, loading } = props;


    return(
        <>
            {loading ? "": location?.country}
        </>
    )
}