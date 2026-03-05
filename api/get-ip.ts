import axios, {AxiosError, AxiosResponse} from "axios";

const API_KEY: string = process.env.API_KEY;


export async function GET(request: Request) {
    const ip =
        request.headers.get("x-forwarded-for")?.split(",")[0] ??
        "Unknown";
    console.log(request.headers)
    const url: string = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ip}`;
    const response = await axios.get(url)
        .then((response: AxiosResponse) => {
        console.log(response.data);
    }).catch((error: AxiosError) => {
        console.log(error.message);
        });


    return Response.json({ ip, response });
}