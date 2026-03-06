import type {IPDetails} from "../types/ipDetails.ts";

export function DetailsDisplay(props: { data: IPDetails}) {
    const { data } = props;


    return(
        <div>
            <div>
                <p>IP ADDRESS</p>
                <p>{data.ip}</p>
            </div>

            <div>
                <p>LOCATION</p>
                <p>{`${data.location.city}, ${data.location.region} ${data.location.postalCode}`}</p>
            </div>

            <div>
                <p>TIMEZONE</p>
                <p>{`UTC ${data.location.timezone || ""}`}</p>
            </div>

            <div>
                <p>ISP</p>
                <p>{data.isp}</p>
            </div>
        </div>
    )
}