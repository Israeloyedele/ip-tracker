import axios, {AxiosResponse} from "axios";

const API_KEY: string = process.env.API_KEY;


export async function GET(request: Request) {
    const ip =
        request.headers.get("x-forwarded-for")?.split(",")[0] ??
        "Unknown";
    let response:AxiosResponse;
    console.log(request.headers)


    try {
        const url: string = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ip}`;
        response  = await axios.get(url);

    }
    catch(err){
        console.log(err);
    }

    return Response.json({ ip, response });
}